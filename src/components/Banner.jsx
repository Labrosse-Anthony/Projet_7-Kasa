import React from 'react';
import './banner.scss';

/**
 * Composant Banner unique pour l'Accueil et la page À Propos
 * @param {string} texte - Le texte à afficher dans la bannière (optionnel)
 * @param {boolean} isAbout - Définit si on utilise le style spécifique à la page À Propos
 */
function Banner({ texte, isAbout }) {
  return (
    /* On ajoute la classe 'banner-about' si isAbout est vrai, sinon 'banner-home' */
    <div className={`banner ${isAbout ? 'banner-about' : 'banner-home'}`}>
      
      {/* Condition : on affiche le titre h1 SEULEMENT si la prop 'texte' existe */}
      {texte && <h1>{texte}</h1>}
      
    </div>
  );
}

export default Banner;