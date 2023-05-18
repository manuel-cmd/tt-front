import React, { useContext, useEffect, useState } from "react";

import { toast } from "react-hot-toast";
import { Toaster } from "react-hot-toast";

import "./ConfigurarCuenta.css";
import { UserContext } from "../../../../pages/UsuarioRegistrado/Inicio/App2";
import { useNavigate } from "react-router-dom";

const API = "http://localhost:5000";

function ConfigurarCuenta() {
  const u = useContext(UserContext);

  const [data, setData] = useState(null);

  const navigate = useNavigate();

  const [usuario, setUsuario] = useState("");
  const [nombre, setNombre] = useState("");
  const [contrasena, setContra] = useState("");
  const [contrasenarepetir, setContrarepetir] = useState("");
  const [eliminar, setEliminar] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [foto_usuario, setFoto_usuario] = useState(null);
  const [respuesta, setRespuesta] = useState("");

  const cambiarUsuario = async (e) => {
    e.preventDefault();
    //const nuevo = e.target.value;
    //console.log("la opcion es: ", opcion);
    setUsuario(u.usuario);
    console.log("API:", API);
    //console.log(process.env.REACT_APP_API);
    const res = await fetch(`${API}/cambiarUsuario`, {
      method: "UPDATE",
      headers: { "CONTENT-TYPE": "application/json" },
      body: JSON.stringify({ usuario, nombre }),
    });
    console.log("res: ", res);
    const data = await res.json();
    setNombre(data.nombre);
    console.log("data: ", data);
  };

  const cambiarContrasena = async (e) => {
    e.preventDefault();
    //console.log("la opcion es: ", opcion);
    setUsuario(u.usuario);
    console.log("API:", API);
    //console.log(process.env.REACT_APP_API);
    const res = await fetch(`${API}/cambiarContrasena`, {
      method: "UPDATE",
      headers: { "CONTENT-TYPE": "application/json" },
      body: JSON.stringify({ usuario, contrasena }),
    });
    console.log("res: ", res);
    const data = await res.json();
    setContra(data.contrasena);
    console.log("data: ", data);
  };

  const eliminarCuenta = async (e) => {
    e.preventDefault();
    //console.log("la opcion es: ", opcion);
    setUsuario(u.usuario);
    console.log("API:", API);
    //console.log(process.env.REACT_APP_API);
    const res = await fetch(`${API}/eliminarCuenta`, {
      method: "UPDATE",
      headers: { "CONTENT-TYPE": "application/json" },
      body: JSON.stringify({ usuario, eliminar }),
    });
    console.log("res: ", res);
    const data = await res.json();
    console.log("data: ", data);
  };

  useEffect(() => {
    if (data == false || data == []) {
      console.log("data error: ", data);
      toast.error("Error al actualizar los datos");
    }
    if (data != null) {
      if (data.tipo_usuario == "registrado") {
        console.log("data es en useEffect: ", data);
        toast.success("Datos actualizados correctamente");
      }
      if (data.tipo_usuario == "administrador") {
        console.log("data es en useEffect: ", data);
        navigate("../inicio");
      }
    }
  }, [data]);
  return (
    <div class="formulario">
      <div>
        <br />
        <div class="configuracion">
          <label>Configurar Cuenta</label>
          <br />
          <br />
          <label>Perfil</label>
          <br />
          <div className="bloque">
            <label className="etiqueta">Cambiar foto de perfil</label>
          </div>
          <br />
          <div className="bloque">
            <label className="etiqueta">Nombre de usuario</label>
            <input
              value={nombre}
              onChange={(e) => {
                setNombre(e.target.value);
              }}
              type="text"
              className="cambio"
              placeholder="nombre"
            />
            <button className="cambiar" onClick={cambiarUsuario}>
              Cambiar
            </button>
          </div>
          <br />
          <br />
          <label>Cambiar contraseña</label>
          <br />
          <div className="bloque_chico">
            <label className="etiqueta_chico">Contraseña actual</label>
            <input
              value={contrasena}
              onChange={(e) => {
                setContra(e.target.value);
              }}
              type="password"
              className="cambio"
            />
          </div>
          <br />
          <div className="bloque">
            <label className="etiqueta">Contraseña nueva</label>
            <input
              value={contrasenarepetir}
              onChange={(e) => {
                setContrarepetir(e.target.value);
              }}
              type="text"
              className="cambio"
            />
            <button className="cambiar" onClick={cambiarContrasena}>
              Cambiar
            </button>
          </div>
          <br />
          <br />
          <label>Eliminar cuenta</label>
          <br />
          <div className="bloque">
            <label className="etiqueta">Contraseña</label>
            <input
              value={eliminar}
              onChange={(e) => {
                setEliminar(e.target.value);
              }}
              type="text"
              className="cambio"
            />
            <button className="cambiar" onClick={eliminarCuenta}>
              Cambiar
            </button>
          </div>
          {
            //<InfoSitio></InfoSitio>
            //<Comentarios />
            //<Reseñas />
          }
        </div>
        <Toaster></Toaster>
      </div>
    </div>
  );
}

export default ConfigurarCuenta;
