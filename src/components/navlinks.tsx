import { NavLink } from 'react-router-dom';
import { NavigationMenuItem } from './ui/navigation-menu';
import { navLinksType } from '@/types/navlinks.types';
import pagesData from '@/data/pagesData';

function NavLinks({ position }: navLinksType) {
  const filteredPagesData = pagesData.slice(0, pagesData.length - 3);

  const classNames: Record<string, string> = {
    top: 'hidden gap-1 md:flex',
    popover: 'flex flex-col gap-5',
    bottom: 'flex flex-col gap-1 md:flex-row justify-center items-center gap-1',
  };

  const divClassName = classNames[position] || '';

  return (
    <div className={divClassName}>
      {filteredPagesData.map((page) => (
        <NavigationMenuItem key={page.title}>
          <NavLink to={page.path} className="nav-link">
            {page.title}
          </NavLink>
        </NavigationMenuItem>
      ))}
    </div>
  );
}

export default NavLinks;
