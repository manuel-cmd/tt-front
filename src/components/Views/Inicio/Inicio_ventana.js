import React, { useEffect } from "react";

import Sitios from "./Sitios";
import Buscar from "../Buscar/Buscar";
import "./Inicio_ventana.css";
import { useContext } from "react";
import { UserContext } from "../../../pages/UsuarioRegistrado/Inicio/App2";

function Inicio_ventana() {
  const u = useContext(UserContext);

  /*useEffect(() => {
    //console.log("user es: ", u);
    //console.log("length: ", u.length);
    //console.log("user.usuario es: ", u.usuario);
  }, []);*/

  //console.log("hola");
  return (
    <div>
      <h1>Guía Turística de la CDMX</h1>
      <h4>Encuentre el lugar que ha estado buscando</h4>
      <Buscar></Buscar>
      <br />
      <br />
      <label for="">Categorías</label>
      <br />
      <br />
      <div class="categorias">
        <div class="categorias_1">
          <Sitios></Sitios>
          <Sitios></Sitios>
          <Sitios></Sitios>
        </div>
        <br />
        <br />
        <br />
        <div class="categorias_2">
          <Sitios></Sitios>
          <Sitios></Sitios>
          <Sitios></Sitios>
        </div>
      </div>
    </div>
  );
}

export default Inicio_ventana;
