import ReactDOM from "react-dom/client";
import React from "react";
import "./index.css";
import App from "./App";
import LayoutLog from "./layout/LayoutLog";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Administrador/Login/Login";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route path="/*" element={<App />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
