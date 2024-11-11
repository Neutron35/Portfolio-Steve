import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Hook personnalisé `ScrollToTop` qui remet la position de défilement en haut lors du changement de route
const ScrollToTop = () => {
  const { pathname } = useLocation(); // Obtient le chemin actuel de la route

  useEffect(() => {
    window.scrollTo(0, 0); // Remet la position de défilement en haut dès que le chemin change
  }, [pathname]);

  return null; // Ne rend rien dans le DOM
};

export default ScrollToTop;
