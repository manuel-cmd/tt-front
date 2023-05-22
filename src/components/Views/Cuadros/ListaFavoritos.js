import React, { useContext, useEffect, useState } from "react";

import Filtrar_por from "../Filtros/Filtrar_por";
import Buscar from "../Buscar/Buscar";
//import InfoSitio from "./InfoSitio";
//import Comentarios from "./Comentarios";
import "./ListaSitios.css";
import Favoritos from "./Favoritos";
import Filtros from "../Filtros/Filtros";
import { UserContext } from "../../../pages/UsuarioRegistrado/Inicio/App2";

const API = "http://localhost:5000";

function ListaFavoritos() {
  const u = useContext(UserContext);
  //const id_usuer = 0;
  const datos = [];
  const [name, setName] = useState("");
  const [nombre, setNombre] = useState("");
  const [opcion, setOpcion] = useState(0);
  const [sitios, setSitios] = useState([]);
  const [filtros, setFiltros] = useState([]);
  const [precio_min, setPreciomenor] = useState("");
  const [precio_max, setPreciomayor] = useState("");
  const [calificacion_min, setCalificacion_min] = useState("");
  const [cve_delegacion, setDelegacio] = useState("");

  const [favoritos, setFavoritos] = useState([]);

  const handleSubmitConFiltro = async (e) => {
    e.preventDefault();
    console.log("la opcion es: ", opcion);
    console.log("API:", API);
    //setNombre(u.usuario);
    console.log("el nombre del usuario es: ", nombre);
    //console.log(process.env.REACT_APP_API);
    const res = await fetch(`${API}/favoritosUsuario`, {
      method: "GET",
      headers: { "CONTENT-TYPE": "application/json" },
      body: JSON.stringify({ nombre, opcion }),
    });
    console.log("res: ", res);
    const data = await res.json();
    setFavoritos(data);
    console.log("data: ", data);
  };

  const getFavoritos = async (e) => {
    setNombre(u.usuario);
    console.log("el usuario en favoritos es: ", nombre);
    const res = await fetch(`${API}/favoritosUsuario`);
    const data = await res.json();
    //console.log(data);
    setFavoritos(data);
  };

  const getMasSitios = async (e) => {
    console.log("length filtros: ", filtros.length);
    setCalificacion_min(7);
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
    const res = await fetch(`${API}/sitios/filtros`, {
      method: "GET",
      headers: { "CONTENT-TYPE": "application/json" },
      body: JSON.stringify({
        precio_min,
        precio_max,
        calificacion_min,
        cve_delegacion,
      }),
    });
    console.log("respuesta que se deberia ejecutar despues: ", res);
    const data = await res.json();
    setSitios(data);
  };
  /*useEffect(() => {
    console.log("a ver");
    if (opcion == 0) {
      console.log("inicia bien");
      getFavoritos();
    } else {
      console.log("inicia bien 2");
      handleSubmitConFiltro();
    }
  }, [opcion]);*/

  useEffect(() => {
    console.log("a ver");
    if (opcion == 0) {
      console.log("inicia bien");
      getFavoritos();
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
      <div class="inicio2">
        <div class="guia2">
          <br />
          <h2>Favoritos</h2>

          {/*<Buscar />*/}
          <div class="buscar">
            <br />
            <form onSubmit={handleSubmitConFiltro}>
              <input
                type="text"
                className="a"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
              <button className="botonBuscar">Buscar</button>
            </form>
          </div>
          <br />
          <br />
          <div class="datos">
            <div className="tipo">
              <label className="resultados" for="">
                Resultados de la búsqueda
              </label>
              <form onClick={handleSubmitConFiltro} value={opcion}>
                <Filtrar_por
                  className="filtrarPor"
                  inputValue={opcion}
                  onInputValueChange={setOpcion}
                />
                {console.log("opcion d: ", opcion)}
              </form>
            </div>
            {favoritos.map(
              (favorito) =>
                favorito.habilitado == true && <Favoritos items={favorito} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListaFavoritos;
