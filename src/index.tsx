import { BrowserRouter } from "react-router-dom";
import { App } from "./App";
import ReactDOM from "react-dom/client";
import React from "react";
import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
