import React, { useEffect, useState } from "react";

import Buscar from "../../Buscar/Buscar";
import Sitios from "./Sitios";
import "./ListaUsuarios.css";
import Filtros from "../../Filtros/Filtros";
//import Filtrar_por from "../../Filtros/Filtrar_por";
const API = "http://localhost:5000";

function SitiosInteres() {
  return (
    <div>
      {/*<Filtros inputValue={filtros} onInputValueChange={setFiltros} />*/}
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default SitiosInteres;
