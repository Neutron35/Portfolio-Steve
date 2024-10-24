import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from '../ui/navigation-menu';
import { useEffect, useState } from 'react';

import { NavLink } from 'react-router-dom';
import Navbar from '../Navbar';
import { Popover } from '../ui/popover';
import getTailwindBreakpoints from '@/lib/tailwindBreakpoints';
import useScreenSize from '@/hooks/useScreenSize';

//import Navbar from '../Navbar';

function Header() {
  const screenSize = useScreenSize();
  const { tabletBP } = getTailwindBreakpoints();
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState(window.scrollY);
  const [visible, setVisible] = useState(true);

  // Gérer l'affichage du header en fonction du scroll
  useEffect(() => {
    const handleScroll = () => {
      const moving = window.scrollY;

      setVisible(position > moving || moving < 50); // Rendre le header visible à la remontée ou proche du haut
      setPosition(moving);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [position]);

  // Fermer le menu si l'écran est plus large que le breakpoint tablette
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
      <NavigationMenu className="mt-5 max-w-none *:w-full">
        <Popover open={isOpen} onOpenChange={setIsOpen}>
          <NavigationMenuList className="justify-between rounded-[100px] border-t border-t-grey1 bg-black2 px-7 py-3.5">
            <NavigationMenuItem className="py-2">
              <NavLink to="/">LIEURON</NavLink>
            </NavigationMenuItem>
            <Navbar visible={visible} />
          </NavigationMenuList>
        </Popover>
      </NavigationMenu>
    </header>
  );
}

export default Header;
