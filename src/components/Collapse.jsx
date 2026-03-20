import React, { useState } from "react";
import arrow from '../assets/images/arrow.svg';
import '../components/collapse.scss';

function Collapse({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
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
      
      {isOpen && (
        <div className="collapse-content">
          <p>{content}</p>
        </div>
      )}
    </div>
  );
}

export default Collapse;