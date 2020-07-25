import React from "react";

import "./Card.css";

const Card = ({ id, name, status, gender, origin, location, image, created}) => (
    <div className="Card__Container">
        <img className="Card__Image" src={image} alt={name} />
        <div className="Card__Info">
            <span>Identificador del Personaje: {id}</span>
            <span>Estatus en la Serie: {status}</span>
            <span>Genero: {gender}</span>
            <span>Lugar de Origen: {origin.name}</span>
            <span>Ubicación Actual: {location.name}</span>
            <span>Fecha de Creación del Personaje: {created}</span>
        </div>
    </div>
);

export default Card;