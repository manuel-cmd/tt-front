import React, { useContext, useEffect, useState } from "react";

import Filtrar_por_reseñas from "../Filtros/Filtrar_por_reseñas";
import Buscar from "../Buscar/Buscar";
//import InfoSitio from "./InfoSitio";
//import Comentarios from "./Comentarios";
import "./ListaSitios.css";
import Reseñas from "./Reseñas";
import { UserContext } from "../../../pages/UsuarioRegistrado/Inicio/App2";
import Filtros from "../Filtros/Filtros";

const API = "http://localhost:5000";

function ListaReseñas() {
  const u = useContext(UserContext);
  const datos = [];
  const [name, setName] = useState("");
  const [nombre, setNombre] = useState("");
  const [opcion, setOpcion] = useState(0);
  const [sitios, setSitios] = useState([]);
  const [filtros, setFiltros] = useState([]);
  const [preciomenor, setPreciomenor] = useState("");
  const [preciomayor, setPreciomayor] = useState("");
  const [delegacion, setDelegacio] = useState("");

  const [resenas, setResena] = useState([]);

  const handleSubmitConFiltro = async (e) => {
    e.preventDefault();
    console.log("la opcion es: ", opcion);
    console.log("API:", API);
    //console.log(process.env.REACT_APP_API);
    const res = await fetch(`${API}/resenas`, {
      method: "GET",
      headers: { "CONTENT-TYPE": "application/json" },
      body: JSON.stringify({ nombre, opcion }),
    });
    console.log("res: ", res);
    const data = await res.json();
    setResena(data);
    console.log("data: ", data);
  };

  const getResenas = async (e) => {
    setNombre(u.usuario);
    const res = await fetch(`${API}/resenas`);
    const data = await res.json();
    //console.log(data);
    setResena(data);
  };

  const getMasResenas = async (e) => {
    console.log("length filtros: ", filtros.length);
    if (
      filtros[0][0][1] != "" &&
      filtros[0][1][1] != "" &&
      filtros[0][2][1] != ""
    ) {
      //console.log("filtros lista ahora:", filtros[0][2][1]);
      setDelegacio(filtros[0][0]);
      setPreciomenor(filtros[0][1]);
      setPreciomayor(filtros[0][2]);

      const res = await fetch(
        `${API}/resenas` /*, {
      method: "GET",
      headers: { "CONTENT-TYPE": "application/json" },
      body: JSON.stringify({ nombre, opcion }),
    }*/
      );
      console.log("respuesta que se deberia ejecutar despues: ", res);
      const data = await res.json();
      setSitios(data);
    }
  };

  useEffect(() => {
    console.log("a ver");
    if (opcion == 0) {
      console.log("inicia bien");
      getResenas();
    } else {
      console.log("inicia bien 2");
      handleSubmitConFiltro();
    }
  }, [opcion]);

  useEffect(() => {
    console.log("deberia pasar algo");
    if (filtros != [] && filtros.length > 0) {
      getMasResenas();
      console.log("filtro filtros: ", filtros);
    }
  }, [filtros]);

  return (
    <div>
      <Filtros inputValue={filtros} onInputValueChange={setFiltros} />
      <div class="inicio2">
        <div class="guia2">
          <br />
          <h2>Reseñas</h2>
          <br />
          <div class="datos">
            <div className="tipo">
              <label className="resultados" for="">
                Resultados de la búsqueda
              </label>
              <form onClick={handleSubmitConFiltro} value={opcion}>
                <Filtrar_por_reseñas
                  className="filtrarReseñas"
                  inputValue={opcion}
                  onInputValueChange={setOpcion}
                />
              </form>
            </div>
            {resenas.map(
              (resena) =>
                resena.habilitado == true && <Reseñas items={resena} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListaReseñas;
