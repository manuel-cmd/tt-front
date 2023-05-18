import React from "react";

import { Link } from "react-router-dom";

import { ROUTES_ADMIN } from "../../../../constants/routes_administrador";
import Botones_usuario_administrador from "../../Buscar/Botones_usuario_administrador";

import "./Sitio.css";

function HistorialUsuario() {
  return (
    <div class="inicio_2">
      <br />
      <label>Tacos de canasta</label>
      <div className="eliminar_deshabilitar">
        <button className="eliminar_sitio">Eliminar</button>
        <br />
        <button className="eliminar_sitio">Deshabilitar</button>
      </div>
      <br />
      <br />
      <br />
      <Botones_usuario_administrador />
      <br />
      <div className="cualquier">
        <div className="izquierda">haver muestra laoh</div>
      </div>
    </div>
  );
}

export default HistorialUsuario;
