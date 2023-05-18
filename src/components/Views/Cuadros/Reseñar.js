import React, { useContext, useEffect, useState } from "react";

import Estrellas from "../Estrellas/Estrellas";

import "./Reseñar.css";
import { UserContext } from "../../../pages/UsuarioRegistrado/Inicio/App2";
import { useLocation, useNavigate } from "react-router-dom";

import { toast } from "react-hot-toast";
import { Toaster } from "react-hot-toast";

const API = "http://localhost:5000";

function Reseñar(props) {
  const u = useContext(UserContext);

  const navigate = useNavigate();
  const [opcion, setOpcion] = useState(0);
  const [informacion, setInformacion] = useState(0);
  const [data, setData] = useState("");
  const [response, setResponse] = useState("");
  const location = useLocation();
  const id = location.state;
  console.log("props es: ", props);
  console.log("el id desde reseñar sitio es: ", id);

  const getInfoSitio = async (e) => {
    e.preventDefault();

    const res = await fetch(
      `${API}/infoSitio` /*, {
      method: "GET",
      headers: { "CONTENT-TYPE": "application/json" },
      body: JSON.stringify({ id }),
    }*/
    );
    console.log("res: ", res);
    const data = await res.json();
    setInformacion(data);
    console.log("data: ", data);
  };

  const setResena = async (e) => {
    e.preventDefault();
    setOpcion(1);
    const res = await fetch(
      `${API}/resenar` /*, {
      method: "GET",
      headers: { "CONTENT-TYPE": "application/json" },
      body: JSON.stringify({ id }),
    }*/
    );
    console.log("res: ", res);
    const data = await res.json();
    setResponse(data);
    console.log("data: ", data);
  };

  useEffect(() => {
    console.log("a ver");
    if (opcion == 0) {
      console.log("habra cambio");
      getInfoSitio();
    } else {
      console.log("hubo cambio");
      if (response != null) {
        if (response.error == "registrado") {
          //console.log("data es en useEffect: ", data);
          toast.error("Error al hacer la reseña");
          //navigate("../usuario/infoSitio");
        }
        if (response.mensaje == "administrador") {
          console.log("data es en useEffect: ", data);
          toast.success("Reseña realizada correctamente");
          navigate(`../administrador/inicio/:${id}`, { state: id });
        }
        //setResena();
      }
    }
  }, [opcion]);

  return (
    <div class="inicio2">
      <div class="guia2">
        <label for="">Restaurante 1</label>
        <div className="izquierda_abajo">
          <br />
          <div className="info">
            <div class="parte2">
              <div className="parte3">
                <label>Calificación:</label>
                <Estrellas></Estrellas>
                <button>Agregar foto</button>
              </div>
              <div className="partegrande">
                <label className="tipo">Restaurante</label>
                <br />
                <textarea
                  className="reseñar"
                  placeholder="Máximo 200 caractéres"
                ></textarea>
              </div>
            </div>
          </div>
        </div>
        <br />
        <button
          className="botonreseñar"
          value={opcion}
          //onChange={setOpcion(1)}
          onClick={setResena}
        >
          Reseñar
        </button>
      </div>
      <Toaster></Toaster>
    </div>
  );
}

export default Reseñar;
