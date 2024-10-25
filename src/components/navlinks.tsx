import { NavLink } from 'react-router-dom';
import { NavigationMenuItem } from './ui/navigation-menu';
import { navLinksType } from '@/types/navlinks.types';
import pagesData from '@/data/pagesData';

function NavLinks({ forPopover }: navLinksType) {
  const filteredPagesData = pagesData.filter((page) => page.path !== 'notfound' && page.path !== '*');
  let divClassName = '';
  if (!forPopover) {
    divClassName = 'hidden gap-1 md:flex';
  } else {
    divClassName = 'flex flex-col gap-5';
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
