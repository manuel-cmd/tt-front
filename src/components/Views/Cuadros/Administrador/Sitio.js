import React from "react";

import { Link } from "react-router-dom";

import { ROUTES_ADMIN } from "../../../../constants/routes_administrador";
import Estrellas from "../../Estrellas/Estrellas";
import Botones_sitio_administrador from "../../Buscar/Botones_sitio_administrador";
import "./Sitio.css";

function Sitio() {
  return (
    <div>
      <br />
      <label>Tacos de canasta</label>
      <div className="eliminar_deshabilitar">
        <button className="eliminar_sitio">Eliminar</button>
        <br />
        <button className="eliminar_sitio">Deshabilitar</button>
      </div>
      <br />
      <br />
      <br />
      <Botones_sitio_administrador />
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
          <label>En algun lugar de la ciudad de méxico</label>
          <br />
          <br />
          <label className="dato">Teléfono: </label>
          <br />
          <label>55 5555 5555</label>
          <br />
          <br />
          <label className="dato">Sitio web:</label>
          <br />
          <label>https:algun sitio web por alli</label>
          <br />
          <br />
          <label className="dato">Fotografías:</label>
          <br />
          <label></label>
        </div>
        <div className="derecha">
          <label className="dato">Descripción: </label>
          <br />
          <label>
            El mejor sitio de tacos de la ciudad de méxico. Amigo taco, amigo
            taco.
          </label>
          <br />
          <br />
          <label className="dato">Horario: </label>
          <br />
          <div className="horario">
            <div className="dia">
              <label>Lunes: </label>
            </div>
            10:00 - 11:00
            <div className="dia">
              <label className="dia">Martes: </label>
            </div>
            10:00 - 11:00
            <div className="dia">
              <label className="dia">Miércoles</label>
            </div>
            10:00 - 11:00
            <div className="dia">
              <label className="dia">Jueves: </label>
            </div>
            10:00 - 11:00
            <div className="dia">
              <label className="dia">Viernes: </label>
            </div>
            10:00 - 11:00
            <div className="dia">
              <label className="dia">Sábado: </label>
            </div>
            10:00 - 11:00
            <div className="dia">
              <label className="dia">Domingo: </label>
            </div>
            10:00 - 11:00
          </div>
          <br />
          <br />
          <Link
            to={ROUTES_ADMIN.SITIOACTUALIZAR}
            style={{ textDecoration: "none" }}
          >
            <button className="actualizar_sitio">Actualizar</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Sitio;
