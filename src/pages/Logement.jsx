import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
/* Vérifie bien le chemin vers ton fichier JSON (adapte-le si besoin) */
import data from '../assets/data/Logements.json'; 
import Slideshow from '../components/Slideshow';
import './logement.scss';
import starfull from '../assets/images/star-full.svg';
import starempty from '../assets/images/star-empty.svg';
import Collapse from '../components/Collapse';

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
        
        {/* À gauche : Le titre, la ville et les TAGS */}
        <div className="logement-title-location">
          <h1 className="logement-title">{logement.title}</h1>
          <p className="logement-location">{logement.location}</p>
          
          {/* La boucle qui crée les tags */}
          <div className="logement-tags">
            {logement.tags.map((tag, index) => (
              <span key={index} className="logement-tag">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* À droite : Le profil de l'hôte et les ÉTOILES */}
        <div className="logement-host-stars">
          <div className="logement-host">
            <p className="host-name">{logement.host.name}</p>
            <img 
              src={logement.host.picture} 
              alt={`Profil de ${logement.host.name}`} 
              className="host-picture" 
            />
          </div>
          
          {/* Le système de notation */}
          <div className="logement-rating">
            {[1, 2, 3, 4, 5].map((star) => (
              <img 
                key={star} 
                /* Si le numéro de l'étoile est inférieur ou égal à la note, on met la rouge, sinon la grise */
                src={star <= parseInt(logement.rating) ? starfull : starempty} 
                alt="Étoile de notation" 
                className="star"
              />
            ))}
          </div>
        </div>
      </div>
      <div className="logement-collapses">
        
        <div className="logement-collapse-item">
          <Collapse title="Description" content={logement.description} />
        </div>
        
        <div className="logement-collapse-item">
          <Collapse 
            title="Équipements" 
            /* On boucle sur les équipements pour créer une vraie liste HTML */
            content={
              <ul>
                {logement.equipments.map((equip, index) => (
                  <li key={index}>{equip}</li>
                ))}
              </ul>
            } 
          />
        </div>
      </div>
    </main>
  );
}

export default Logement;