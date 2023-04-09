import React from "react";

import Estrellas from "../Estrellas/Estrellas";

import "./Reseñar.css";

function Reseñar() {
  return (
    <div class="inicio2">
      <div class="guia2">
        <label for="">Restaurante 1</label>
        <div className="izquierda_abajo">
          <br />
          <div className="info">
            <div class="parte2">
              <div className="parte3">
                <label>Calificación:</label>
                <Estrellas></Estrellas>
                <button>Agregar foto</button>
              </div>
              <div className="partegrande">
                <label className="tipo">Restaurante</label>
                <br />
                <textarea
                  className="reseñar"
                  placeholder="Máximo 200 caractéres"
                ></textarea>
              </div>
            </div>
          </div>
        </div>
        <br />
        <button className="botonreseñar">Reseñar</button>
      </div>
    </div>
  );
}

export default Reseñar;
