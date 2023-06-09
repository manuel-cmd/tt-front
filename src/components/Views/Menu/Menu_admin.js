import React from "react";

import { Link, useNavigate } from "react-router-dom";
import { ROUTES_ADMIN } from "../../../constants/routes_administrador";

import "./Menu_no_r.css";

function Menu_admin() {
  const navigate = useNavigate();

  const cerrarSesion = async (e) => {
    localStorage.removeItem("usuario");
    navigate("../../inicio");
  };

  return (
    <div class="menu">
      <label class="checkbtn">Logo</label>
      <div class="opciones">
        <ul>
          <Link
            to={`/administrador${ROUTES_ADMIN.INICIO}`}
            style={{ textDecoration: "none" }}
          >
            <li>
              <a class="active">Inicio</a>
            </li>
          </Link>
          <Link
            to={`/administrador${ROUTES_ADMIN.SITIOS}`}
            style={{ textDecoration: "none" }}
          >
            <li>
              <a class="active">Sitios</a>
            </li>
          </Link>
          <Link
            to={`/administrador${ROUTES_ADMIN.USUARIOS}`}
            style={{ textDecoration: "none" }}
          >
            <li>
              <a class="active">Usuario</a>
            </li>
          </Link>
          <Link
            to={`/administrador${ROUTES_ADMIN.CONFIGURACION}`}
            style={{ textDecoration: "none" }}
          >
            <li>
              <a class="active">Configuracion</a>
            </li>
          </Link>
          <li>
            <button onClick={cerrarSesion}>Cerrar Sesion</button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Menu_admin;
