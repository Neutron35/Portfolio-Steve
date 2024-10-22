import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from '../ui/navigation-menu';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';

import { Button } from '../ui/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import getTailwindBreakpoints from '@/lib/tailwindBreakpoints';
import useScreenSize from '@/hooks/useScreenSize';

function Header() {
  const screenSize = useScreenSize();
  const { tabletBP } = getTailwindBreakpoints();
  const navLinks = [
    ['Accueil', '/'],
    ['A propos', '/about'],
    ['Projets', '/projects'],
    ['Contact', '/contact'],
  ];
  return (
    <header className="flex w-full pt-5">
      <NavigationMenu className="max-w-none *:w-full">
        <NavigationMenuList className="w-full justify-between rounded-[100px] border-t border-t-grey1 bg-black2 px-7 py-3.5">
          <NavigationMenuItem className="py-2">
            <NavLink to="/">LIEURON</NavLink>
          </NavigationMenuItem>
          <div className="flex gap-1">
            {screenSize.width < tabletBP ? (
              <Popover>
                <PopoverTrigger asChild>
                  <Button className="bg-transparent hover:bg-transparent">
                    <FontAwesomeIcon icon={faBars} className="text-lg" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="flex w-full list-none flex-col gap-2 bg-black2">
                  {navLinks.map(([title, path]) => (
                    <NavigationMenuItem key={title}>
                      <NavLink to={path}>
                        <Button className="nav-link w-full">{title}</Button>
                      </NavLink>
                    </NavigationMenuItem>
                  ))}
                </PopoverContent>
              </Popover>
            ) : (
              navLinks.map(([title, path]) => (
                <NavigationMenuItem key={title}>
                  <NavLink to={path}>
                    <div className="nav-link">{title}</div>
                  </NavLink>
                </NavigationMenuItem>
              ))
            )}
          </div>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
}

export default Header;
