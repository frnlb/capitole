import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "@/styles/globals.scss";

const ssrData = (window as any).__SSR_DATA__ || {};

const container = document.getElementById("root");
if (container) {
  ReactDOM.hydrateRoot(
    container,
    <React.StrictMode>
      <BrowserRouter>
        <App ssrData={ssrData} />
      </BrowserRouter>
    </React.StrictMode>
  );
}
