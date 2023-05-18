import React from "react";

import { Link } from "react-router-dom";

import { ROUTES_ADMIN } from "../../../constants/routes_administrador";
import "./Botones_sitio.css";

function Botones_sitio_administrador() {
  return (
    <div>
      <Link to={ROUTES_ADMIN.SITIOSID} style={{ textDecoration: "none" }}>
        <button className="boton_informacion">Información</button>
      </Link>
      <Link
        to={ROUTES_ADMIN.COMENTARIOSADMINISTRADOR}
        style={{ textDecoration: "none" }}
      >
        <button className="boton_comentarios">Comentarios</button>
      </Link>
    </div>
  );
}

export default Botones_sitio_administrador;
