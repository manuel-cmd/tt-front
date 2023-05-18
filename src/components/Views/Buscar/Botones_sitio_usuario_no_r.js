import React, { useState } from "react";

import { Link } from "react-router-dom";

import { ROUTES_REGISTRADO } from "../../../constants/routes_usuario_registrado";
import "./Botones_sitio.css";
import InfoSitio from "../Cuadros/InfoSitio";
import Comentarios from "../Cuadros/Comentarios";
import { useLocation } from "wouter";

function Botones_sitio_usuario_no_r(props) {
  //const location = useLocation();
  //const id = location.state.id;
  //const [id] = useState(props.items.cve_sitio);
  //const id = props.items.id;
  //console.log(props);

  const [id] = useState(props.items);
  /*const [nombre] = useState(props.items.nombre_sitio);
  const [correo] = useState(props.items.correo_sitio);
  const [descripcion] = useState(props.items.descripcion);
  const [ubicacion] = useState(props.items.direccion);
  const [telefono] = useState(props.items.telefono);
  const [calificacion] = useState(props.items.calificacion);
  const [imagen] = useState(props.items.imagen);
  const [tipo] = useState(props.items.tipo_sitio);
  const [pagina] = useState(props.items.pagina_web);
  const [delegacion] = useState(props.items.delegacion);
  const info = {
    id,
    nombre,
    correo,
    ubicacion,
    telefono,
    calificacion,
    imagen,
    pagina,
    tipo,
    delegacion,
  };*/

  console.log("id es: ", id);
  return (
    <div>
      <Link
        to={`${ROUTES_REGISTRADO.SITIOSID}/:${id}`}
        state={id}
        style={{ textDecoration: "none" }}
      >
        {/*const location = useLocation();*/}
        <a className="boton_informacion" href={<InfoSitio />}>
          Informacion
        </a>
      </Link>
      <Link
        to={`${ROUTES_REGISTRADO.COMENTARIOS}/:${id}`}
        state={id}
        style={{ textDecoration: "none" }}
      >
        {/*<button className="boton_comentarios">Comentarios</button>*/}
        <a className="boton_comentarios" href={<Comentarios />}>
          Comentarios
        </a>
      </Link>
    </div>
  );
}

export default Botones_sitio_usuario_no_r;
