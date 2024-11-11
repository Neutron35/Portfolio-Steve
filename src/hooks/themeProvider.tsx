import { createContext, useContext, useEffect, useMemo, useState } from 'react';

// Définition du type pour le contexte du thème
interface ThemeContextType {
  darkTheme: boolean;
  setDarkTheme: (value: boolean) => void;
}

interface ThemeProviderProps {
  children: React.ReactNode;
}

// Création du contexte pour le thème, initialisé à undefined
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Composant fournisseur de thème
const ThemeProvider = ({ children }: ThemeProviderProps) => {
  // État pour gérer le thème sombre, initialisé à partir du localStorage
  const [darkTheme, setDarkTheme] = useState<boolean>(() => {
    const storedTheme = localStorage.getItem('darkTheme');
    return storedTheme === 'true';
  });

  // Effet pour ajouter ou retirer la classe 'dark' au body et sauvegarder le thème choisi
  useEffect(() => {
    if (darkTheme) {
      document.body.classList.add('dark');
      localStorage.setItem('darkTheme', 'true');
    } else {
      document.body.classList.remove('dark');
      localStorage.setItem('darkTheme', 'false');
    }
  }, [darkTheme]);

  // Mémoïsation de la valeur du contexte pour optimiser les performances
  const contextValue = useMemo(
    () => ({
      darkTheme,
      setDarkTheme,
    }),
    [darkTheme]
  );

  return <ThemeContext.Provider value={contextValue}>{children}</ThemeContext.Provider>;
};

// Hook personnalisé pour utiliser le contexte du thème
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export default ThemeProvider;
