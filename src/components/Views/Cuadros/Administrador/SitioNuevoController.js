import React, { useEffect, useState } from "react";

import "./Sitio.css";

const API = "http://localhost:5000";

const SitioNuevoController = () => {
  const crearSitio = async (
    nombre_sitio,
    x_longitud,
    y_latitud,
    direccion,
    cve_tipo_sitio,
    cve_delegacion,
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
    servicios
  ) => {
    console.log("en crearSitio");

    const res = await fetch(`${API}/sitio`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        nombre_sitio,
        x_longitud,
        y_latitud,
        direccion,
        cve_tipo_sitio,
        cve_delegacion,
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
    });
    const data = await res.json();
    console.log("data obtenida es: ", data);
    return data;
  };

  return { crearSitio };
};

export default SitioNuevoController;
