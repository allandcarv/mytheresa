import ReactDOM from "react-dom/client";
import { App } from "./App";
import { StrictMode } from "react";
import "./index.css";
import { IS_DEV } from "./constants";
import { createBrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes/root";

const clientRouter = createBrowserRouter(AppRoutes);

const Root = IS_DEV ? (
  <StrictMode>
    <App router={clientRouter} />
  </StrictMode>
) : (
  <App router={clientRouter} />
);

ReactDOM.hydrateRoot(document.getElementById("root")!, Root);
