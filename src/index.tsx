import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./components/app";
import reportWebVitals from "./reportWebVitals";

import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import "./i18n";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

reportWebVitals();
