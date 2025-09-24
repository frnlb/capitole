import "./index.scss";
import { StrictMode } from "react";
import { hydrateRoot } from "react-dom/client";
import App from "./App";
import type { ServerData } from "./entry-server";

const initialData = (window as any).__INITIAL_DATA__ as ServerData;

hydrateRoot(
  document.getElementById("root") as HTMLElement,
  <StrictMode>
    <App initialData={initialData} />
  </StrictMode>
);
