import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { DatePicker } from "@material-ui/pickers";

import "./Sitio.css";
import "./SitioNuevo.css";
import SitioNuevoController from "./SitioNuevoController";

const API = "http://localhost:5000";

function SitioNuevo() {
  const [tipo_sitio, setTipo_sitio] = useState("");
  //const [correo, setCorreo] = useState("");
  const [nombre_sitio, setNombre] = useState("");
  const [direccion, setDireccion] = useState("");
  const [telefono, setTelefono] = useState("");
  const [pagina_web, setSitioWeb] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [horarios, setHorarios] = useState([]);
  const [horarioLunesA, setHorarioLunesA] = useState("");
  const [horarioMartesA, setHorarioMartesA] = useState("");
  const [horarioMiercolesA, setHorariomMiercolesA] = useState("");
  const [horarioJuevesA, setHorarioJuevesA] = useState("");
  const [horarioViernesA, setHorarioViernesA] = useState("");
  const [horarioSabadoA, setHorarioSabadoA] = useState("");
  const [horarioDomingoA, setHorarioDomingoA] = useState("");
  const [horarioLunesC, setHorarioLunesC] = useState("");
  const [horarioMartesC, setHorarioMartesC] = useState("");
  const [horarioMiercolesC, setHorariomMiercolesC] = useState("");
  const [horarioJuevesC, setHorarioJuevesC] = useState("");
  const [horarioViernesC, setHorarioViernesC] = useState("");
  const [horarioSabadoC, setHorarioSabadoC] = useState("");
  const [horarioDomingoC, setHorarioDomingoC] = useState("");
  const [delegaciones, setDelegaciones] = useState([
    "Álvaro Obregón",
    "Benito Juárez",
    "Azcapotzalco",
    "Coyoacán",
    "Cuajimalpa de Morelos",
    "Cuauhtémoc",
    "Gustavo A. Madero",
    "Iztacalco",
    "Iztapalapa",
    "Magdalena Contreras",
    "Miguel Hidalgo",
    "Milpa Alta",
    "Tláhuac",
    "Tlalpan",
    "Venustiano Carranza",
    "Xochimilco",
  ]);
  const [delegacion, setDelegacion] = useState("");
  const [colonia, setColonia] = useState([]);
  //const [fecha_actualizacion, setFecha_actualizacion] = useState(new Date());
  const [fecha_fundacions, setFecha_fundacion] = useState(new Date());
  const [costo_promedio, setCostoPromedio] = useState("");
  //const [adscripcion, setAdscripcion] = useState("");
  const [etiquetas, setEtiquetas] = useState([]);
  const [servicios, setServicios] = useState([]);
  const [fotografiasC, setFotografias] = useState("");
  const [x_longitud, setX_longitud] = useState("");
  const [y_latitud, setY_latitud] = useState("");
  const [datos, setDatos] = useState(null);

  const horario = [];
  const navigate = useNavigate();

  const { crearSitio } = SitioNuevoController();
  const [data, setData] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const tiempoTranscurrido = Date.now();
    const hoy = new Date(tiempoTranscurrido);
    //setFecha_actualizacion(hoy.toLocaleDateString());
    const fecha_actualizacion = hoy.toLocaleDateString();
    const adscripcion = fecha_actualizacion;
    horario.push(
      [horarioLunesA, horarioLunesC],
      [horarioMartesA, horarioMartesC],
      [horarioMiercolesA, horarioMiercolesC],
      [horarioJuevesA, horarioJuevesC],
      [horarioViernesA, horarioViernesC],
      [horarioSabadoA, horarioSabadoC],
      [horarioDomingoA, horarioDomingoC]
    );

    //console.log("en crear sitio");
    setHorarios(horario);

    const fecha_fundacion = fecha_fundacions.toLocaleDateString();
    setColonia("mi barrio");
    console.log("a imprimir todo: ");
    console.log(nombre_sitio);
    console.log(x_longitud);
    console.log(y_latitud);
    console.log(direccion);
    console.log(tipo_sitio);
    console.log(delegacion);
    console.log(colonia);
    console.log(fecha_actualizacion);
    console.log(descripcion);
    //console.log(correo);
    console.log(fecha_fundacion);
    console.log(costo_promedio);
    console.log(pagina_web);
    console.log(telefono);
    console.log(adscripcion);
    console.log(horario);
    console.log(etiquetas);
    console.log(servicios);

    /*const res = await fetch(`${API}/crearsitio`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        nombre_sitio,
        x_longitud,
        y_latitud,
        direccion,
        tipo_sitio,
        delegacion,
        colonia,
        fecha_actualizacion,
        descripcion,
        correo,
        fecha_fundacion,
        costo_promedio,
        pagina_web,
        telefono,
        adscripcion,
        horario,
        etiquetas,
        servicios,
      }),
    });*/
    const correo = "p@gmail.com";
    const contrasena = "nose";
    setData(await crearSitio(correo, contrasena));
  };

  useEffect(() => {
    if (datos == false || datos == []) {
      console.log("data error: ", datos);
      toast.error(datos.error);
    }
    if (datos != null) {
      if (datos.tipo_usuario == "Usuario registrado") {
        console.log("data es en useEffect: ", datos);
        navigate("../usuario/inicio");
      }
      if (datos.tipo_usuario == "administrador") {
        console.log("data es en useEffect: ", datos);
        navigate("../administrador/inicio");
      }
    }
  }, [datos]);

  return (
    <div class="inicio_2">
      <div class="enmedio">
        <h2>Nuevo sitio </h2>
        <br />
        <form onSubmit={handleSubmit}>
          <label className="dato">Nombre: </label>
          <br />
          <input
            value={nombre_sitio}
            onChange={(e) => setNombre(e.target.value)}
            name="nombre_sitio"
            className="input"
          />
          <br />
          <br />
          <br />
          <div className="cualquier">
            <div className="izquierda">
              <label className="dato">Tipo de sitio: </label>
              <select
                className="filtrarReseñas"
                value={tipo_sitio}
                onChange={(e) => setTipo_sitio(e.target.value)}
              >
                <option value="1">Hotel</option>
                <option value="2">Restaurante</option>
                <option value="3">Museo</option>
              </select>{" "}
              <br />
              <br />
              <label className="dato">Longitud, Latitud: </label>
              <br />
              <input
                className="hora"
                value={x_longitud}
                onChange={(e) => setX_longitud(e.target.value)}
              />
              {"-"}
              <input
                className="hora"
                value={y_latitud}
                onChange={(e) => setY_latitud(e.target.value)}
              />
              <br />
              <br />
              <label className="dato">Delegacion: </label>
              <select
                className="filtrarReseñas"
                value={delegacion}
                onChange={(e) => {
                  setDelegacion(e.target.value);
                  //handleCambiarDelegacion(e);
                  /*setDelegacion(e.target.value)*/
                }}
              >
                {delegaciones.map((item, i) => (
                  <option value={i}>{item}</option>
                ))}
              </select>{" "}
              <br />
              <br />
              <label className="dato">Colonia: </label>
              <select
                className="filtrarReseñas"
                value={colonia}
                onChange={(e) => {
                  setColonia(e.target.value);
                  //handleCambiarDelegacion(e);
                  /*setDelegacion(e.target.value)*/
                }}
              >
                {delegaciones.map((item, i) => (
                  <option value={i}>{item}</option>
                ))}
              </select>{" "}
              <br />
              <br />
              <label className="dato">Correo: </label>
              <br />
              {/*<input
                value={correo}
                onChange={(e) => setCorreo(e.target.value)}
                name="correo"
                className="input"
                />*/}
              <br />
              <br />
              <label className="dato">Dirección</label>
              <br />
              <input
                type="text"
                placeholder="En algun lugar de la ciudad de méxico"
                value={direccion}
                onChange={(e) => setDireccion(e.target.value)}
              />
              <br />
              <br />
              <label className="dato">Teléfono: </label>
              <br />
              <input
                type="number"
                placeholder="55 5555 5555"
                value={telefono}
                onChange={(e) => setTelefono(e.target.value)}
              />
              <br />
              <br />
              <label className="dato">Sitio web:</label>
              <br />
              <input
                type="text"
                placeholder="https:algun sitio web por alli"
                value={pagina_web}
                onChange={(e) => setSitioWeb(e.target.value)}
              />
              <br />
              <br />
              <label className="dato">Fotografías:</label>
              <br />
              <label></label>
            </div>
            <div className="derecha">
              <label className="dato">Fecha de fundacion:</label>
              <br />
              <br />
              <DatePicker
                value={fecha_fundacions}
                onChange={setFecha_fundacion}
              ></DatePicker>
              <br />
              <br />
              <label className="dato">Costo promedio: </label>
              <br />
              <input
                type="text"
                placeholder="$"
                value={costo_promedio}
                onChange={(e) => setCostoPromedio(e.target.value)}
              />
              <br />
              <br />
              <label className="dato">Descripción: </label>
              <br />
              <textarea
                placeholder="El mejor sitio de tacos de la ciudad de méxico. Amigo taco, amigo
            taco.
          "
                className="descripcion"
                value={descripcion}
                onChange={(e) => setDescripcion(e.target.value)}
              />

              <br />
              <br />
              <label className="dato">Horario: </label>
              <br />
              <div className="horario">
                <div className="dia">
                  <label>Lunes: </label>
                </div>
                <input
                  className="hora"
                  value={horarioLunesA}
                  onChange={(e) => setHorarioLunesA(e.target.value)}
                />{" "}
                -{" "}
                <input
                  className="hora"
                  value={horarioLunesC}
                  onChange={(e) => setHorarioLunesC(e.target.value)}
                />
                <div className="dia">
                  <label className="dia">Martes: </label>
                </div>
                <input
                  className="hora"
                  value={horarioMartesA}
                  onChange={(e) => setHorarioMartesA(e.target.value)}
                />{" "}
                -{" "}
                <input
                  className="hora"
                  value={horarioMartesC}
                  onChange={(e) => setHorarioMartesC(e.target.value)}
                />
                <div className="dia">
                  <label className="dia">Miércoles</label>
                </div>
                <input
                  className="hora"
                  value={horarioMiercolesA}
                  onChange={(e) => setHorariomMiercolesA(e.target.value)}
                />{" "}
                -{" "}
                <input
                  className="hora"
                  value={horarioMiercolesC}
                  onChange={(e) => setHorariomMiercolesC(e.target.value)}
                />
                <div className="dia">
                  <label className="dia">Jueves: </label>
                </div>
                <input
                  className="hora"
                  value={horarioJuevesA}
                  onChange={(e) => setHorarioJuevesA(e.target.value)}
                />{" "}
                -{" "}
                <input
                  className="hora"
                  value={horarioJuevesC}
                  onChange={(e) => setHorarioJuevesC(e.target.value)}
                />
                <div className="dia">
                  <label className="dia">Viernes: </label>
                </div>
                <input
                  className="hora"
                  value={horarioViernesA}
                  onChange={(e) => setHorarioViernesA(e.target.value)}
                />{" "}
                -{" "}
                <input
                  className="hora"
                  value={horarioViernesC}
                  onChange={(e) => setHorarioViernesC(e.target.value)}
                />
                <div className="dia">
                  <label className="dia">Sábado: </label>
                </div>
                <input
                  className="hora"
                  value={horarioSabadoA}
                  onChange={(e) => setHorarioSabadoA(e.target.value)}
                />{" "}
                -{" "}
                <input
                  className="hora"
                  value={horarioSabadoC}
                  onChange={(e) => setHorarioSabadoC(e.target.value)}
                />
                <div className="dia">
                  <label className="dia">Domingo: </label>
                </div>
                <input
                  className="hora"
                  value={horarioDomingoA}
                  onChange={(e) => setHorarioDomingoA(e.target.value)}
                />{" "}
                -{" "}
                <input
                  className="hora"
                  value={horarioDomingoC}
                  onChange={(e) => setHorarioDomingoC(e.target.value)}
                />
              </div>
              <br />
              <br />
              <button className="actualizar_sitio" type="submit">
                Crear
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SitioNuevo;
