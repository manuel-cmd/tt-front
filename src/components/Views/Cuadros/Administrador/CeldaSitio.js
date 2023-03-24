import React from "react";

import './CeldaSitio.css';

function CeldaSitio(){
    return(
        <tr>
            <td>Tacos</td>
            <td>11,111</td>
            <td>12</td>
            <td>4.5</td>
            <td className="bot"><div className="botones"><button className="actualizar">Actualizar</button><button className="eliminar">Eliminar</button></div></td>
        </tr>
    );
};

export default CeldaSitio;