import React, { memo, useRef, useTransition } from "react";
import Estrellas from "../Estrellas/Estrellas";
import { useMemo } from "react";

import "./Filtros.css";
import { useState } from "react";
import { useEffect } from "react";

function Filtros(props) {
  const [delegacion, setDelegacion] = useState("");
  const [preciomenor, setPreciomenor] = useState("");
  const [preciomayor, setPreciomayor] = useState("");
  const aver = [];

  const handlerDelegacion = function (e) {
    const opcion = e.target.value;
    console.log("opcion del: ", opcion);
    setDelegacion(opcion);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    aver.push([
      ["delegacion", delegacion],
      ["preciomenor", preciomenor],
      ["preciomayor", preciomayor],
    ]);
  };
  const datos = useMemo(() => aver, [aver]);

  const limpiar = async (e) => {
    setPreciomayor("");
    setPreciomenor("");
  };

  const tipo = 1;

  return (
    <div class="filtro">
      <form onClick={handleSubmit} id="formulario">
        <br />
        <label for="">Filtros: </label>
        <br /> <br />
        <label for="">Precio</label>
        <br />
        <div class="rango">
          <input
            id="input"
            name="preciom"
            type="text"
            class="precio"
            onChange={(e) => {
              setPreciomenor(e.target.value);
            }}
            value={preciomenor}
          />{" "}
          a{" "}
          <input
            id="input"
            name="preciom"
            type="text"
            class="precio"
            onChange={(e) => {
              setPreciomayor(e.target.value);
            }}
            value={preciomayor}
          />
          <br />
          <br />
        </div>
        {tipo === 0 && (
          <div>
            <label for="">Servicios</label>
            <br />
            <select name="delegacion" id="">
              <option value="hoteles">Gustavo A. Madero</option>
              <option value="restaurantes">Restaurantes</option>
              <option value="museos">Museos</option>
              <option value="monumentos">Monumentos</option>
              <option value="parques">Parques</option>
              <option value="teatros">Teatros</option>
            </select>
            <br />
            <br />
          </div>
        )}
        <label for="">Calificación de Usuarios</label>
        <br />
        <Estrellas></Estrellas>
        <br />
        <label for="">Alcaldía</label>
        <br />
        <select name="delegacion" id="" onChange={handlerDelegacion}>
          <option value="hoteles">Gustavo A. Madero</option>
          <option value="restaurantes">Restaurantes</option>
          <option value="museos">Museos</option>
          <option value="monumentos">Monumentos</option>
          <option value="parques">Parques</option>
          <option value="teatros">Teatros</option>
        </select>
        <br /> <br />
        <div class="filtro_botones">
          <button
            name="_action"
            class="buscar_filtro"
            value={props.inputValue}
            onClick={(e) => {
              props.onInputValueChange(datos);
            }}
          >
            Buscar
          </button>
          <button class="eliminar_filtro" onClick={limpiar}>
            Limpiar
          </button>
        </div>
        <br />
      </form>
    </div>
  );
}

export default Filtros;
