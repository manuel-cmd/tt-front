import React from "react";
import Estrellas from "../Estrellas/Estrellas";

import './Filtros.css'

function Filtros() {
    const tipo = 1;
        
    return (
        <div class="filtro"><br/>
            <label for="">Filtros: </label><br/>
            <label for="">Precio</label><br/>
            <div class="rango">
                <input type="text" class="precio" /> a <input type="text" class="precio" /><br/><br/>
            </div>
            {tipo === 0 &&
                <div>
                    <label for="">Servicios</label><br/>
                    <select name="delegacion" id="">
                        <option value="hoteles">Gustavo A. Madero</option>
                        <option value="restaurantes">Restaurantes</option>
                        <option value="museos">Museos</option>
                        <option value="monumentos">Monumentos</option>
                        <option value="parques">Parques</option>
                        <option value="teatros">Teatros</option>
                    </select>
                    <br /><br />
                </div>
            }
            <label for="">Calificación de Usuarios</label><br/>
            <Estrellas></Estrellas>
            <br />
            <label for="">Alcaldía</label><br />
            <select name="delegacion" id="">
                <option value="hoteles">Gustavo A. Madero</option>
                <option value="restaurantes">Restaurantes</option>
                <option value="museos">Museos</option>
                <option value="monumentos">Monumentos</option>
                <option value="parques">Parques</option>
                <option value="teatros">Teatros</option>
            </select><br />
            <div class="filtro_botones">
                <button class="buscar_filtro">Buscar</button>
                <button class="eliminar_filtro">Limpiar</button>
            </div><br />
        </div>
    );
};

export default Filtros;