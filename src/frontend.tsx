import React from "react";
import { createRoot } from "react-dom/client";
import NiceModal from "@ebay/nice-modal-react";
import App from "./App";
import "./index.css";

const rootElement = document.getElementById("root");

if (rootElement) {
  const root = createRoot(rootElement);
  root.render(
    <NiceModal.Provider>
      <App />
    </NiceModal.Provider>
  );
}
