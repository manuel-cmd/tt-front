import React, { useEffect, useState } from "react";

import { toast } from "react-hot-toast";
import { Toaster } from "react-hot-toast";

import App2 from "../../UsuarioRegistrado/Inicio/App2";
import useUser from "../../../hooks/useUser";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { ROUTES } from "../../../constants/routes";
import LoginController from "./LoginController";

const Login = () => {
  const [correo, setCorreo] = useState("");
  const [contrasena, setContra] = useState("");
  //const [, navigate] = useLocation();
  const [data, setData] = useState(null);
  const navigate = useNavigate();
  const access = false;
  //const { login, isLoggedIn } = useUser();
  const { login } = LoginController();

  /*useEffect(() => {
    if (isLoggedIn === true) navigate("../user/inicio");
  }, [isLoggedIn, navigate]);*/

  const handleSubmit = async (e) => {
    e.preventDefault();
    setData(await login(correo, contrasena));
    console.log("data es: ", data);
    //navigate(<App2></App2>);
    console.log("data otra vez: ", data);
    /*if (data.contrasena == contrasena) {
      access = true;
    }
    /*if (data != false || data != []) {
      console.log("login exitoso");
      console.log("data es en useEffect: ", data);
      navigate("../usuario/inicio");
    }*/
  };

  useEffect(() => {
    if (data == false || data == []) {
      console.log("data error: ", data);
      toast.error("Error");
    }
    if (data != null) {
      if (data.tipo_usuario == "registrado") {
        console.log("data es en useEffect: ", data);
        navigate("../usuario/inicio");
      }
      if (data.tipo_usuario == "administrador") {
        console.log("data es en useEffect: ", data);
        navigate("../administrador/inicio");
      }
    }
  }, [data]);

  return (
    <div>
      <br />
      <br />
      <br />
      <div className="formRegistro">
        <br />
        <br />
        <br />
        <div className="registro">
          <br />
          <br />
          <div>Bienvenido</div>
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
                <div className="campo">Contraseña</div>{" "}
                <input
                  value={contrasena}
                  onChange={(e) => setContra(e.target.value)}
                  name="contra"
                  className="input"
                />
              </div>
              <br />
              <br />
              <button className="botonRegistrar">Iniciar sesón.</button>
              <br />
              <br />
            </div>
            <Link to={`${ROUTES.REGISTRAR}`} style={{ textDecoration: "none" }}>
              {/*const location = useLocation();*/}
              <a href="">Crear cuenta</a>
            </Link>
            <br />
            <br />
          </form>
        </div>
        <Toaster></Toaster>
      </div>
    </div>
  );
};

export default Login;
