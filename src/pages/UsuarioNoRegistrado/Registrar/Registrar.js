import React, { useEffect } from "react";
//import { useForm } from "react-hook-form";
import { useState } from "react";
//import { navigate, useLocation } from "wouter";
import { toast } from "react-hot-toast";
import { Toaster } from "react-hot-toast";

import "./Registrar.css";

import { useNavigate } from "react-router-dom";

const API = "http://localhost:5000";

//export const Registrar= ({navigation, route}: Props) => {
function Registrar() {
  const [correo, setCorreo] = useState("");
  const [usuario, setNombre] = useState("");
  const [contrasena, setContra] = useState("");
  const [contrasenarepetir, setContrarepetir] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [foto_usuario, setFoto_usuario] = useState(null);
  const navigate = useNavigate();

  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

  const handleSubmit = async (e) => {
    e.preventDefault();
    const op = 0;

    const foto_usuario = null;
    const res = await fetch(`${API}/registro`, {
      method: "POST",
      headers: { "CONTENT-TYPE": "application/json" },
      body: JSON.stringify({ correo, usuario, contrasena, foto_usuario }),
    });
    const data = await res.json();
    console.log("data: ", data);
    if (data.error) {
      toast.error(data.error);
    }
    if (data.message === "Usuario creado con éxito") {
      setMensaje(data.message);
      console.log("deberia cambiar", mensaje);

      toast.success(data.message, {
        autoClose: 5000,
      });
      await sleep(5000);
      navigate("../usuario/inicio");
    }
  };

  useEffect(() => {
    console.log("esta aqui");
    console.log("el mensaje es: ", mensaje);
    if (mensaje == "Usuario creado con éxito") {
      console.log("el mensaje es: ", mensaje);
      //navigate("usuario/inicio");
    }
  }, [mensaje]);

  return (
    <div>
      <div className="formRegistro">
        <div className="registro">
          <br />
          <br />
          <div>Registro de nuevo usuario</div>
          <br />
          <br />
          <form onSubmit={handleSubmit}>
            <div>
              <div className="reg">
                <div className="campo">Correo</div>{" "}
                <input
                  value={correo}
                  onChange={(e) => setCorreo(e.target.value)}
                  name="correo"
                  className="input"
                />
              </div>
              <br />
              <br />
              <div className="reg">
                <div className="campo">Nombre</div>{" "}
                <input
                  value={usuario}
                  onChange={(e) => setNombre(e.target.value)}
                  name="usuario"
                  className="input"
                />
              </div>
              <br />
              <br />
              <div className="reg">
                <div className="campo">Contraseña</div>{" "}
                <input
                  className="input"
                  value={contrasenarepetir}
                  onChange={(e) => setContrarepetir(e.target.value)}
                  name="contrarepetir"
                />
              </div>
              <br />
              <br />
              <div className="reg">
                <div className="campo">Repetir contraseña</div>{" "}
                <input
                  value={contrasena}
                  onChange={(e) => setContra(e.target.value)}
                  name="contra"
                  className="input"
                />
              </div>
              <br />
              <br />
              <div className="reg">
                <div className="campo">Seleccionar foto de perfil</div>{" "}
                <input
                  value={foto_usuario}
                  className="form-control"
                  type="file"
                  id="formFile"
                  name="imagen"
                  onChange={(e) => setFoto_usuario(e.target.value)}
                  accept="image/*"
                />
              </div>
              <br />
              <br />
              <button className="botonRegistrar">Registrar</button>
            </div>
            <br />
          </form>
          <br />
        </div>
        <Toaster></Toaster>
      </div>
    </div>
  );
}

export default Registrar;
