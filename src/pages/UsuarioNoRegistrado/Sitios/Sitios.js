import React from "react";
//import SitiosInteres from "../../../components/Views/Cuadros/Administrador/SitiosInteres";
import ListaSitios from "../../../components/Views/Cuadros/ListaSitios";
import Filtros from "../../../components/Views/Filtros/Filtros";

const Sitios = () => {
  return (
    <div>
      <Filtros />
      <ListaSitios />
    </div>
  );
};

export default Sitios;
