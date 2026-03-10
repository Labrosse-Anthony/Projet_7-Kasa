import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Logement from './pages/Logement';
import Error from './pages/Error';
import Header from './components/Header'; // <-- Nouvel import
import Footer from './components/Footer'; // <-- Nouvel import

function Router() {
  return (
    <BrowserRouter>
      {/* Le Header est au-dessus des Routes, il sera toujours visible */}
      <Header />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/logement/:id" element={<Logement />} />
        <Route path="*" element={<Error />} />
      </Routes>

      {/* Le Footer est en dessous des Routes, il sera toujours visible */}
      <Footer />
    </BrowserRouter>
  );
}

export default Router;