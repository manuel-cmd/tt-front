import React from "react";

import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./App.css";

//import Login from "./pages/Administrador/Login/Login";

//import Menu_r from "./components/Views/Menu/Menu_r";
import { ROUTES } from "./constants/routes";
import { ROUTES_ADMIN } from "./constants/routes_administrador";
import { ROUTES_REGISTRADO } from "./constants/routes_usuario_registrado";
import Menu_admin from "./components/Views/Menu/Menu_admin";
import Menu_no_r from "./components/Views/Menu/Menu_no_r";
import Menu_r from "./components/Views/Menu/Menu_r";
import InfoSitio from "./components/Views/Cuadros/InfoSitio";
import Comentarios from "./components/Views/Cuadros/Comentarios";
import Favoritos from "./pages/UsuarioRegistrado/Favoritos/Favoritos";
import Reseñas from "./pages/UsuarioRegistrado/Reseñas/Reseñas";
import Reseñar from "./components/Views/Cuadros/Reseñar";
// ----------------- Esto es del usuario no registrado
/*import Menu_no_r from "./components/Views/Menu/Menu_no_r";
import { ROUTES } from "./constants/routes";
import Inicio from "./pages/UsuarioNoRegistrado/Inicio/Inicio";
import Sitios from "./pages/UsuarioNoRegistrado/Sitios/Sitios";
import Configuracion from "./pages/UsuarioNoRegistrado/Configuracion/Configuracion";
import InfoSitio from "./components/Views/Cuadros/InfoSitio";
import Comentarios from "./components/Views/Cuadros/Comentarios";*/

// ----------------- Esto es del usuario registrado
/*//import { ROUTES_REGISTRADO } from "./constants/routes_usuario_registrado";
//import Menu_r from "./components/Views/Menu/Menu_r";
import Inicio from "./pages/UsuarioRegistrado/Inicio/Inicio";
import Sitios from "./pages/UsuarioRegistrado/Sitios/Sitios";
//import Favoritos from "./pages/UsuarioRegistrado/Favoritos/Favoritos";
//import Reseñas from "./pages/UsuarioRegistrado/Reseñas/Reseñas";
import Configuracion from "./pages/UsuarioRegistrado/Configuracion/Configuracion";
//import InfoSitio from "./components/Views/Cuadros/InfoSitio";
//import Comentarios from "./components/Views/Cuadros/Comentarios";
//import Reseñar from "./components/Views/Cuadros/Reseñar";*/

import Usuarios from "./pages/Administrador/Usuarios/Usuarios";

// ----------------- Esto es del administrador
//import { ROUTES_ADMIN } from "./constants/routes_administrador";
import Inicio from "./pages/Administrador/Inicio/Inicio";
import Sitios from "./pages/Administrador/Sitios/Sitios";
import SitioID from "./pages/Administrador/Sitios/pages/SitioID/SitioID";
import UsuarioID from "./pages/Administrador/Usuarios/pages/UsuarioID/UsuarioID";
//import Usuarios from "./pages/Administrador/Usuarios/Usuarios";
import Configuracion from "./pages/Administrador/Configuracion/Configuracion";
import SitioActualizar from "./components/Views/Cuadros/Administrador/SitioActualizar";
import ComentariosAdministrador from "./components/Views/Cuadros/Administrador/ComentariosAdministrador";
import HistorialUsuario from "./components/Views/Cuadros/Administrador/HistorialUsuario";
//import Menu_admin from "./components/Views/Menu/Menu_admin";

//import SitioID from "./pages/Administrador/Sitios/pages/SitioID/SitioID";

function App() {
  const opcion = 2;
  {
    /*--------------------Parte del usuario no registrado--------------------*/
  }
  if (opcion === 0) {
    return (
      <div className="App">
        <div>
          <Menu_no_r />
        </div>
        <div className="contenido" style={{ padding: "1rem" }}>
          <Routes>
            <Route path={ROUTES.INICIO} element={<Inicio />} />
            <Route path={ROUTES.SITIOS} element={<Sitios />} />
            {
              //<Route path={ROUTES.SITIOSID + "/:id"} element={<SitioID />} />
              //<Route path={ROUTES.USUARIOS} element={<Usuarios />} />
            }
            <Route path={ROUTES.CONFIGURACION} element={<Configuracion />} />
            <Route path={ROUTES.SITIOSID} element={<InfoSitio />} />
            <Route path={ROUTES.COMENTARIOS} element={<Comentarios />} />
          </Routes>
        </div>
      </div>
    );
  }
  {
    /*--------------------Parte del usuario registrado--------------------*/
  }
  if (opcion === 1) {
    return (
      <div className="App">
        <div>
          <Menu_r />
        </div>
        <div className="contenido" style={{ padding: "1rem" }}>
          <Routes>
            <Route path={ROUTES_REGISTRADO.INICIO} element={<Inicio />} />
            <Route path={ROUTES_REGISTRADO.SITIOS} element={<Sitios />} />
            <Route path={ROUTES_REGISTRADO.FAVORITOS} element={<Favoritos />} />
            <Route path={ROUTES_REGISTRADO.RESEÑAS} element={<Reseñas />} />
            <Route
              path={ROUTES_REGISTRADO.CONFIGURACION}
              element={<Configuracion />}
            />
            <Route path={ROUTES_REGISTRADO.SITIOSID} element={<InfoSitio />} />
            <Route
              path={ROUTES_REGISTRADO.COMENTARIOS}
              element={<Comentarios />}
            />
            <Route path={ROUTES_REGISTRADO.RESEÑAR} element={<Reseñar />} />
          </Routes>
        </div>
      </div>
    );
  }
  {
    /*--------------------Parte del administrador--------------------*/
  }
  if (opcion === 2) {
    return (
      <div className="App">
        <div>
          <Menu_admin />
        </div>
        <div className="contenido" style={{ padding: "1rem" }}>
          <Routes>
            <Route path={ROUTES_ADMIN.INICIO} element={<Inicio />} />
            <Route path={ROUTES_ADMIN.SITIOS} element={<Sitios />} />
            <Route path={ROUTES_ADMIN.SITIOSID} element={<SitioID />} />
            {<Route path={ROUTES_ADMIN.USUARIOSID} element={<UsuarioID />} />}
            <Route path={ROUTES_ADMIN.USUARIOS} element={<Usuarios />} />
            <Route path={ROUTES_ADMIN.RESEÑAS} element={<Sitios />} />
            <Route
              path={ROUTES_ADMIN.CONFIGURACION}
              element={<Configuracion />}
            />
            <Route
              path={ROUTES_ADMIN.SITIOACTUALIZAR}
              element={<SitioActualizar />}
            />
            <Route
              path={ROUTES_ADMIN.COMENTARIOSADMINISTRADOR}
              element={<ComentariosAdministrador />}
            />
            <Route
              path={ROUTES_ADMIN.HISTORIAL}
              element={<HistorialUsuario />}
            />
          </Routes>
        </div>
      </div>
    );
  }
}

export default App;
