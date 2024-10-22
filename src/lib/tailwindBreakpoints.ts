import defaultTheme from 'tailwindcss/defaultTheme';

const getTailwindBreakpoints = () => {
  const tabletBP = Number(defaultTheme.screens.md.replace(/\D/g, ''));
  const desktopBP = Number(defaultTheme.screens.xl.replace(/\D/g, ''));

  return { tabletBP, desktopBP };
};

export default getTailwindBreakpoints;
