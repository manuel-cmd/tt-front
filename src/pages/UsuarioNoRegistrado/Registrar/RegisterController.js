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

  const register = async (datos) => {
    console.log("en register");
    console.log("datos: ", datos);

    const res = await fetch(`${API}/registro`, {
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data",
        Accept: "application/json",
      },
      body: datos,
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
