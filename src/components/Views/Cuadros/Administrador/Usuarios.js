import React, { useEffect, useState } from "react";

import "./Sitios.css";
import CeldaUsuario from "./CeldaUsuario";

const API = "http://localhost:5000";

function Usuarios(props) {
  const [name, setName] = useState("");
  const [opcion, setOpcion] = useState(0);
  const [usuarios, setUsuarios] = useState([]);
  const [filtros, setFiltros] = useState([]);
  const [nombre, setNombre] = useState([]);
  const [preciomenor, setPreciomenor] = useState("");
  const [preciomayor, setPreciomayor] = useState("");
  const [delegacion, setDelegacio] = useState("");

  const handleSubmitConFiltro = async (e) => {
    e.preventDefault();
    console.log("la opcion es: ", opcion);
    console.log("API:", API);
    console.log("length filtros: ", filtros.length);

    const res = await fetch(
      `${API}/sitios` /*, {
      method: "GET",
      headers: { "CONTENT-TYPE": "application/json" },
      body: JSON.stringify({ name, opcion }),
    }*/
    );
    console.log("res: ", res);
    const data = await res.json();
    setUsuarios(data);
    console.log("data: ", data);
  };

  const getUsuarios = async (e) => {
    const res = await fetch(`${API}/usuariosAdministrador`);
    const data = await res.json();
    console.log("datos de getSitios: ", res);
    setUsuarios(data);
  };

  useEffect(() => {
    console.log("a ver");
    if (opcion == 0) {
      console.log("inicia bien");
      getUsuarios();
    } else {
      console.log("inicia bien 2");
    }
  }, [opcion]);

  return (
    <div className="izquierda_abajo">
      <br />
      <div className="slider" id="slider">
        <div className="sitio">
          <table>
            <tr>
              <th>Nombre</th>
              <th>Númeo de Comentarios</th>
              <th>Númeo de Calificaciones</th>
              <th>Promedio</th>
            </tr>
            {usuarios.map(
              (usuario) =>
                usuario.habilitado == true && (
                  <CeldaUsuario items={usuario}></CeldaUsuario>
                )
            )}
          </table>
        </div>
      </div>
    </div>
  );
}

export default Usuarios;
