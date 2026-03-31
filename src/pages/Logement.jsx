import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
/* Vérifie bien le chemin vers ton fichier JSON (adapte-le si besoin) */
import data from '../assets/data/Logements.json'; 
import Slideshow from '../components/Slideshow';
import './logement.scss';

function Logement() {
  /* On récupère l'ID directement depuis l'URL (ex: /logement/c67ab8a7) */
  const { id } = useParams();
  /* On cherche dans notre base de données (le JSON) l'appartement qui a le même ID */
  const logement = data.find((item) => item.id === id);

  if (!logement) {
    return <Navigate to="/404" />;
  }

  return (
    <main className="logement-page">
      <Slideshow pictures={logement.pictures} />
      
      {/* Le bloc qui contient les infos principales */}
      <div className="logement-header">
        
        {/* À gauche : Le titre et la ville */}
        <div className="logement-title-location">
          <h1 className="logement-title">{logement.title}</h1>
          <p className="logement-location">{logement.location}</p>
        </div>

        /* À droite : Le profil de l'hôte */
        <div className="logement-host">
          <p className="host-name">{logement.host.name}</p>
          <img 
            src={logement.host.picture} 
            alt={`Profil de ${logement.host.name}`} 
            className="host-picture" 
          />
        </div>

      </div>
    </main>
  );
}

export default Logement;