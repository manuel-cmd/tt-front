import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { ROUTES_ADMIN } from "../../../../constants/routes_administrador";

import "./CeldaSitio.css";

const API = "http://localhost:5000";

function CeldaSitio(props) {
  const [id] = useState(props.items.cve_sitio);
  const [nombre] = useState(props.items.nombre_sitio);
  const [sitio, setSitio] = useState([]);
  console.log("el id del sitio en celdasitio es: ", id);

  const handleSubmitConFiltro = async (e) => {
    e.preventDefault();
    //console.log("la opcion es: ", opcion);
    console.log("API:", API);
    //console.log("length filtros: ", filtros.length);

    const res = await fetch(
      `${API}/sitios` /*, {
      method: "GET",
      headers: { "CONTENT-TYPE": "application/json" },
      body: JSON.stringify({ name, opcion }),
    }*/
    );
    console.log("res: ", res);
    const data = await res.json();
    setSitio(data);
    console.log("data: ", data);
  };

  useEffect(() => {}, []);

  const eliminar = async (e) => {
    e.preventDefault();
    //console.log("la opcion es: ", opcion);
    console.log("API:", API);
    //console.log("length filtros: ", filtros.length);

    const res = await fetch(`${API}/sitioEliminar`, {
      method: "DELETE",
      headers: { "CONTENT-TYPE": "application/json" },
      body: JSON.stringify({ id }),
    });
    console.log("res: ", res);
    const data = await res.json();
    setSitio(data);
    console.log("data: ", data);
  };

  return (
    <tr>
      <td className="correo">{nombre}</td>
      <td>11,111</td>
      <td>12</td>
      <td>4.5</td>
      <td className="bot">
        <div className="botones">
          <Link to={ROUTES_ADMIN.SITIOSID}>
            <button className="actualizar">Actualizar</button>
          </Link>
          <Link to={ROUTES_ADMIN.SITIOS}>
            <button className="eliminar" onClick={eliminar}>
              Eliminar
            </button>
          </Link>
        </div>
      </td>
    </tr>
  );
}

export default CeldaSitio;
