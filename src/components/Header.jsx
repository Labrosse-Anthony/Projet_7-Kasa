import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.scss';
import logo from '../assets/images/logo-red.svg';

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Logo Kasa" />
      <nav>
        <NavLink to="/" end>Accueil</NavLink>
        <NavLink to="/about">A Propos</NavLink>
      </nav>
    </header>
  );
}

export default Header;