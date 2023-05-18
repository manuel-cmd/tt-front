import React, { useContext, useEffect, useState } from "react";

import { Link } from "react-router-dom";

import { ROUTES_REGISTRADO } from "../../../constants/routes_usuario_registrado";

import Estrellas from "../Estrellas/Estrellas";

import "./Sitio.css";
import InfoSitio from "./InfoSitio";
import { UserContext } from "../../../pages/UsuarioRegistrado/Inicio/App2";

const API = "http://localhost:5000";

function Sitio(props) {
  const u = useContext(UserContext);

  const [sitio, setSitios] = useState([]);
  console.log(props);
  const [id] = useState(props.items.cve_sitio);
  const [nombre] = useState(props.items.nombre_sitio);
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
  };
  const tipo_usuario = u.tipo_usuario;
  console.log("tipo usuario: ", tipo_usuario);
  const [imagenActual, setImagenActual] = useState(0);
  //const cantidad = imagen.length;

  const infoSitio = async (e) => {
    e.preventDefault();
    //console.log("la opcion es: ", opcion);
    console.log("API:", API);
    //console.log("length filtros: ", filtros.length);

    const res = await fetch(`${API}/sitios/${id}`, {
      method: "GET",
      headers: { "CONTENT-TYPE": "application/json" },
      body: JSON.stringify({ id }),
    });
    console.log("res: ", res);
    const data = await res.json();
    setSitios(data);
    console.log("data: ", data);
  };

  useEffect(() => {
    infoSitio();
  }, []);

  return (
    <div className="izquierda_abajo">
      <br />
      <div className="slider" id="slider">
        <div className="info">
          <div class="parte1">
            <div class="imagenSitio">
              <img
                src="https://wbsche.org/wp-content/uploads/2023/03/Anime_DemonSlayer_AllHashira_2-1024x576-1.jpg"
                alt=""
                class="sitio"
              />
            </div>
            {/*<div class="imagenSitio">
              <img
                src="https://wbsche.org/wp-content/uploads/2023/03/Anime_DemonSlayer_AllHashira_2-1024x576-1.jpg"
                alt=""
                class="sitio"
              />
            </div>
            <div class="imagenSitio">
              <img
                src="https://wbsche.org/wp-content/uploads/2023/03/Anime_DemonSlayer_AllHashira_2-1024x576-1.jpg"
                alt=""
                class="sitio"
              />
  </div>*/}
          </div>
          <div class="parte2">
            <div className="parte3">
              {/*<Link
                to={ROUTES_REGISTRADO.SITIOSID}
                style={{ textDecoration: "none" }}
          >*/}
              {tipo_usuario == 1 ? (
                <Link
                  to={`${ROUTES_REGISTRADO.SITIOSID}/:${id}`}
                  state={id}
                  style={{ textDecoration: "none" }}
                >
                  {/*const location = useLocation();*/}
                  <a href={<InfoSitio />}>{nombre}</a>
                </Link>
              ) : (
                <Link
                  to={`/usuario${ROUTES_REGISTRADO.SITIOSID}/:${id}`}
                  state={id}
                  style={{ textDecoration: "none" }}
                >
                  {/*const location = useLocation();*/}
                  <a href={<InfoSitio />}>{nombre}</a>
                </Link>
              )}
              <label>Tel. {telefono}</label>
            </div>
            <div className="parte3">
              <label>Calificación de Usuarios:</label>
              <br />
              <Estrellas></Estrellas>
            </div>
            <div className="parte3">
              <label>A 1.6 km de distancia</label>
              <label>Ubicación: {ubicacion}</label>
            </div>
          </div>
        </div>
      </div>
      <div class="slider_btn slider_btn_derecha" id="btn_derecha">
        &#62;
      </div>
      <div class="slider_btn slider_btn_izquierda" id="btn_izquierda">
        &#60;
      </div>
    </div>
  );
}

export default Sitio;
