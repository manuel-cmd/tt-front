import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Sitio from "../../../../../components/Views/Cuadros/Administrador/Sitio";
import "../../../../plantilla.css";

const SitioID = () => {
  return (
    <div class="inicio_2">
      <div class="guia2">
        <div class="enmedio">
          <Sitio></Sitio>
        </div>
      </div>
    </div>
  );
};

export default SitioID;
