import React from "react";

function Estrellas(){
    return (
        <div class="estrellas">
            <div class="star_widget">
                <label for="rate-5" class="fas fa-star" onclick="calificar(this)" id="5estralla"></label>
                <label for="rate-4" class="fas fa-star" onclick="calificar(this)" id="4estralla"></label>
                <label for="rate-3" class="fas fa-star" onclick="calificar(this)" id="3estralla"></label>
                <label for="rate-2" class="fas fa-star" onclick="calificar(this)" id="2estralla"></label>
                <label for="rate-1" class="fas fa-star" onclick="calificar(this)" id="1estralla"></label>
            </div>
        </div>
    );
}

export default Estrellas;