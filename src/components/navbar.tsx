import { PopoverAnchor, PopoverContent, PopoverTrigger } from './ui/popover';
import { useEffect, useState } from 'react';
import { Button } from './ui/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import NavLinks from './navlinks';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import getTailwindBreakpoints from '@/lib/tailwindBreakpoints';
import { navbarType } from '@/types/ui.types.ts';
import useScreenSize from '@/hooks/useScreenSize';
import { NavigationMenu } from '@/components/ui/navigation-menu.tsx';

// Composant Navbar gérant l'affichage du menu de navigation et son état ouvert/fermé
function Navbar({ visible }: navbarType) {
  const screenSize = useScreenSize();
  const { tabletBP } = getTailwindBreakpoints();
  const [isOpen, setIsOpen] = useState(false);

  // Ferme le menu si la taille de l'écran dépasse le breakpoint tablettes
  useEffect(() => {
    if (screenSize.width >= tabletBP && isOpen) {
      setIsOpen(false);
    }
  }, [screenSize.width, tabletBP, isOpen]);

  return (
    <div>
      <PopoverAnchor className="relative">
        {/* Bouton déclencheur du menu de navigation sur mobile */}
        <PopoverTrigger asChild className="md:hidden">
          <Button className="bg-transparent hover:bg-transparent" aria-label="Menu de navigation entre les pages">
            <FontAwesomeIcon icon={faBars} className="text-lg" />
          </Button>
        </PopoverTrigger>
        {/* Contenu du popover pour le menu de navigation mobile */}
        <PopoverContent
          align="end"
          sideOffset={12}
          className={`w-fit list-none items-center justify-center rounded-[24px] border-none bg-black2 text-center transition-transform duration-200 ${
            visible ? 'translate-y-0' : 'translate-y-[-200px]'
          }`}
        >
          <NavigationMenu>
            <NavLinks position="popover" />
          </NavigationMenu>
        </PopoverContent>

        {/* Menu de navigation visible sur les écrans plus larges */}
        <NavigationMenu className="hidden gap-1 md:flex">
          <NavLinks position="top" />
        </NavigationMenu>
      </PopoverAnchor>
    </div>
  );
}

export default Navbar;
