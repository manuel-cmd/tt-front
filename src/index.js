import ReactDOM from "react-dom/client";
import React from "react";

import App from "./App";

import LayoutLog from "./layout/LayoutLog";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Administrador/Login/Login";
import "./index.css";
import { ROUTES_REGISTRADO } from "./constants/routes_usuario_registrado";
import App2 from "./pages/UsuarioRegistrado/Inicio/App2";
import App3 from "./pages/Administrador/Inicio/App3";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      {/*<Route path="/login" element={<Login />} />*/}
      <Route path="/*" element={<App />} />
      <Route path={"/usuario/*"} element={<App2 />} />
      <Route path={"/administrador/*"} element={<App3 />} />
    </Routes>
  </BrowserRouter>
);
