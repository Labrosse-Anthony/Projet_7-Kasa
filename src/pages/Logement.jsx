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
      
    </main>
  );
}

export default Logement;