import React, { useEffect, useMemo, useState } from "react";

import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./App.css";

import Menu_r from "../../../components/Views/Menu/Menu_r";
import Inicio from "./Inicio";
import Sitios from "../../UsuarioRegistrado/Sitios/Sitios";
import Favoritos from "../Favoritos/Favoritos";
import Reseñas from "../Reseñas/Reseñas";
import Configuracion from "../../UsuarioRegistrado/Configuracion/Configuracion";
import InfoSitio from "../../../components/Views/Cuadros/InfoSitio";
import Comentarios from "../../../components/Views/Cuadros/Comentarios";
import Reseñar from "../../../components/Views/Cuadros/Reseñar";
import { ROUTES_REGISTRADO } from "../../../constants/routes_usuario_registrado";

//import { UserProvider } from "../../../context/UserContext";
export const UserContext = React.createContext();

function App2() {
  const [user, setUser] = useState(null);
  const [nombre, setNombre] = useState(null);
  const [tipo, setTipo] = useState(null);
  const u_m = [];
  const u = JSON.parse(localStorage.getItem("usuario"));
  useEffect(() => {
    if (user == null) {
      console.log("u es: ", u);
      setNombre(u.usuario);
      setTipo(u.tipo_usuario);
      setUser(u_m);
      console.log("el usuario es: ", user);
    }
  }, []);
  //const datos = useMemo(() => usuario, [usuario]);

  return (
    <div>
      <UserContext.Provider value={u}>
        {console.log("prueba", nombre)}
        {/*<UserState>*/}
        <div className="App">
          <div>
            <Menu_r />
          </div>
          <div className="contenido" style={{ padding: "1rem" }}>
            <Routes>
              <Route
                path={`${ROUTES_REGISTRADO.INICIO}`}
                element={<Inicio />}
              />
              <Route
                path={`${ROUTES_REGISTRADO.SITIOS}`}
                element={<Sitios />}
              />
              <Route
                path={`${ROUTES_REGISTRADO.FAVORITOS}`}
                element={<Favoritos />}
              />
              <Route
                path={`${ROUTES_REGISTRADO.RESEÑAS}`}
                element={<Reseñas />}
              />
              <Route
                path={`${ROUTES_REGISTRADO.RESEÑAR + "/:id"}`}
                element={<Reseñar />}
              />
              <Route
                path={`${ROUTES_REGISTRADO.CONFIGURACION}`}
                element={<Configuracion />}
              />
              <Route
                path={`${ROUTES_REGISTRADO.SITIOSID + "/:id"}`}
                element={<InfoSitio />}
              />
              <Route
                path={`${ROUTES_REGISTRADO.COMENTARIOS + "/:id"}`}
                element={<Comentarios />}
              />
              <Route
                path={`${ROUTES_REGISTRADO.RESEÑAR}`}
                element={<Reseñar />}
              />
            </Routes>
          </div>
        </div>
        {/*</UserState>*/}
      </UserContext.Provider>
    </div>
  );
}

/*const UserState = ({ children }) => {
  return <UserProvider>{children}</UserProvider>;
};*/

export default App2;
