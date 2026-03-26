import React, { useState } from "react";
import arrow from '../assets/images/arrow.svg';
import '../components/collapse.scss';

function Collapse({ title, content }) {
  const [isOpen, setIsOpen] = useState(false); /* État pour savoir si le contenu est ouvert ou fermé */

  const toggleCollapse = () => { /* Fonction pour ouvrir/fermer le contenu */
    setIsOpen(!isOpen); /* Inverse l'état actuel : si c'est ouvert, ça le ferme, et vice versa */
  };

  return (
    <div className="collapse">
      <div className="collapse-header" onClick={toggleCollapse}>
        <h3>{title}</h3>
        <img 
          src={arrow} 
          alt="Ouvrir/Fermer" 
          className={isOpen ? "arrow arrow-up" : "arrow arrow-down"} 
        />
      </div>
      
      {isOpen && ( /* Affiche le contenu seulement si isOpen est true */
        <div className="collapse-content">
          <p>{content}</p>
        </div>
      )}
    </div>
  );
}

export default Collapse;