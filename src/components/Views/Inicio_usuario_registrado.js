import React from "react";

import Menu_r from "./Menu/Menu_r";
//import Inicio_ventana from "./Inicio/Inicio_ventana";
//import Filtros from "./Filtros/Filtros";
//import Sitios from "./Cuadros/Sitios";
import ConfigurarCuenta from "./Cuenta/UsuarioRegistrado/ConfigurarCuenta";

function Inicio_usuario_registrado() {
  return (
    <div>
      <Menu_r />
      <div class="inicio">
        <div class="guia">
          <br />
        </div>
      </div>
      <ConfigurarCuenta></ConfigurarCuenta>
    </div>
  );
}

export default Inicio_usuario_registrado;
