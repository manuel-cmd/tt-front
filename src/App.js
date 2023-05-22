import React from "react";

import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./App.css";

//import Login from "./pages/Administrador/Login/Login";

//import Menu_r from "./components/Views/Menu/Menu_r";
import { ROUTES } from "./constants/routes";

import Menu_no_r from "./components/Views/Menu/Menu_no_r";
import InfoSitio from "./components/Views/Cuadros/InfoSitio";
import Comentarios from "./components/Views/Cuadros/Comentarios";

import {
  Inicio,
  Sitios,
  Configuracion,
  Login,
  Registrar,
} from "./pages/UsuarioNoRegistrado";

function App() {
  return (
    <div className="App">
      <div>
        <Menu_no_r />
      </div>
      <div className="contenido" style={{ padding: "1rem" }}>
        <Routes>
          <Route path={ROUTES.INICIO} element={<Inicio />} />
          <Route path={ROUTES.SITIOS} element={<Sitios />} />
          <Route path={ROUTES.SITIOSID + "/:id"} element={<InfoSitio />} />
          <Route path={ROUTES.CONFIGURACION} element={<Configuracion />} />
          <Route path={ROUTES.COMENTARIOS + "/:id"} element={<Comentarios />} />
          <Route path={ROUTES.LOGIN} element={<Login />} />
          <Route path={ROUTES.REGISTRAR} element={<Registrar />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
