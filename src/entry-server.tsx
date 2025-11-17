import ReactDOMServer from "react-dom/server";
import { App } from "./App";
import { createMemoryRouter } from "react-router-dom";
import { AppRoutes } from "./routes/root";
import {
  dehydrate,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

export async function render(url: string) {
  const queryClient = new QueryClient();

  const serverRouter = createMemoryRouter(AppRoutes, {
    initialEntries: [url],
  });

  const html = ReactDOMServer.renderToString(
    <QueryClientProvider client={queryClient}>
      <App router={serverRouter} />
    </QueryClientProvider>
  );

  const dehydratedState = dehydrate(queryClient);

  return { html, dehydratedState };
}
