import { NavLink } from 'react-router-dom';
import { NavigationMenuItem } from './ui/navigation-menu';
import { navLinksType } from '@/types/navlinks.types';
import pagesData from '@/data/pagesData';

function NavLinks({ position }: navLinksType) {
  const filteredPagesData = pagesData.slice(0, pagesData.length - 3);
  let divClassName = '';
  switch (position) {
    case 'top':
      divClassName = 'hidden gap-1 md:flex';
      break;
    case 'popover':
      divClassName = 'flex flex-col gap-5';
      break;
    case 'bottom':
      divClassName = 'flex flex-col gap-5 md:flex-row justify-center items-center gap-1';
  }
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
