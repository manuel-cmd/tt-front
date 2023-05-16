/*import { useContext } from "react";
import { useCallback } from "react";
import Context from "../context/UserContext";
import loginService from "../services/login";

export default function useUser() {
  const { jwt, setJWT } = useContext(Context);
  console.log("jwt: ", jwt);
  console.log("setJWT: ", setJWT);

  const login = useCallback(
    ({ correo, contrasena }) => {
      //setJwt("test");
      loginService({ correo, contrasena })
        .then((jwt) => {
          console.log(jwt);
          setJWT(jwt);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    [setJWT]
  );

  const logout = useCallback(() => {
    setJWT(null);
  }, [setJWT]);

  return {
    isLoggedIn: Boolean(jwt),
    login,
    logout,
  };
}
*/
