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

  const dataToSend = new FormData();

  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

  const subirImage = async (e) => {
    console.log(e.target.files[0]);
    setFoto_usuario(e.target.files[0]);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    dataToSend.append("correo", correo);
    dataToSend.append("usuario", usuario);
    dataToSend.append("contrasena", contrasena);
    //dataToSend.append("foto_usuario", foto_usuario);
    console.log("correo es: ", dataToSend.get("correo"));
    const datosaenviar = Object.fromEntries(dataToSend);
    console.log("a ver: ", datosaenviar);
    //setData(await register(usuario, correo, contrasena, foto_usuario));
    setData(await register(dataToSend));

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
                />
              </div>
              <br />
              <br />
              <div className="reg">
                <div className="campo">Repetir contraseña</div>{" "}
                <input
                  value={contrasena}
                  onChange={(e) => setContra(e.target.value)}
                  className="input"
                />
              </div>
              <br />
              <br />
              <div className="seleccionrFoto">
                Seleccionar foto de perfil
              </div>{" "}
              <br />
              <div className="reg">
                <input
                  value={undefined}
                  className="form-control"
                  type="file"
                  id="formFile"
                  onChange={(e) => setFoto_usuario(e.target.files[0])}
                  accept="image/*"
                />
                {/*foto_usuario != null && (
                  <div className="imagenSeleccionada">
                    <img src={require(foto_usuario)}></img>
                  </div>
                )*/}
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
