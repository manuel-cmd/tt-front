import React from "react";

import { Link } from "react-router-dom";
import { ROUTES } from "../../../constants/routes";
import "./Menu_no_r.css";

function Menu_no_r() {
  return (
    <div class="menu">
      <label class="checkbtn">Logo</label>
      <div class="opciones">
        <ul>
          <Link to={ROUTES.INICIO} style={{ textDecoration: "none" }}>
            <li>
              <a class="active">Inicio</a>
            </li>
          </Link>
          <Link to={ROUTES.SITIOS} style={{ textDecoration: "none" }}>
            <li>
              <a class="active">Sitios</a>
            </li>
          </Link>
          <Link to={ROUTES.LOGIN} style={{ textDecoration: "none" }}>
            <li>
              <a class="active">Iniciar Sesión</a>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Menu_no_r;
