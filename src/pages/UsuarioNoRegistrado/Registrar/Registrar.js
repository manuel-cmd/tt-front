import React, { useEffect } from "react";
//import { useForm } from "react-hook-form";
import { useState } from "react";
//import { navigate, useLocation } from "wouter";
import { toast } from "react-hot-toast";
import { Toaster } from "react-hot-toast";

import "./Registrar.css";

import { useNavigate } from "react-router-dom";
import RegisterController from "./RegisterController";

const API = "http://localhost:5000";

//export const Registrar= ({navigation, route}: Props) => {
function Registrar() {
  const [data, setData] = useState(null);
  const navigate = useNavigate();
  const { register } = RegisterController();

  const [correo, setCorreo] = useState("");
  const [usuario, setNombre] = useState("");
  const [contrasena, setContra] = useState("");
  const [contrasenarepetir, setContrarepetir] = useState("");

  const [foto_usuario, setFoto_usuario] = useState("");

  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setData(await register(usuario, correo, contrasena, foto_usuario));
    console.log("data es: ", data);
    //navigate(<App2></App2>);
    console.log("data otra vez: ", data);
  };

  useEffect(() => {
    if (data == false || data == []) {
      console.log("data error: ", data);
      //toast.error("Error");
    }
    if (data != null) {
      if (data.error) {
        toast.error(data.error);
        console.log("data es en useEffect: ", data);
        //navigate("../usuario/inicio");
      }
      if (data.message) {
        console.log("data es en useEffect: ", data);
        toast.success(data.message);

        navigate("../usuario/inicio");
      }
    }
  }, [data]);

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
