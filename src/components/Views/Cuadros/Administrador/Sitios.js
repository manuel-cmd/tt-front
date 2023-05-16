import React, { useEffect, useState } from "react";

import CeldaSitio from "./CeldaSitio";
import "./Sitios.css";
import Filtros from "../../Filtros/Filtros";

const API = "http://localhost:5000";

function Sitios(props) {
  const [name, setName] = useState("");
  const [opcion, setOpcion] = useState(0);
  const [sitios, setSitios] = useState([]);
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
    setSitios(data);
    console.log("data: ", data);
  };

  const getSitios = async (e) => {
    const res = await fetch(`${API}/sitios`);
    const data = await res.json();
    console.log("datos de getSitios: ", res);
    setSitios(data);
  };

  const getMasSitios = async (e) => {
    console.log("length filtros: ", filtros.length);
    if (
      filtros[0][0][1] != "" &&
      filtros[0][1][1] != "" &&
      filtros[0][2][1] != ""
    ) {
      console.log("filtros lista ahora:", filtros[0][2]);
      setDelegacio(filtros[0][0]);
      setPreciomenor(filtros[0][1]);
      setPreciomayor(filtros[0][2]);
    }
    const res = await fetch(
      `${API}/sitios` /*, {
      method: "GET",
      headers: { "CONTENT-TYPE": "application/json" },
      body: JSON.stringify({ name, opcion }),
    }*/
    );
    console.log("respuesta que se deberia ejecutar despues: ", res);
    const data = await res.json();
    setSitios(data);
  };

  useEffect(() => {
    console.log("a ver");
    if (opcion == 0) {
      console.log("inicia bien");
      getSitios();
    } else {
      console.log("inicia bien 2");
    }
  }, [opcion]);

  useEffect(() => {
    console.log("deberia pasar algo");
    if (filtros != [] && filtros.length > 0) {
      getMasSitios();
      console.log("filtro filtros: ", filtros);
    }
  }, [filtros]);

  return (
    <div>
      <Filtros inputValue={filtros} onInputValueChange={setFiltros} />
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
              {sitios.map(
                (sitio) =>
                  sitio.habilitado == true && <CeldaSitio items={sitio} />
              )}
              {/*<CeldaSitio></CeldaSitio>
              <CeldaSitio></CeldaSitio>*/}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sitios;
