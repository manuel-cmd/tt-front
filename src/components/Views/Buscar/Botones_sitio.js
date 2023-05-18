import React from "react";

import { Link, useLocation } from "react-router-dom";

import { ROUTES_REGISTRADO } from "../../../constants/routes_usuario_registrado";
import "./Botones_sitio.css";
import InfoSitio from "../Cuadros/InfoSitio";
import Comentarios from "../Cuadros/Comentarios";
import Reseñar from "../Cuadros/Reseñar";

function Botones_sitio(props) {
  const location = useLocation();
  const id = location.state;
  //const id = props.id;
  console.log("id es desde botones es: ", id);
  return (
    <div className="botones_sitio">
      <Link
        to={`/usuario${ROUTES_REGISTRADO.SITIOSID}/:${id}`}
        state={id}
        style={{ textDecoration: "none" }}
      >
        {/*<button className="boton_informacion">Información</button>*/}
        <a className="boton_informacion" href={<InfoSitio />}>
          Información
        </a>
      </Link>
      <Link
        to={`/usuario${ROUTES_REGISTRADO.COMENTARIOS}/:${id}`}
        state={id}
        style={{ textDecoration: "none" }}
      >
        {/*<button className="boton_comentarios">Comentarios</button>*/}
        <a className="boton_comentarios" href={<Comentarios />}>
          Comentarios
        </a>
      </Link>
      <Link
        to={`/usuario${ROUTES_REGISTRADO.RESEÑAR}/:${id}`}
        state={id}
        style={{ textDecoration: "none" }}
      >
        {/*<button className="boton_reseñar">Reseñar</button>*/}
        <a className="boton_reseñar" href={<Reseñar />}>
          Reseñar
        </a>
      </Link>
    </div>
  );
}

export default Botones_sitio;
