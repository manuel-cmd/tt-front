/*import React, { useState, useEffect, useContext } from "react";

import { LoginAuthUseCase } from "../../../Domain/useCase/auth/LoginAuth";
import { SaveUserLocalUseCase } from "../../../Domain/useCase/userLocal/SaveUserLocal";
import { GetUserLocalUseCase } from "../../../Domain/useCase/userLocal/GetUserLocal";
import { useUserLocal } from "../../hooks/useUserLocal";
import { UserContext } from "../../../context/UserContext";

const HomeViewModel = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  //const { user, getUserSession } = useUserLocal();
  const { user, saveUserSession } = useContext(UserContext);
  console.log("Usuario de sesion desde el Home: " + JSON.stringify(user));
  //const [password, setPassword] = useState('');
  const onChange = (property: string, value: any) => {
    setValues({ ...values, [property]: value });
  };

  const login = async () => {
    if (isValidForm()) {
      const response = await LoginAuthUseCase(values.email, values.password);
      console.log("response: " + JSON.stringify(response));
      if (!response.success) {
        setErrorMessage(response.message);
      } else {
        /*await SaveUserLocalUseCase(response.data);
                getUserSession();*/
/*        saveUserSession(response.data);
      }
    }
  };

  const isValidForm = (): boolean => {
    if (values.email === "") {
      setErrorMessage("Ingresa el correo electrónico");
      return false;
    }
    if (values.password === "") {
      setErrorMessage("Ingresa la contraseña");
      return false;
    }

    return true;
  };

  return {
    ...values,
    user,
    onChange,
    login,
    errorMessage,
  };
};

export default HomeViewModel;
*/
