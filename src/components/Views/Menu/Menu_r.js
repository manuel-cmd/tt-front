import React from "react";

import './Menu_no_r.css';

function Menu_r(){
    console.log('a ver si');
    return(
        <div class="menu">
            <label class="checkbtn">
                Logo
            </label>
            <div class="opciones">
                <ul>
                    <li><a class="active" href="https://www.google.com/">Inicio</a></li>
                    <li><a href="https://www.google.com/">Sitios</a></li>
                    <li><a href="https://www.google.com/">Favoritos</a></li>
                    <li><a href="https://www.google.com/">Reseñas</a></li>
                    <li><a href="https://www.google.com/">Configurar</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Menu_r;