import defaultTheme from 'tailwindcss/defaultTheme';

const getBreakpoint = (screen: keyof typeof defaultTheme.screens): number => 
  Number(defaultTheme.screens[screen].replace(/\D/g, ''));

const getTailwindBreakpoints = () => {
  const tabletBP = getBreakpoint('md');
  const desktopBP = getBreakpoint('xl');

  return { tabletBP, desktopBP };
};

export default getTailwindBreakpoints;
