import ReactDOMServer from "react-dom/server";
import { App } from "./App";
import { createMemoryRouter } from "react-router-dom";
import { AppRoutes } from "./routes/root";

export function render(url: string) {
  const serverRouter = createMemoryRouter(AppRoutes, {
    initialEntries: [url],
  });

  const html = ReactDOMServer.renderToString(<App router={serverRouter} />);

  return { html };
}
