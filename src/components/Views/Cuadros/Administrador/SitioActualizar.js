import React from "react";

import Estrellas from "../../Estrellas/Estrellas";
import Hora from "./Actualizar/Hora";
import "./Sitio.css";

function SitioActualizar() {
  return (
    <div class="inicio_2">
      <div class="enmedio">
        <br />
        <label>Tacos de canasta</label>
        <br />
        <br />
        <br />
        <div className="cualquier">
          <div className="izquierda">
            <label className="dato">Calificaciones: </label>
            <br />
            <br />
            <label className="dato">Calificación general: </label>
            <br />
            <Estrellas></Estrellas>
            <br />
            <label className="dato">Dirección</label>
            <br />
            <input
              type="text"
              placeholder="En algun lugar de la ciudad de méxico"
            />
            <br />
            <br />
            <label className="dato">Teléfono: </label>
            <br />
            <input type="number" placeholder="55 5555 5555" />
            <br />
            <br />
            <label className="dato">Sitio web:</label>
            <br />
            <input type="text" placeholder="https:algun sitio web por alli" />
            <br />
            <br />
            <label className="dato">Fotografías:</label>
            <br />
            <label></label>
          </div>
          <div className="derecha">
            <label className="dato">Descripción: </label>
            <br />
            <textarea
              placeholder="El mejor sitio de tacos de la ciudad de méxico. Amigo taco, amigo
            taco.
          "
              className="descripcion"
            />

            <br />
            <br />
            <label className="dato">Horario: </label>
            <br />
            <div className="horario">
              <div className="dia">
                <label>Lunes: </label>
              </div>
              <input className="hora" /> - <input className="hora" />
              <div className="dia">
                <label className="dia">Martes: </label>
              </div>
              <input className="hora" /> - <input className="hora" />
              <div className="dia">
                <label className="dia">Miércoles</label>
              </div>
              <input className="hora" /> - <input className="hora" />
              <div className="dia">
                <label className="dia">Jueves: </label>
              </div>
              <input className="hora" /> - <input className="hora" />
              <div className="dia">
                <label className="dia">Viernes: </label>
              </div>
              <input className="hora" /> - <input className="hora" />
              <div className="dia">
                <label className="dia">Sábado: </label>
              </div>
              <input className="hora" /> - <input className="hora" />
              <div className="dia">
                <label className="dia">Domingo: </label>
              </div>
              <input className="hora" /> - <input className="hora" />
            </div>
            <br />
            <br />
            <button className="actualizar_sitio">Actualizar</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SitioActualizar;
