import express from "express";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";
import fs from "fs/promises";
import { createServer as createViteServer } from "vite";

const __dirname = dirname(fileURLToPath(import.meta.url));

async function startServer() {
  const app = express();

  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: "custom",
  });

  app.use(vite.middlewares);

  app.use(/.*/, async (req, res) => {
    try {
      const url = req.originalUrl;

      const templatePath = resolve(__dirname, "index.html");
      let template = await fs.readFile(templatePath, "utf-8");
      template = await vite.transformIndexHtml(url, template);

      const { render } = await vite.ssrLoadModule("/src/entry-server.tsx");
      const { html, dehydratedState } = await render(url);
      const dehydrated = JSON.stringify(dehydratedState);

      const renderedHtml = template
        .replace(`<!--ssr-outlet-->`, html)
        .replace(
          "</body>",
          `<script>window.__DEHYDRATED_STATE__ = ${dehydrated}</script></body>`
        );

      res.status(200).set({ "Content-Type": "text/html" }).end(renderedHtml);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (e: any) {
      vite.ssrFixStacktrace(e);
      console.error(e);
      res.status(500).end(e.message);
    }
  });

  app.listen(5173, () => {
    console.log("✅ SSR server running at http://localhost:5173");
  });
}

startServer();
