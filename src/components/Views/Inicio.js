import React, { useState } from "react";

import "./Inicio.css";

import Inicio_administrador from "./Inicio_administrador";
import Inicio_usuario_no_registrado from "./Inicio_usuario_no_registrado";
import Inicio_usuario_registrado from "./Inicio_usuario_registrado";

/*function Inicio (){
    const a = 1;
    if (a=== 0){
        return( <Inicio_usuario_no_registrado />);
    }
    if (a === 1){
        return(<Inicio_usuario_registrado />);
    }
    if (a === 2){
        return(<Inicio_administrador />);
    }
};*/

function Inicio() {
  const Contador = () => {
    const [contador, setContador] = useState(0);

    const handleIncrementar = () => {
      setContador(contador + 1);
      //console.log(e.target.name)
    };

    const handleDecrementar = () => {
      setContador(contador - 1);
      //console.log(e.target.name)
    };

    return (
      <div className="contador">
        Contador: {contador}
        <button name="bnt1" onClick={() => handleIncrementar()}>
          Incrementar
        </button>
        <button name="bnt2" onClick={() => handleDecrementar()}>
          Decremenatr
        </button>
      </div>
    );
  };

  const Formulario = () => {
    const [nombre, setNombre] = useState("");
    const [contra, setContra] = useState("");

    const handleSubmit = () => {
      console.log(nombre);
      console.log(contra);
    };

    return (
      <div>
        Nombre:{" "}
        <input
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          name="nombre"
        />
        Contraseña:{" "}
        <input
          value={contra}
          onChange={(e) => setContra(e.target.value)}
          name="contra"
        />
        <button onClick={() => handleSubmit()}>Submit</button>
      </div>
    );
  };

  return (
    <div>
      <Contador />
      <Formulario />
    </div>
  );
}

export default Inicio;
