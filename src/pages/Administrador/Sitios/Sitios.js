import React from "react";
import SitiosInteres from "../../../components/Views/Cuadros/Administrador/SitiosInteres";
//import SitiosInteres from "../../../components/Views/Cuadros/Administrador/SitiosInteres";
//import ListaSitios from "../../../components/Views/Cuadros/ListaSitios";
import Filtros from "../../../components/Views/Filtros/Filtros";
import "../../plantilla.css";

const Sitios = () => {
  return (
    <div class="centro">
      <Filtros />
      <SitiosInteres />
    </div>
  );
};

export default Sitios;
