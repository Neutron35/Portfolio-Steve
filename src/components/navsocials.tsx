import { NavigationMenuItem } from '@/components/ui/navigation-menu.tsx';
import { socialsData } from '@/data/socialsData.tsx';
import { Link } from 'react-router-dom';

function NavSocials() {
  return (
    <div className="flex justify-end gap-5">
      {socialsData.map(({ title, link, element }) => (
        <NavigationMenuItem key={title} className="text-2xl">
          <Link to={link} target="_blank" rel="noopener noreferrer" aria-label={`Aller sur la page ${title} de Steve`}>
            {element}
          </Link>
        </NavigationMenuItem>
      ))}
    </div>
  );
}

export default NavSocials;
