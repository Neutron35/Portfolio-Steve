import { Link, NavLink } from 'react-router-dom';
import { NavigationMenu } from '@/components/ui/navigation-menu.tsx';
import { NavigationMenuItem } from '@radix-ui/react-navigation-menu';
import NavLinks from '@/components/navlinks.tsx';
import NavSocials from '@/components/navsocials.tsx';

function Footer() {
  return (
    <footer className="flex w-full flex-col gap-5 pb-9">
      <NavigationMenu className="flex max-w-none list-none flex-col items-center gap-6 xl:flex-row xl:justify-between xl:gap-0">
        <NavigationMenuItem>
          <NavLink to="/" className="font-bold">
            LIEURON
          </NavLink>
        </NavigationMenuItem>
        <NavLinks position="bottom" />
        <NavSocials />
      </NavigationMenu>
      <div className="alt-style flex flex-col justify-between gap-6 border-t-[3px] border-[#1B1B1B] pt-5 text-sm md:flex-row">
        <div>Créé par Steve LIEURON</div>
        <div>
          Développé avec{' '}
          <Link to="https://fr.react.dev/" className="underline">
            React
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
