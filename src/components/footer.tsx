import { Link, NavLink } from 'react-router-dom';
import NavLinks from '@/components/navlinks.tsx';
import NavSocials from '@/components/navsocials.tsx';
import { NavigationMenu } from '@/components/ui/navigation-menu.tsx';

// Composant Footer affichant les liens de navigation, les réseaux sociaux et les informations de création
function Footer() {
  return (
    <footer className="min-h-[140px] w-full pb-9">
      {/* Section principale avec liens de navigation et réseaux sociaux */}
      <div className="flex max-w-none list-none flex-col items-center gap-6 pb-5 xl:flex-row xl:justify-between xl:gap-0">
        <div>
          {/* Lien vers la page d'accueil */}
          <NavLink to="/" className="font-bold">
            LIEURON
          </NavLink>
        </div>
        {/* Menu de navigation */}
        <NavigationMenu>
          <NavLinks position="bottom" />
        </NavigationMenu>
        {/* Liens vers les réseaux sociaux */}
        <NavigationMenu>
          <NavSocials />
        </NavigationMenu>
      </div>
      {/* Section des crédits et technologies utilisées */}
      <div className="alt-style flex flex-col justify-between gap-6 border-t-[3px] border-[#1B1B1B] pt-5 text-sm md:flex-row">
        <div>Créé par Steve LIEURON</div>
        <div>
          Développé avec {/* Lien vers le site de React */}
          <Link to="https://fr.react.dev/" className="underline">
            React
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
