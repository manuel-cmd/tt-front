import React, { useEffect, useState } from "react";

import "./Sitio.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const API = "http://localhost:5000";

function SitioNuevo() {
  const [tipo_sitio, setTipo_sitio] = useState("");
  const [correo, setCorreo] = useState("");
  const [nombre, setNombre] = useState("");
  const [direccion, setDireccion] = useState("");
  const [telefono, setTelefono] = useState("");
  const [sitioWeb, setSitioWeb] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [horarios, setHorarios] = useState("");
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
  const [delegacion, setDelegacion] = useState([
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
  const [colonia, setColonia] = useState([]);
  const [fecha_actualizacion, setFecha_actualizacion] = useState("");
  const [fecha_fundacion, setFecha_fundacion] = useState("");
  const [costo_promedio, setCostoPromedio] = useState("");
  const [adscripcion, setAdscripcion] = useState("");
  const [etiquetas, setEtiquetas] = useState([]);
  const [servicios, setServicios] = useState([]);
  const [fotografiasC, setFotografias] = useState("");
  const [x_longitud, setX_longitud] = useState("");
  const [y_latitud, setY_latitud] = useState("");
  //const [, navigate] = useLocation();
  const [datos, setDatos] = useState(null);
  const navigate = useNavigate();

  /*const handleCambiarDelegacion = async (e) => {
    e.preventDefault();
    setDelegacion(e.target.value);
    const res = await fetch(`${API}/delegacion`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ delegacion }),
    });
    const data = await res.json();
    setColonia(await data);
  };*/

  const handleSubmit = async (e) => {
    e.preventDefault();
    const nombre_sitio = nombre;
    const pagina_web = sitioWeb;
    console.log("en crear sitio");
    const res = await fetch(`${API}/sitio`, {
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
        horarios,
        etiquetas,
        servicios,
      }),
    });
    const data = await res.json();
    setDatos(await data);
    console.log("data es: ", data);
    //navigate(<App2></App2>);
    console.log("data otra vez: ", data);
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

        <label className="dato">Nombre: </label>
        <br />
        <input
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          name="correo"
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
              {delegacion.map((item, i) => (
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
              {colonia.map((item, i) => (
                <option value={i}>{item}</option>
              ))}
            </select>{" "}
            <br />
            <br />
            <label className="dato">Correo: </label>
            <br />
            <input
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
              name="correo"
              className="input"
            />
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
              value={sitioWeb}
              onChange={(e) => setSitioWeb(e.target.value)}
            />
            <br />
            <br />
            <label className="dato">Fotografías:</label>
            <br />
            <label></label>
          </div>
          <div className="derecha">
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
            <button className="actualizar_sitio" onClick={handleSubmit}>
              Crear
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SitioNuevo;
