import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <img src="logo-kasa.png" alt="Logo Kasa" /> {/* On mettra le vrai logo plus tard */}
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/about">A Propos</Link>
      </nav>
    </header>
  );
}

export default Header;