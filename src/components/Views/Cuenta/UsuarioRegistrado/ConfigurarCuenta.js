import React from "react";

import './ConfigurarCuenta.css';

function ConfigurarCuenta(){
    return(
        <div class="formulario">
            <div>
            <br/>
                <div class="configuracion">
                    <label>Configurar Cuenta</label><br/><br/>
                    <label className="etiqueta">Perfil</label>
                    <div className="bloque"><label className="etiqueta">Cambiar foto de perfil</label></div><br/>
                    <div className="bloque"><label className="etiqueta">Nombre de usuario</label><input type="text" className="cambio" placeholder="nombre"/><button className="cambiar">Cambiar</button></div><br/><br/>
                    <label>Cambiar contraseña</label>
                    <div className="bloque"><label className="etiqueta">Contraseña actual</label><input type="text" className="cambio"/><button className="cambiar">Cambiar</button></div><br/>
                    <div className="bloque"><label className="etiqueta">Contraseña nueva</label><input type="text" className="cambio"/><button className="cambiar">Cambiar</button></div><br/><br/>
                    <label>Eliminar cuenta</label>
                    <div className="bloque"><label className="etiqueta">Contraseña</label><input type="text" className="cambio"/><button className="cambiar">Cambiar</button></div>
                    {//<InfoSitio></InfoSitio>
                    //<Comentarios />
                    //<Reseñas />
                    }
                </div>
            </div>
        </div>
    );
};

export default ConfigurarCuenta;