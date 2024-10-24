import { PopoverAnchor, PopoverContent, PopoverTrigger } from '../ui/popover';
import { useEffect, useState } from 'react';

import { Button } from '../ui/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import NavLinks from '../NavLinks';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import getTailwindBreakpoints from '@/lib/tailwindBreakpoints';
import { navbarType } from '@/types/navbar.types';
import useScreenSize from '@/hooks/useScreenSize';

function Navbar({ visible }: navbarType) {
  const screenSize = useScreenSize();
  const { tabletBP } = getTailwindBreakpoints();
  const [isOpen, setIsOpen] = useState(false);

  // Fermer le menu si l'écran est plus large que le breakpoint tablette
  useEffect(() => {
    if (screenSize.width >= tabletBP && isOpen) {
      setIsOpen(false);
    }
  }, [screenSize.width, tabletBP, isOpen]);

  return (
    <div>
      <PopoverAnchor className="relative">
        <PopoverTrigger asChild className="md:hidden">
          <Button className="bg-transparent hover:bg-transparent">
            <FontAwesomeIcon icon={faBars} className="text-lg" />
          </Button>
        </PopoverTrigger>
        <PopoverContent
          align="end"
          sideOffset={12}
          className={`w-fit list-none items-center justify-center border-none bg-black2 text-center transition-transform duration-200 ${
            visible ? 'translate-y-0' : 'translate-y-[-200px]'
          }`}
        >
          <NavLinks forPopover={true} />
        </PopoverContent>

        <div className="hidden gap-1 md:flex">
          <NavLinks forPopover={false} />
        </div>
      </PopoverAnchor>
    </div>
  );
}

export default Navbar;
