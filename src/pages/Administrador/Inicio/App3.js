import React from "react";

import { useEffect, useMemo, useState } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import esLocal from "date-fns/locale/es";

import "./App.css";
import Menu_admin from "../../../components/Views/Menu/Menu_admin";
import Inicio from "./Inicio";
import Sitios from "../Sitios/Sitios";
import SitioID from "../../Administrador/Sitios/pages/SitioID/SitioID";
import Usuarios from "../../Administrador/Usuarios/Usuarios";
import UsuarioID from "../../Administrador/Usuarios/pages/UsuarioID/UsuarioID";
import Configuracion from "../../Administrador/Configuracion/Configuracion";
import SitioActualizar from "../../../components/Views/Cuadros/Administrador/SitioActualizar";
import ComentariosAdministrador from "../../../components/Views/Cuadros/Administrador/ComentariosAdministrador";
import HistorialUsuario from "../../../components/Views/Cuadros/Administrador/HistorialUsuario";
import { ROUTES_ADMIN } from "../../../constants/routes_administrador";
import SitioNuevo from "../../../components/Views/Cuadros/Administrador/SitioNuevo";

export const UserContext = React.createContext();

function App3() {
  const [user, setUser] = useState(null);
  const [nombre, setNombre] = useState(null);
  const [tipo, setTipo] = useState(null);
  const u_m = [];
  const u = JSON.parse(localStorage.getItem("usuario"));
  useEffect(() => {
    if (user == null) {
      console.log("u es: ", u);
      setNombre(u?.usuario);
      setTipo(u?.tipo_usuario);
      setUser(u_m);
      console.log("el usuario es: ", user);
    }
  }, []);

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils} locale={esLocal}>
      <UserContext.Provider value={u}>
        <div className="App">
          <div>
            <Menu_admin />
          </div>
          <div className="contenido" style={{ padding: "1rem" }}>
            <Routes>
              <Route path={ROUTES_ADMIN.INICIO} element={<Inicio />} />
              <Route path={ROUTES_ADMIN.SITIOS} element={<Sitios />} />
              <Route
                path={ROUTES_ADMIN.SITIOSID + "/:id"}
                element={<SitioID />}
              />
              {
                <Route
                  path={ROUTES_ADMIN.USUARIOSID + "/:id"}
                  element={<UsuarioID />}
                />
              }
              <Route path={ROUTES_ADMIN.USUARIOS} element={<Usuarios />} />
              <Route
                path={ROUTES_ADMIN.RESEÑAS + "/:id"}
                element={<Sitios />}
              />
              <Route
                path={ROUTES_ADMIN.CONFIGURACION}
                element={<Configuracion />}
              />
              <Route path={ROUTES_ADMIN.SITIONUEVO} element={<SitioNuevo />} />
              <Route
                path={ROUTES_ADMIN.CONFIGURACION}
                element={<Configuracion />}
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
      </UserContext.Provider>
    </MuiPickersUtilsProvider>
  );
}

export default App3;
