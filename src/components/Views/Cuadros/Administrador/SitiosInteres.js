import React from "react";

import Buscar from "../../Buscar/Buscar";
import Sitio from "./Sitio";
import Filtrar_por from "../../Filtros/Filtrar_por";

function SitiosInteres(){
    return(
        <div class="inicio2">
            <div class="guia2"><br/>
                <h2>Restaurantes</h2>
                <Buscar/><br/>
                <div class="datos">
                    <div className="tipo">
                        <label className="resultados" for="">Sitios de interés</label>
                    </div>
                <Sitio />{
                //<Comentarios/>
                }
                </div>
            </div>
        </div>
    );
};

export default SitiosInteres;