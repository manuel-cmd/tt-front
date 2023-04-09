import React from "react";

import { Link } from "react-router-dom";

import { ROUTES_REGISTRADO } from "../../../constants/routes_usuario_registrado";
import "./Botones_sitio.css";

function Botones_sitio_usuario_no_r() {
  return (
    <div>
      <Link to={ROUTES_REGISTRADO.SITIOSID} style={{ textDecoration: "none" }}>
        <button className="boton_informacion">Información</button>
      </Link>
      <Link
        to={ROUTES_REGISTRADO.COMENTARIOS}
        style={{ textDecoration: "none" }}
      >
        <button className="boton_comentarios">Comentarios</button>
      </Link>
    </div>
  );
}

export default Botones_sitio_usuario_no_r;
