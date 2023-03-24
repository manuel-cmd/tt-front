import React from "react";

import Sitios from "./Sitios";
import Buscar from "../Buscar/Buscar";
import './Inicio_ventana.css'

function Inicio_ventana(){
    return(
        <div>
            <h1>Guía Turística de la CDMX</h1>
            <h4>Encuentre el lugar que ha estado buscando</h4>
            <Buscar></Buscar>
            <label for="">Categorías</label><br/><br/>
            <div class="categorias">
                <div class="categorias_1">
                    <Sitios></Sitios>
                    <Sitios></Sitios>
                    <Sitios></Sitios>
                </div><br /><br /><br />
                <div class="categorias_2">
                    <Sitios></Sitios>
                    <Sitios></Sitios>
                    <Sitios></Sitios>
                </div>
            </div>
        </div>
    );
};

export default Inicio_ventana;