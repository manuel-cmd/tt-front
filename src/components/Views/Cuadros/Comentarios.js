import React, { useContext, useEffect, useState } from "react";

import Estrellas from "../Estrellas/Estrellas";
import Botones_sitio from "../Buscar/Botones_sitio";
import ConjuntoImagenes from "./Imagenes/ConjuntoImagenes";

import "./Comentarios.css";
import Botones_sitio_usuario_no_r from "../Buscar/Botones_sitio_usuario_no_r";
import Botones_sitio_administrador from "../Buscar/Botones_sitio_administrador";
import { useLocation } from "react-router-dom";
import { UserContext } from "../../../pages/UsuarioRegistrado/Inicio/App2";

const API = "http://localhost:5000";

function Comentarios(props) {
  const u = useContext(UserContext);

  const location = useLocation();

  console.log("useLocation: ", location);
  //console.log("props useLocation: ", props);
  const id = location.state;
  /*const nombre = location.state.nombre;
  const correo = location.state.correo;
  const ubicacion = location.state.ubicacion;
  const telefono = location.state.telefono;
  const calificacion = location.state.calificacion;
  const imagen = location.state.imagen;
  const tipo = location.state.tipo;
  const pagina = location.state.pagina;
  const delegacion = location.state.delegacion;

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
  console.log("id de comentarios: ", id);
  //console.log("comentarios: ", info);
  //console.log("props de comentarios: ", props);
  const [name, setName] = useState("");

  const [comentarios, setComentarios] = useState([]);
  const tipo_usuario = u.tipo_usuario;
  console.log("tipo usuario: ", tipo_usuario);
  const getComentarios = async (e) => {
    /*const res = await fetch(`${API}/comentarios`);
    const data = await res.json();*/
    //console.log(data);
    const res = await fetch(`${API}/comentarios`, {
      method: "GET",
      headers: { "CONTENT-TYPE": "application/json" },
      body: JSON.stringify({ id }),
    });
    const data = await res.json();
    //console.log("data: ", data);
    setComentarios(data);
  };

  useEffect(() => {
    getComentarios();
  }, []);
  return (
    <div class="inicio2">
      <div class="guia2">
        <div className="izquierda_abajo">
          <br />
          {/*<Botones_sitio></Botones_sitio>*/}
          {tipo_usuario === "noregistrado" && (
            <Botones_sitio_usuario_no_r items={id} />
          )}
          {tipo_usuario === "registrado" && <Botones_sitio items={id} />}
          {tipo_usuario === "administrador" && (
            <Botones_sitio_administrador items={id} />
          )}
          <br />
          {comentarios.map((sitio) => (
            <div className="info">
              <div class="parte2">
                <div className="parte_grande">
                  <div className="reseña_datos">
                    <label for="">{sitio.nombre}</label>
                    <label className="fecha">Fecha: {sitio.fecha}</label>
                  </div>
                  <br />
                  <textarea>{sitio.comentario}</textarea>
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
          ))}
        </div>
      </div>
    </div>
  );
}

export default Comentarios;
