import React from "react";

import { Link } from "react-router-dom";
import { ROUTES_ADMIN } from "../../../../constants/routes_administrador";

import "./CeldaSitio.css";

function CeldaUsuario() {
  return (
    <tr>
      <td className="correo">Tacos@gmail.com</td>
      <td>11,111</td>
      <td>12</td>
      <td>4.5</td>
      <td className="bot">
        <div className="botones">
          <Link to={ROUTES_ADMIN.USUARIOSID}>
            <button className="actualizar">Actualizar</button>
          </Link>
          <Link to={ROUTES_ADMIN.SITIOSID}>
            <button className="eliminar">Eliminar</button>
          </Link>
        </div>
      </td>
    </tr>
  );
}

export default CeldaUsuario;
