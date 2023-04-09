import React from "react";

//import SitiosInteres from "../../../components/Views/Cuadros/Administrador/SitiosInteres";
import ListaFavoritos from "../../../components/Views/Cuadros/ListaFavoritos";
import Filtros from "../../../components/Views/Filtros/Filtros";

const Favoritos = () => {
  return (
    <div>
      <Filtros />
      <ListaFavoritos />
    </div>
  );
};

export default Favoritos;
