import { useState } from 'react';
import arrowLeft from '../assets/images/arrow-left.svg';
import arrowRight from '../assets/images/arrow-right.svg';
import '../components/slideshow.scss';

function Slideshow({ pictures }) {
  /* On crée un "marque-page" pour savoir sur quelle image on se trouve (on commence à 0, la 1ère image) */
  const [currentIndex, setCurrentIndex] = useState(0);

  /* S'il n'y a pas d'images, on n'affiche rien */
  if (!pictures || pictures.length === 0) {
    return null;
  }

  /* Boucle infinie */
  const nextSlide = () => {
    /* Si on est à la dernière image, on repasse à la première */
    setCurrentIndex(currentIndex === pictures.length - 1 ? 0 : currentIndex + 1);
  };

  /*Meme logique pour l'image précédente (Boucle infinie) */
  const prevSlide = () => {
    /* Si on est à la première image (0), on va à la dernière. */
    setCurrentIndex(currentIndex === 0 ? pictures.length - 1 : currentIndex - 1);
  };

  /* Condition : on affiche les flèches et le compteur SEULEMENT s'il y a plus d'une image */
  const showControls = pictures.length > 1;

  return (
    <div className="slideshow">
      {/* L'image affichée */}
      <img 
        src={pictures[currentIndex]} 
        alt={`Aperçu du logement ${currentIndex + 1}`} 
        className="slideshow-image" 
      />
      
      {/* Si showControls est vrai (plus d'1 image), on affiche tout ça : */}
      {showControls && (
        <>
          <img 
            src={arrowLeft} 
            alt="Précédent" 
            className="arrow arrow-left" 
            onClick={prevSlide} 
          />
          <img 
            src={arrowRight} 
            alt="Suivant" 
            className="arrow arrow-right" 
            onClick={nextSlide} 
          />
          <span className="slideshow-counter">
            {currentIndex + 1} / {pictures.length}
          </span>
        </>
      )}
    </div>
  );
}

export default Slideshow;
