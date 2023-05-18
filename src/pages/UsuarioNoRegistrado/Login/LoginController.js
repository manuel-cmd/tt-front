import React, { useState } from "react";

//import { SaveUserLocalUseCase } from "../../Domain/useCase/userLocal/SaveUserLocal";
//import { GetUserLocalUseCase } from "../../Domain/useCase/userLocal/GetUserLocal";
//import { RemoveUserLocalUseCase } from "../../Domain/useCase/userLocal/RemoveUserLocal";

const API = "http://localhost:5000";

const LoginController = () => {
  const op = false;
  //const { user, saveUserSession } = useContext(UserContext);

  const login = async (correo, contrasena) => {
    console.log("en login");
    const res = await fetch(`${API}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ correo, contrasena }),
    });
    const data = await res.json();
    if (!res.ok) {
      return data;
    } else {
      console.log("res: ", res);
      console.log("data.json: ", data);
      localStorage.setItem("usuario", JSON.stringify(data));
      //console.log("user: ", user);
      return data;
    }
  };
  return { login };
};

export default LoginController;
