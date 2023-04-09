import React from "react";

import CeldaSitio from "./CeldaSitio";
import "./Sitios.css";

function Sitios(props) {
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
            <CeldaSitio></CeldaSitio>
            <CeldaSitio></CeldaSitio>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Sitios;
