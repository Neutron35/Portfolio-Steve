import { NavLink, useLocation } from 'react-router-dom';
import { NavigationMenuItem } from '../../components/ui/navigation-menu.tsx';
import { navLinksType } from '@/Portfolio/types/ui.types.ts';
import pagesData from '../data/pagesData.tsx';
import { NavigationMenuList } from '@radix-ui/react-navigation-menu';

function NavLinks({ position }: navLinksType) {
  const location = useLocation();
  const filteredPagesData = pagesData.slice(0, 3);

  const classNames: Record<string, string> = {
    top: 'hidden gap-1 md:flex',
    popover: 'flex flex-col gap-5',
    bottom: 'flex flex-col gap-5 md:gap-1 md:flex-row justify-center items-center gap-1',
  };

  const divClassName = classNames[position] || '';

  return (
    <NavigationMenuList className={divClassName}>
      {filteredPagesData.map(({ path, title }) => {
        const isActive = location.pathname === `/${path}`;
        return (
          <NavigationMenuItem key={title}>
            <NavLink
              to={`/Portfolio${path}`}
              className={`nav-link ${isActive ? 'active-class' : ''}`}
            >
              {title}
            </NavLink>
          </NavigationMenuItem>
        );
      })}
    </NavigationMenuList>
  );
}

export default NavLinks;