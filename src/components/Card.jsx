import React from "react";
import { link } from 'react-router-dom';
import '../assets/style/card.scss';

function Card({ id , title, cover}) {
    return(
        <link to={`/logement/${id}`} className="card">
            <img src={cover} alt={title} />
            <h2>{title}</h2>
        </link>
    );     
}

export default Card;