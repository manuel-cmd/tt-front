import React from "react";

import './Filtrar_por.css';

function Filtrar_por(){
    return(
        <select className="selector">
            <option value='1'>Mejor calificados</option>
            <option value='2'>Más populares</option>
            <option value='3'>Más cercanos</option>
            <option value='4'>Mayor precio</option>
            <option value='5'>Menor precio</option>
        </select>
    );
};

export default Filtrar_por;