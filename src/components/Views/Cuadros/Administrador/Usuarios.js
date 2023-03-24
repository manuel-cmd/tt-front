import React from "react";

import Buscar from "../../Buscar/Buscar";
import Sitio from "./Sitio";

function Usuarios(){
    return(
        <div class="inicio2">
            <div class="guia2"><br/>
                <Buscar/><br/>
                <div class="datos">
                    <div className="tipo">
                        <label className="resultados" for="">Usuarios</label>
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

/*import React from "react";

import CeldaSitio from "./CeldaSitio";
import CeldaUsuario from "./CeldaUsuario";
import './Sitio.css';

function Usuarios(props){
    return (
        <div className="izquierda_abajo"><br/>
            <div className="slider" id="slider">
                <div className="sitio">
                    <table>
                    <tr>
                        <th>Nombre</th>
                        <th>Númeo de Comentarios</th>
                        <th>Númeo de Calificaciones</th>
                        <th>Promedio</th>
                    </tr>
                        <CeldaUsuario></CeldaUsuario>
                        <CeldaUsuario></CeldaUsuario>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Usuarios;*/