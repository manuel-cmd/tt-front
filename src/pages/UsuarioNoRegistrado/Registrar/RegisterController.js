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

    const res = await fetch(`${API}/registro`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ correo, usuario, contrasena, foto_usuario }),
    });
    /*.then((res) => {
        if (!res.ok) throw new Error("Response is not ok");
        return false;
      })
      .then((res) => {
        const { jwt } = res.access_token;
        console.log("res es: ", res.json());
        const data = res.json();
        console.log("data.json: ", data);
        localStorage.setItem(data);
        return data;
      });*/
    if (!res.ok) {
      return false;
    } else {
      console.log("res: ", res);
      const data = await res.json();
      //saveUserSession(data);
      console.log("data.json: ", data);
      //setUser(localStorage.setItem( data));

      localStorage.setItem(
        "usuario",
        JSON.stringify(data)
        /*
        "nombre",
        data.usuario,
        "tipo_usuario",
        data.tipo_usuario*/
      );
      //console.log("user: ", user);
      return data;
    }
  };
  return { register };
};

export default RegisterController;