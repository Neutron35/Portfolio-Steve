import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from './navbar';
import { Popover } from './ui/popover';
import getTailwindBreakpoints from '@/lib/tailwindBreakpoints';
import useScreenSize from '@/hooks/useScreenSize';
import useScrollVisibility from '@/hooks/useScrollVisibility';

// Composant Header affichant le logo et la barre de navigation avec gestion de la visibilité au scroll
function Header() {
  const screenSize = useScreenSize();
  const { tabletBP } = getTailwindBreakpoints();
  const [isOpen, setIsOpen] = useState(false);

  const visible = useScrollVisibility();

  // Ferme le menu si la taille de l'écran dépasse le breakpoint tablettes
  useEffect(() => {
    if (screenSize.width >= tabletBP && isOpen) {
      setIsOpen(false);
    }
  }, [screenSize.width, tabletBP, isOpen]);

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-black1 transition-transform duration-300 ${
        visible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="mt-5 max-w-none *:w-full">
        {/* Popover pour le menu de navigation mobile */}
        <Popover open={isOpen} onOpenChange={setIsOpen}>
          <div className="flex items-center justify-between rounded-[100px] border-t bg-black2 px-7 py-3.5">
            <div className="py-2">
              {/* Logo avec lien vers la page d'accueil */}
              <NavLink to="/" className="font-bold">
                <h1>LIEURON</h1>
              </NavLink>
            </div>
            {/* Barre de navigation */}
            <Navbar visible={visible} />
          </div>
        </Popover>
      </div>
    </header>
  );
}

export default Header;
