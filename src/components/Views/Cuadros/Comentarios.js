import React from "react";

import Estrellas from "../Estrellas/Estrellas";
import Botones_sitio from "../Buscar/Botones_sitio";
import ConjuntoImagenes from "./Imagenes/ConjuntoImagenes";

import './Comentarios.css'

function Comentarios(){
    return(
        <div className="izquierda_abajo"><br/>
            <Botones_sitio></Botones_sitio><br/>
            <div className="info">
                <div class="parte2">
                    <div className="parte_grande">
                        <div className="reseña_datos">
                            <label for="">Restaurante 1</label>
                            <label className="fecha">Fecha: 12/12/12</label>
                        </div><br/>
                        <textarea>Placeholder</textarea>
                    </div>
                    <div className="parte_chica">
                        <label className="calificacion_usuarios">Calificación de Usuarios:</label><br/>
                        <div className="imagen_grande">
                            <img/>
                        </div>
                    </div>
                    <div className="parte3">
                    <label>Calificación de Usuarios:</label><br/>
                        {//<Estrellas></Estrellas>
}
                        <ConjuntoImagenes></ConjuntoImagenes>
                    </div>
                </div>
                <br/>
            </div>
        </div>
    );
};

export default Comentarios;