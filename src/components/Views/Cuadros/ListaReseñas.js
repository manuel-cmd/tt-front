import React from "react";

import Filtrar_por from "../Filtros/Filtrar_por";
import Buscar from "../Buscar/Buscar";
//import InfoSitio from "./InfoSitio";
//import Comentarios from "./Comentarios";
import "./ListaSitios.css";
import Reseñas from "./Reseñas";

function ListaReseñas() {
  return (
    <div class="inicio2">
      <div class="guia2">
        <br />
        <h2>Reseñas</h2>
        <br />
        <div class="datos">
          <div className="tipo">
            <label className="resultados" for="">
              Resultados de la búsqueda
            </label>
            <Filtrar_por />
          </div>
          <Reseñas></Reseñas>
          {/*<Sitio />*/}
          {
            //<Comentarios/>
          }
        </div>
      </div>
    </div>
  );
}

export default ListaReseñas;
