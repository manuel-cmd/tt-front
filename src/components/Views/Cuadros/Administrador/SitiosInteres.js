import React from "react";

import Buscar from "../../Buscar/Buscar";
import Sitios from "./Sitios";
import "./ListaUsuarios.css";
//import Filtrar_por from "../../Filtros/Filtrar_por";

function SitiosInteres() {
  return (
    <div class="inicio_2">
      <div class="guia2">
        <br />
        <Buscar />
        <br />
        <div class="datos">
          <div className="tipo">
            <label className="resultados" for="">
              Sitios de interés
            </label>
          </div>
          <Sitios />
          {
            //<Comentarios/>
          }
        </div>
      </div>
    </div>
  );
}

export default SitiosInteres;
