import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss'
import logo from '../assets/images/logo-red.svg';

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Logo Kasa" />
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/about">A Propos</Link>
      </nav>
    </header>
  );
}

export default Header;