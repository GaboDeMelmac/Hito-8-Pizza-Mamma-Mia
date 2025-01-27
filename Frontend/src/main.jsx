import React, { StrictMode } from "react";
import { createRoot, ReactDOM } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import CardContext from "./context/CardContext.jsx";
import App from "./App.jsx";
import CounterProvider from "./context/CardContext.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <CounterProvider>
      <App />
    </CounterProvider>
  </BrowserRouter>
);
