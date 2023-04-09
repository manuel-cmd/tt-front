import React, { useState } from "react";

const Login = () => {
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
  return <div>Login</div>;
};

export default Login;
