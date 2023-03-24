import React from "react";

import Estrellas from "../Estrellas/Estrellas"; 
import Botones_sitio from "../Buscar/Botones_sitio";
import ConjuntoImagenes from "./Imagenes/ConjuntoImagenes";

import './Reseñas.css'

function Reseñas(){
    return(
        <div className="izquierda_abajo">
            <h2>Reseñas</h2><br/>
            <Botones_sitio></Botones_sitio><br/>
            <div className="info">
                <div class="parte2">
                    <div className="parte_chica">
                        <div className="imagen_grande2">
                            <img/>
                        </div>
                    </div>
                    <div className="parte3">
                    <label>Calificación de Usuarios:</label>
                        <Estrellas></Estrellas>
                        <ConjuntoImagenes></ConjuntoImagenes>
                    </div>
                    <div className="parte_grande">
                        <div className="reseña_datos">
                            <label for="">Restaurante 1</label><br/>
                            <label className="fecha">Fecha: 12/12/12</label>
                        </div>
                        <label className="tipo">Restaurante</label>
                        <br/>
                        <textarea>Placeholder</textarea>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reseñas;