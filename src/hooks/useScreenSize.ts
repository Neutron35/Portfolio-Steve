import { useEffect, useState } from 'react';

// Définition du hook personnalisé useScreenSize
const useScreenSize = () => {
  // État pour stocker les dimensions actuelles de l'écran
  const [screenSize, setScreenSize] = useState({
    width: window.innerWidth || 0,
    height: window.innerHeight || 0,
  });

  // Effet qui met à jour les dimensions de l'écran lors du redimensionnement
  useEffect(() => {
    // Fonction de gestion du redimensionnement de la fenêtre
    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth || 0,
        height: window.innerHeight || 0,
      });
    };

    // Ajout de l'écouteur d'événement pour le redimensionnement de la fenêtre
    window.addEventListener('resize', handleResize);

    // Nettoyage de l'écouteur d'événement lors du démontage du composant
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Le tableau vide assure que l'effet ne s'exécute qu'une seule fois

  // Retourne les dimensions actuelles de l'écran
  return screenSize;
};

// Exportation par défaut du hook useScreenSize
export default useScreenSize;
