import React from "react";

import "./Sitios.css";
import CeldaUsuario from "./CeldaUsuario";

function Usuarios(props) {
  return (
    <div className="izquierda_abajo">
      <br />
      <div className="slider" id="slider">
        <div className="sitio">
          <table>
            <tr>
              <th>Nombre</th>
              <th>Númeo de Comentarios</th>
              <th>Númeo de Calificaciones</th>
              <th>Promedio</th>
            </tr>
            <CeldaUsuario></CeldaUsuario>
            <CeldaUsuario></CeldaUsuario>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Usuarios;
