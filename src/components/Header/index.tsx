import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from '../ui/navigation-menu';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { useEffect, useState } from 'react';

import { Button } from '../ui/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import getTailwindBreakpoints from '@/lib/tailwindBreakpoints';
import useScreenSize from '@/hooks/useScreenSize';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const screenSize = useScreenSize();
  const { tabletBP } = getTailwindBreakpoints();

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

  const navLinks = [
    ['Accueil', '/'],
    ['A propos', '/about'],
    ['Projets', '/projects'],
    ['Contact', '/contact'],
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-black1 transition-transform duration-300 ${
        visible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <NavigationMenu className="mt-5 max-w-none *:w-full">
        <NavigationMenuList className="justify-between rounded-[100px] border-t border-t-grey1 bg-black2 px-7 py-3.5">
          <NavigationMenuItem className="py-2">
            <NavLink to="/">LIEURON</NavLink>
          </NavigationMenuItem>
          <div className="flex w-full justify-end">
            <Popover open={isOpen} onOpenChange={setIsOpen}>
              <PopoverTrigger asChild className="md:hidden">
                <Button className="bg-transparent hover:bg-transparent">
                  <FontAwesomeIcon icon={faBars} className="text-lg" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="flex w-full list-none flex-col gap-2 bg-black2">
                {navLinks.map(([title, path]) => (
                  <NavigationMenuItem key={title} className="nav-link">
                    <NavLink to={path}>{title}</NavLink>
                  </NavigationMenuItem>
                ))}
              </PopoverContent>
            </Popover>
            <div className="hidden gap-1 md:flex">
              {navLinks.map(([title, path]) => (
                <NavigationMenuItem key={title}>
                  <NavLink to={path} className="nav-link">
                    {title}
                  </NavLink>
                </NavigationMenuItem>
              ))}
            </div>
          </div>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
}

export default Header;
