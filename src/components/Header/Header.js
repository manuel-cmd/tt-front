import React from "react";
import { Link } from "react-router-dom";

import useUser from "../../hooks/useUser";

export default function Header() {
  //const isLogged = false;
  const { isLogged, logout } = useUser();

  const handleClick = (e) => {
    e.preventDefault();
    logout();
  };

  return (
    <div>
      {isLogged ? <Link to="/logout"></Link> : <Link to="/login"></Link>}
    </div>
  );
}
