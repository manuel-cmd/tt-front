import React from "react";

import Estrellas from "../Estrellas/Estrellas";
import './Sitio.css';

function Sitio(props){
    return (
        <div className="izquierda_abajo"><br/>
            <div className="slider" id="slider">
                <div className="info">
                    <div class="parte1">
                        <img src="" alt="" class="sitio" />
                        <img src="" alt="" class="sitio" />
                        <img src="" alt="" class="sitio" />
                    </div>
                    <div class="parte2">
                        <div className="parte3">
                            <label for="">Restaurante 1</label>
                            <label>Tel. 55 55555555</label>
                        </div>
                        <div className="parte3">
                        <label>Calificación de Usuarios:</label><br/>
                            <Estrellas></Estrellas>
                        </div>
                        <div className="parte3">
                            <label>A 1.6 km de distancia</label>
                            <label>Ubicación: algun lugar my¿uy lejano.</label>
                        </div>
                    </div>
                </div>
            </div>
            <div class="slider_btn slider_btn_derecha" id="btn_derecha">&#62;</div>
            <div class="slider_btn slider_btn_izquierda" id="btn_izquierda">&#60;</div>
        </div>
    );
};

export default Sitio;