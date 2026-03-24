import React from 'react';
import { Link } from 'react-router-dom';
import '../pages/error.scss';

function Error() {
  return (
    <main className="error-page">
      <h1 className="error-code">404</h1>
      <p className="error-message">Oups! La page que vous demandez n'existe pas.</p>
      
      {/* Le composant Link permet de naviguer sans recharger la page */}
      <Link to="/" className="error-link">
        Retourner sur la page d’accueil
      </Link>
    </main>
  );
}

export default Error;