import React from "react";

import Estrellas from "../Estrellas/Estrellas";
import Botones_sitio from "../Buscar/Botones_sitio";

import './InfoSitio.css';

function InfoSitio(props){
    return (
        <div className="izquierda_abajo"><br/>
            <Botones_sitio></Botones_sitio>
            <br/>
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
                            <label>Comida Mexicana</label>
                            <label>Dirección: Algun lugar muy lejano</label>
                        </div>
                        <div className="parte3">
                            <label>Calificación de Usuarios:</label><br/>
                            <Estrellas></Estrellas>
                            <label>Teléfono: 55 55555555</label>
                            <label>Sitio web: http</label>
                        </div>
                        <div className="parte3">
                            <label>Añadir a favoritos</label>
                            <label>Reseñar</label>
                            <label>Compartir</label>
                        </div>
                    </div>
                </div><br/>
                <div class="slider_btn_1 slider_btn_derecha" id="btn_derecha">&#62;</div>
                <div class="slider_btn_1 slider_btn_izquierda" id="btn_izquierda">&#60;</div><br/>
            </div><br/><br/>

            <div className="info">
                    <div className="parte">
                        <label className="informacion" for="">Servicios</label>
                        <label className="informacion" for="">Ubicación</label>
                        <label className="informacion" for="">Horario</label>
                    </div>
                    <div class="parte2">
                        <div className="parte3">
                            <label>Comida Mexicana</label>
                            <label>Dirección: Algun lugar muy lejano</label>
                        </div>
                        <div className="parte3">
                            <label>Aquí va un mapa</label>
                        </div>
                        <div className="parte3">
                            <label>Lunes</label>
                            <label>Martes</label>
                            <label>Miércoles</label>
                            <label>Jueves</label>
                            <label>Viernes</label>
                            <label>Sábado</label>
                            <label>Domingo</label>
                        </div>
                    </div>
                </div>
                <br/>
        </div>
    );
};

export default InfoSitio;