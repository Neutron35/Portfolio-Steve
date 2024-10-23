import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { useEffect, useState } from 'react';

import { Button } from '../ui/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';
import { NavigationMenuItem } from '../ui/navigation-menu';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import getTailwindBreakpoints from '@/lib/tailwindBreakpoints';
import pagesData from '@/data/pagesData';
import useScreenSize from '@/hooks/useScreenSize';

function Navbar() {
  const screenSize = useScreenSize();
  const { tabletBP } = getTailwindBreakpoints();
  const [isOpen, setIsOpen] = useState(false);

  const filteredPagesData = pagesData.filter((page) => page.path !== 'notfound' && page.path !== '*');

  // Fermer le menu si l'écran est plus large que le breakpoint tablette
  useEffect(() => {
    if (screenSize.width >= tabletBP && isOpen) {
      setIsOpen(false);
    }
  }, [screenSize.width, tabletBP, isOpen]);

  return (
    <div className="flex w-full justify-end">
      <Popover open={isOpen} onOpenChange={setIsOpen}>
        <PopoverTrigger asChild className="md:hidden">
          <Button className="bg-transparent hover:bg-transparent">
            <FontAwesomeIcon icon={faBars} className="text-lg" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="flex w-full list-none flex-col gap-2 bg-black2">
          {filteredPagesData.map((page) => (
            <NavigationMenuItem key={page.title} className="nav-link">
              <NavLink to={page.path}>{page.title}</NavLink>
            </NavigationMenuItem>
          ))}
        </PopoverContent>
      </Popover>
      <div className="hidden gap-1 md:flex">
        {filteredPagesData.map((page) => (
          <NavigationMenuItem key={page.title}>
            <NavLink to={page.path} className="nav-link">
              {page.title}
            </NavLink>
          </NavigationMenuItem>
        ))}
      </div>
    </div>
  );
}

export default Navbar;
