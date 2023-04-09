import React from "react";

import { Link } from "react-router-dom";
import { ROUTES_REGISTRADO } from "../../../constants/routes_usuario_registrado";

import "./Menu_no_r.css";

function Menu_r() {
  console.log("a ver si");
  return (
    <div class="menu">
      <label class="checkbtn">Logo</label>
      <div class="opciones">
        <ul>
          <Link
            to={ROUTES_REGISTRADO.INICIO}
            style={{ textDecoration: "none" }}
          >
            <li>
              <a class="active">Inicio</a>
            </li>
          </Link>
          <Link
            to={ROUTES_REGISTRADO.SITIOS}
            style={{ textDecoration: "none" }}
          >
            <li>
              <a class="active">Sitios</a>
            </li>
          </Link>
          <Link
            to={ROUTES_REGISTRADO.FAVORITOS}
            style={{ textDecoration: "none" }}
          >
            <li>
              <a class="active">Favoritos</a>
            </li>
          </Link>
          <Link
            to={ROUTES_REGISTRADO.RESEÑAS}
            style={{ textDecoration: "none" }}
          >
            <li>
              <a class="active">Reseñas</a>
            </li>
          </Link>
          <Link
            to={ROUTES_REGISTRADO.CONFIGURACION}
            style={{ textDecoration: "none" }}
          >
            <li>
              <a class="active">Configuración</a>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Menu_r;
