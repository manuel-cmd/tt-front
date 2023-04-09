import React from "react";

import { Link } from "react-router-dom";

import { ROUTES_ADMIN } from "../../../../constants/routes_administrador";
import Estrellas from "../../Estrellas/Estrellas";
import Botones_usuario_administrador from "../../Buscar/Botones_usuario_administrador";
import ComentarioUsuario from "./ComentarioUsuario";
import "./Sitio.css";

function Usuario() {
  return (
    <div>
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
        <div className="izquierda">
          <label className="dato">Calificaciones: </label>
          <br />
          <br />
          <label className="dato">Comentarios: </label>
          <br />
        </div>
        <div className="derecha">
          <label className="dato">Promedio de calificaciones: </label>
          <br />
          <br />
          <label>Sitios visitados</label>
        </div>
      </div>
      <div>
        <ComentarioUsuario></ComentarioUsuario>
      </div>
    </div>
  );
}

export default Usuario;
