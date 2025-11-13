import ReactDOM from "react-dom/client";
import { App } from "./App";
import { StrictMode } from "react";
import "./index.css";

const isDev = import.meta.env.DEV;

const Root = isDev ? (
  <StrictMode>
    <App />
  </StrictMode>
) : (
  <App />
);

ReactDOM.hydrateRoot(document.getElementById("root")!, Root);
