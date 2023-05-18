import React from "react";
//import SitiosInteres from "../../../components/Views/Cuadros/Administrador/SitiosInteres";
import ListaUsuarios from "../../../components/Views/Cuadros/Administrador/ListaUsuarios";
import Filtros from "../../../components/Views/Filtros/Filtros";
import "../../plantilla.css";

const Sitios = () => {
  return (
    <div className="centro">
      <Filtros />
      <ListaUsuarios />
    </div>
  );
};

export default Sitios;
