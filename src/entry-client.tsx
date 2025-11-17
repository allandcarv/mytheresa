import ReactDOM from "react-dom/client";
import { App } from "./App";
import { StrictMode } from "react";
import "./index.css";
import { IS_DEV } from "./constants";
import { createBrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes/root";
import {
  QueryClient,
  QueryClientProvider,
  HydrationBoundary,
} from "@tanstack/react-query";

const clientRouter = createBrowserRouter(AppRoutes);
// @ts-expect-error hydration
const dehydratedState = window.__DEHYDRATED_STATE__; // Read from global

const queryClient = new QueryClient();

const Root = IS_DEV ? (
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <HydrationBoundary state={dehydratedState}>
        <App router={clientRouter} />
      </HydrationBoundary>
    </QueryClientProvider>
  </StrictMode>
) : (
  <App router={clientRouter} />
);

ReactDOM.hydrateRoot(document.getElementById("root")!, Root);
