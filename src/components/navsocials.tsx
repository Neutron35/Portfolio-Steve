import { NavigationMenuItem } from '@/components/ui/navigation-menu.tsx';
import { socialsData } from '@/data/socialsData.tsx';
import { Link } from 'react-router-dom';

function NavSocials() {
  return (
    <div className="flex justify-end gap-5">
      {socialsData.map((social) => (
        <NavigationMenuItem key={social.title} className="text-2xl">
          <Link to={social.link} target="_blank">
            {social.element}
          </Link>
        </NavigationMenuItem>
      ))}
    </div>
  );
}

export default NavSocials;
