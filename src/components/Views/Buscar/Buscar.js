import React, { useEffect, useState } from "react";

import "./Buscar.css";

//const API = `../../../${process.env.REACT_APP_API}`;
//const API = process.env.REACT_APP_API;
const API = "http://localhost:5000";

function Buscar(props) {
  const datos = [];
  const [name, setName] = useState("");

  const [sitios, setSitios] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(name);
    console.log("API:", API);
    //console.log(process.env.REACT_APP_API);
    const res = await fetch(`${API}/sitios`, {
      method: "POST",
      headers: { "CONTENT-TYPE": "application/json" },
      body: JSON.stringify({ name }),
    });
    const data = await res.json();
    console.log("data: ", data);
  };

  const getSitios = async (e) => {
    const res = await fetch(`${API}/sitios`);
    const data = await res.json();
    datos = data;
    //console.log(data);
    setSitios(data);
  };

  useEffect(() => {
    getSitios();
  }, []);

  return (
    <div class="buscar">
      <br />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="a"
          //onChange={(e) => setName(e.target.value)}
          //value={name}
        />
        {/*<button className="botonBuscar">Buscar</button>*/}
        {/*<button
          className="botonBuscar"
          value={datos}
          onChange={(e) => props.onInputValueChange(e.target.value)}
  >          Buscar
  </button>*/}
        <button
          className="botonBuscar"
          value={props.inputValue}
          onChange={(e) => props.onInputValueChange(e.target.value)}
        >
          Buscar
        </button>
      </form>
    </div>
  );
}

export default Buscar;
