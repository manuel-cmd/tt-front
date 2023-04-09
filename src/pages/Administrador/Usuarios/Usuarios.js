import React from "react";
import ListaUsuarios from "../../../components/Views/Cuadros/Administrador/ListaUsuarios";
//import SitiosInteres from "../../../components/Views/Cuadros/Administrador/SitiosInteres";

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
