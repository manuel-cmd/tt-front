import React from "react";

import Menu_no_r from "./Menu/Menu_no_r";
import Filtros from "./Filtros/Filtros";
import Sitios from "./Cuadros/Sitios";

function Inicio_usuario_no_registrado(){
    return (
        <div>
            <Menu_no_r />
            <Filtros />
            <Sitios/>
        </div>
    );
};

export default Inicio_usuario_no_registrado;