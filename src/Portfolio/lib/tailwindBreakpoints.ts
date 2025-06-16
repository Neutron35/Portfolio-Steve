import defaultTheme from 'tailwindcss/defaultTheme';

// Fonction pour obtenir la valeur numérique d'un point de rupture (breakpoint) Tailwind
const getBreakpoint = (screen: keyof typeof defaultTheme.screens): number =>
  Number(defaultTheme.screens[screen].replace(/\D/g, ''));

// Fonction pour obtenir les points de rupture pour tablette et desktop
const getTailwindBreakpoints = () => {
  const tabletBP = getBreakpoint('md'); // Point de rupture pour les tablettes
  const desktopBP = getBreakpoint('xl'); // Point de rupture pour les desktops

  return { tabletBP, desktopBP };
};

export default getTailwindBreakpoints;
