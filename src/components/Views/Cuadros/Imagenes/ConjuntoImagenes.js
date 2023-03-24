import React from "react";

import './ConjuntoImagenes.css'

function ConjuntoImagenes(){
    return(
        <div className="imagen_grande">
            <div className="imagenes">
                <div className="imagen_chica">
                    <img/>
                </div>
                <div className="imagen_chica">
                    <img/>
                </div>
                <div className="imagen_chica">
                    <img/>
                </div>
                <div className="imagen_chica">
                    <img/>
                </div>
            </div>
        </div>
    );
};

export default ConjuntoImagenes;