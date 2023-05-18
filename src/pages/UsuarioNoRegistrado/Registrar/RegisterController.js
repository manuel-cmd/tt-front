import React, { createContext, useState, useEffect, useContext } from "react";
import { User } from "../../../Domain/entities/User";
import { UserProvider } from "../../../context/UserContext";
import { UserContext } from "../../../context/UserContext";
//import { SaveUserLocalUseCase } from "../../Domain/useCase/userLocal/SaveUserLocal";
//import { GetUserLocalUseCase } from "../../Domain/useCase/userLocal/GetUserLocal";
//import { RemoveUserLocalUseCase } from "../../Domain/useCase/userLocal/RemoveUserLocal";

const API = "http://localhost:5000";

const RegisterController = () => {
  const op = false;
  //const { user, saveUserSession } = useContext(UserContext);
  const { user, setUser } = useState();

  const register = async (usuario, correo, contrasena, foto_usuario) => {
    console.log("en register");
    console.log("foto usuario: ", foto_usuario);
    const res = await fetch(`${API}/registro`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ correo, usuario, contrasena, foto_usuario }),
    });
    const data = await res.json();
    if (!res.ok) {
      return data;
    } else {
      //console.log("res: ", res);
      //console.log("data.json: ", data);
      localStorage.setItem("usuario", JSON.stringify(data));

      return data;
    }
  };
  return { register };
};

export default RegisterController;
