import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Logement from './pages/Logement';
import Error from './pages/Error';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Route pour la page d'accueil */}
        <Route path="/" element={<Home />} />
        
        {/* Route pour la page À propos */}
        <Route path="/about" element={<About />} />

        {/* Route dynamique pour un logement spécifique (le :id est très important !) */}
        <Route path="/logement/:id" element={<Logement />} />

        {/* Route par défaut (Erreur 404) si l'URL ne correspond à rien */}
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
