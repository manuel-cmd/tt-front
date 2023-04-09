import React from "react";

import Estrellas from "../../Estrellas/Estrellas";
import ConjuntoImagenes from "../Imagenes/ConjuntoImagenes";
import Botones_sitio_administrador from "../../Buscar/Botones_sitio_administrador";

import "./Comentarios.css";

function ComentariosAdministrador() {
  return (
    <div class="inicio2">
      <div class="guia2">
        <div className="izquierda_abajo">
          <br />
          <label>Tacos de canasta</label>
          <br />
          <br />
          <br />
          <Botones_sitio_administrador></Botones_sitio_administrador>
          <br />
          <div className="info">
            <div class="parte2">
              <div className="parte_grande">
                <div className="reseña_datos">
                  <label for="">Usuario: manuel</label>
                  <label className="fecha">Fecha: 12/12/12</label>
                </div>
                <br />
                <textarea>Placeholder</textarea>
              </div>
              <div className="parte_chica">
                <label className="calificacion_usuarios">
                  Calificación de Usuarios:
                </label>
                <br />
                <div className="imagen_grande">
                  <img />
                </div>
              </div>
              <div className="parte3">
                <label>Calificación de Usuarios:</label>
                <br />
                {
                  //<Estrellas></Estrellas>
                }
                <ConjuntoImagenes></ConjuntoImagenes>
              </div>
            </div>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ComentariosAdministrador;
