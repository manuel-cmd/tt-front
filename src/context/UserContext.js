/*import React, { useState } from "react";

const Context = React.createContext({});

export function UserContextProvider({ children }) {
  const [jwt, setJWT] = useState(null);
  console.log("jwt", jwt);
  console.log("setJWT", setJWT);
  return (
    <Context.Provider value={{ jwt, setJWT }}>{children}</Context.Provider>
  );
}

export default Context;
*/

import React, { createContext, useState, useEffect } from "react";
//import { User } from "../../Domain/entities/User";
//import { SaveUserLocalUseCase } from "../../Domain/useCase/userLocal/SaveUserLocal";
//import { GetUserLocalUseCase } from "../../Domain/useCase/userLocal/GetUserLocal";
//import { RemoveUserLocalUseCase } from "../../Domain/useCase/userLocal/RemoveUserLocal";

export const User = {
  id: "",
  name: "",
  phone: "",
  address: "",
  email: "",
  password: "",
  image: "",
  session_token: "",
  roles: [],
};

export interface UserContextProps {
  user: User;
  saveUserSession: (user: User) => Promise<void>;
  getUserSession: () => Promise<void>;
  removeUserSession: () => Promise<void>;
}

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(User);

  useEffect(() => {
    getUserSession();
  }, []);

  const saveUserSession = async (data) => {
    console.log("saveUserSession: ", data);
    //setUser(localStorage.setItem(data));
  };

  const getUserSession = async () => {
    //const user = await GetUserLocalUseCase();
    //setUser(user);
    //console.log("getUserSession: ", user);
  };

  const removeUserSession = async () => {
    //await RemoveUserLocalUseCase();
    //setUser(user);
  };

  return (
    <UserContext.Provider
      value={{
        user,
        saveUserSession,
        getUserSession,
        removeUserSession,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
