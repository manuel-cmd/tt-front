import React from "react";

import { Link } from "react-router-dom";

import { ROUTES_ADMIN } from "../../../constants/routes_administrador";
import "./Botones_sitio.css";

function Botones_usuario_administrador() {
  return (
    <div>
      <Link to={ROUTES_ADMIN.USUARIOSID} style={{ textDecoration: "none" }}>
        <button className="boton_informacion">Información</button>
      </Link>
      <Link to={ROUTES_ADMIN.HISTORIAL} style={{ textDecoration: "none" }}>
        <button className="boton_comentarios">Historial</button>
      </Link>
    </div>
  );
}

export default Botones_usuario_administrador;
