import React from "react";

import Sitio from "./Sitio";
import Filtrar_por from "../Filtros/Filtrar_por";
import Buscar from "../Buscar/Buscar";
//import InfoSitio from "./InfoSitio";
//import Comentarios from "./Comentarios";
import "./ListaSitios.css";

function ListaSitios() {
  return (
    <div class="inicio2">
      <div class="guia2">
        <br />
        <h2>Sitios</h2>
        <Buscar />
        <br />
        <div class="datos">
          <div className="tipo">
            <label className="resultados" for="">
              Resultados de la búsqueda
            </label>
            <Filtrar_por />
          </div>
          <Sitio />
          {
            //<Comentarios/>
          }
        </div>
      </div>
    </div>
  );
}

export default ListaSitios;
