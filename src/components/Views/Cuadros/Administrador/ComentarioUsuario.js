import React from "react";

import Estrellas from "../../Estrellas/Estrellas";
import ConjuntoImagenesUsuario from "../Imagenes/ConjuntoImagenesUsuario";

import "./ComentarioUsuario.css";

function ComentarioUsuario() {
  return (
    <div className="izquierda_abajo">
      <br />
      <div className="info">
        <div class="parte2">
          <div className="parte_grande">
            <div className="reseña_datos">
              <label for="">Sitio: tacos de canasta</label>
              <label className="fecha">Fecha: 12/12/12</label>
              <br />
              <br />
            </div>
            <textarea>Placeholder</textarea>
          </div>
          <div className="conjuntoimagenesusuario">
            <label>Calificación de Usuarios:</label>
            <br />
            {/*<Estrellas></Estrellas>*/}
            <ConjuntoImagenesUsuario></ConjuntoImagenesUsuario>
          </div>
        </div>
        <br />
      </div>
    </div>
  );
}

export default ComentarioUsuario;
