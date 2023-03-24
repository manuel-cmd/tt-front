import React from "react";

import Sitio from './Sitio';
import Filtrar_por from "../Filtros/Filtrar_por";
import Buscar from "../Buscar/Buscar";
//import InfoSitio from "./InfoSitio";
//import Comentarios from "./Comentarios";
import './Sitios.css';

function Sitios(){
    return (
        <div class="inicio2">
            <div class="guia2"><br/>
                <h2>Restaurantes</h2>
                <Buscar/><br/>
                <div class="datos">
                    <div className="tipo">
                        <label className="resultados" for="">Resultados de la búsqueda</label>
                        <Filtrar_por />
                    </div>
                <Sitio />{
                //<Comentarios/>
                }
                </div>
            </div>
        </div>
    );
};

export default Sitios;