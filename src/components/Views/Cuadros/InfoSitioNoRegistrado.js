import React, { useContext, useState } from "react";

import Estrellas from "../Estrellas/Estrellas";
import Botones_sitio from "../Buscar/Botones_sitio";

import "./InfoSitio.css";
import { useLocation } from "react-router-dom";
import Botones_sitio_usuario_no_r from "../Buscar/Botones_sitio_usuario_no_r";
import Botones_sitio_administrador from "../Buscar/Botones_sitio_administrador";

//import { Link } from "wouter";
import { Link } from "react-router-dom";
import { ROUTES_REGISTRADO } from "../../../constants/routes_usuario_registrado";
import { UserContext } from "../../../pages/UsuarioRegistrado/Inicio/App2";

const API = "http://localhost:5000";

function InfoSitio(props) {
  const u = useContext(UserContext);

  const location = useLocation();
  const id = location.state;
  console.log("el id desde info sitio es: ", id);
  /*const nombre = location.state.nombre;
  const correo = location.state.correo;
  const ubicacion = location.state.ubicacion;
  const telefono = location.state.telefono;
  const calificacion = location.state.calificacion;
  const imagen = location.state.imagen;
  const tipo = location.state.tipo;
  const pagina = location.state.pagina;
  const delegacion = location.state.delegacion;*/

  /*const info = {
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
  const handleFavotiros = async (e) => {
    console.log("favoritos");
    e.preventDefault();
    console.log("la opcion es: ", fav);
    console.log("API:", API);
    //console.log(process.env.REACT_APP_API);

    const res = await fetch(`${API}/sitiosAcomodados`, {
      method: "UPDATE",
      headers: { "CONTENT-TYPE": "application/json" },
      body: JSON.stringify({ id, fav }),
    });
    console.log("res: ", res);
    const data = await res.json();
    //setSitios(data);
    //    console.log("data: ", data);
  };
  const tipo_usuario = u.tipo_usuario;
  console.log("tipo usuario: ", tipo_usuario);

  const favorito = true;
  const [fav, setFav] = useState(favorito);
  //  favorito = fav;
  return (
    <div class="inicio2">
      <div class="guia2">
        <div className="izquierda_abajo">
          <br />
          {tipo_usuario === "noregistrado" && (
            <Botones_sitio_usuario_no_r items={id} />
          )}
          {tipo_usuario === "registrado" && <Botones_sitio items={id} />}
          {tipo_usuario === "administrador" && (
            <Botones_sitio_administrador items={id} />
          )}
          <br />
          <div className="slider" id="slider">
            <div className="info">
              <div class="parte1">
                <img src="" alt="" class="sitio" />
                <img src="" alt="" class="sitio" />
                <img src="" alt="" class="sitio" />
              </div>
              <div class="parte2">
                <div className="parte3">
                  <label for="">{"nombre"}</label>
                  <label>{"tipo"}</label>
                  <label>Dirección: {"ubicacion"}</label>
                </div>
                <div className="parte3">
                  <label>Calificación de Usuarios:</label>
                  <br />
                  <Estrellas></Estrellas>
                  <label>Teléfono: {"telefono"}</label>
                  <label>Sitio web: {"pagina"}</label>
                </div>
                <div className="parte3">
                  <label>
                    {tipo_usuario === 0 && fav == true && (
                      <div>
                        <a
                          className="favoritos"
                          onClick={() => {
                            setFav(false);
                            handleFavotiros();
                          }}
                        >
                          Añadir a favoritos
                        </a>
                      </div>
                    )}
                    {tipo_usuario === 0 && fav == false && (
                      <div>
                        <a
                          className="favoritos"
                          onClick={() => {
                            setFav(true);
                            handleFavotiros();
                          }}
                        >
                          Eliminar de favoritos
                        </a>
                      </div>
                    )}
                  </label>
                  {tipo_usuario === 0 && (
                    <div>
                      <br />
                      <label>
                        <Link
                          to={`/usuario${ROUTES_REGISTRADO.RESEÑAR}/:${id}`}
                          state={id}
                          style={{ textDecoration: "none" }}
                        >
                          <a className="favoritos">Reseñar</a>
                        </Link>
                      </label>
                      <br /> <br />
                    </div>
                  )}
                  <label>Compartir</label>
                </div>
              </div>
            </div>
            <br />
            <div class="slider_btn_1 slider_btn_derecha" id="btn_derecha">
              &#62;
            </div>
            <div class="slider_btn_1 slider_btn_izquierda" id="btn_izquierda">
              &#60;
            </div>
            <br />
          </div>
          <br />
          <br />

          <div className="info">
            <div className="parte">
              <label className="informacion" for="">
                Servicios
              </label>
              <label className="informacion" for="">
                Ubicación
              </label>
              <label className="informacion" for="">
                Horario
              </label>
            </div>
            <div class="parte2">
              <div className="parte3">
                <label>{"tipo"}</label>
                <label>Dirección: {"ubicacion"}</label>
              </div>
              <div className="parte3">
                <label>Aquí va un mapa</label>
              </div>
              <div className="parte3">
                <label>Lunes</label>
                <label>Martes</label>
                <label>Miércoles</label>
                <label>Jueves</label>
                <label>Viernes</label>
                <label>Sábado</label>
                <label>Domingo</label>
              </div>
            </div>
          </div>
          <br />
        </div>
      </div>
    </div>
  );
}

export default InfoSitio;
