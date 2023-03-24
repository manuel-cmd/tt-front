import React from "react";

import Menu_admin from "./Menu/Menu_admin";
//import ConfigurarCuenta from "./Cuenta/UsuarioRegistrado/ConfigurarCuenta";
import SitiosInteres from "./Cuadros/Administrador/SitiosInteres";
//import Comentarios from "./Cuadros/Comentarios";
//import InfoSitio from "./Cuadros/InfoSitio"
//import Reseñas from "./Cuadros/Reseñas";
import Filtros from "./Filtros/Filtros";
import Usuarios from "./Cuadros/Administrador/Usuarios";

function Inicio_administrador(){
    return(
        <div>
            <Menu_admin />
            <div class="inicio">
                <div class="guia">
                    {//<InfoSitio></InfoSitio>
                    //<Comentarios />
                    //<Reseñas />
                    }
                    
                </div>
            </div>
            <Filtros />
            <SitiosInteres></SitiosInteres>
            <Usuarios></Usuarios>
        </div>
    );
};

export default Inicio_administrador;