import { useEffect, useRef, useState } from 'react';

// Définition du hook personnalisé useIntersectionObserver avec un seuil par défaut de 0.1
const useIntersectionObserver = (threshold: number = 0.1) => {
  const [isVisible, setIsVisible] = useState(false);

  // Référence à l'élément DOM à observer
  const ref = useRef<HTMLDivElement>(null);

  // Utilisation de useEffect pour configurer l'IntersectionObserver
  useEffect(() => {
    // Création d'une instance d'IntersectionObserver
    const observer = new IntersectionObserver(
      // Callback appelé lorsque l'observation détecte un changement
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // Met à jour l'état pour indiquer que l'élément est visible
          observer.disconnect(); // Déconnecte l'observateur une fois l'élément visible
        }
      },
      { threshold } // Options de l'observateur, ici le seuil de visibilité
    );

    const currentRef = ref.current;

    // Si la référence existe, commence à observer l'élément
    if (currentRef) {
      observer.observe(currentRef);
    }

    // Fonction de nettoyage pour arrêter l'observation lorsque le composant est démonté ou le seuil change
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]); // Réexécute l'effet si le seuil change

  // Retourne la référence à attacher à l'élément DOM et l'état de visibilité
  return { ref, isVisible };
};

export default useIntersectionObserver;
