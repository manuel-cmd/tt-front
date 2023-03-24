import React from "react";

import './Inicio.css';

import Inicio_administrador from "./Inicio_administrador";
import Inicio_usuario_no_registrado from "./Inicio_usuario_no_registrado";
import Inicio_usuario_registrado from "./Inicio_usuario_registrado";

function Inicio (){
    const a = 2;
    if (a=== 0){
        return( <Inicio_usuario_no_registrado />);
    }
    if (a === 1){
        return(<Inicio_usuario_registrado />);
    }
    if (a === 2){
        return(<Inicio_administrador />);
    }
};

export default Inicio;