import React from "react";

import "./Filtrar_por.css";

function Filtrar_por_reseñas(props) {
  return (
    <select
      className="filtrarReseñas"
      value={props.inputValue}
      onChange={(e) => props.onInputValueChange(e.target.value)}
    >
      <option value="1">Mejor calificados</option>
      <option value="2">Más reciente</option>
      <option value="3">Más antíguas</option>
    </select>
  );
}

export default Filtrar_por_reseñas;
