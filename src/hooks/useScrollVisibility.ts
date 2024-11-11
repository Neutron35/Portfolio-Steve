import { useEffect, useState } from 'react';

// Hook personnalisé pour gérer la visibilité en fonction du scroll
const useScrollVisibility = (threshold = 50) => {
  // État pour stocker la position actuelle du scroll
  const [position, setPosition] = useState(window.scrollY);
  // État pour déterminer si l'élément est visible
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Fonction de gestion du scroll
    const handleScroll = () => {
      const moving = window.scrollY;
      // Met à jour la visibilité en fonction de la position du scroll
      setVisible(position > moving || moving < threshold);
      setPosition(moving);
    };

    // Ajoute l'écouteur d'événement pour le scroll
    window.addEventListener('scroll', handleScroll);
    // Nettoyage de l'écouteur lors du démontage
    return () => window.removeEventListener('scroll', handleScroll);
  }, [position, threshold]);

  // Retourne la visibilité
  return visible;
};

export default useScrollVisibility;
