import React from "react";
import logements from '../assets/data/Logements.json';
import Card from './Card';
import '../assets/style/gallery.scss';

function Gallery() {
    return (
        <main className="gallery">
           {logements.map((logement) => (
            <Card
                key={logement.id}
                id={logement.id}
                title={logement.title}
                cover={logement.cover}
            />
           ))}
        </main>
    )
}

export default Gallery;