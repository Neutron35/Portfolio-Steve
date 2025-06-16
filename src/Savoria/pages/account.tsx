import { Helmet } from 'react-helmet-async';
import Banner from '@/Portfolio/components/banner.tsx';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

export default function Account() {

  return (
    <div>
      <Helmet>
        <title>Mon compte - Portfolio Steve Lieuron</title>
      </Helmet>
      <NavLink to="/Savoria" className="ml-7 text-2xl">
        <FontAwesomeIcon icon={faArrowLeft} className="mt-12" />
      </NavLink>
      <Banner title="Mon compte" />
      <section className="mt-20 grid grid-cols-2 gap-5 px-4 text-center text-lg md:px-8 md:text-2xl xl:text-3xl">
        <NavLink to="/Savoria/manageaccount"
                 className="rounded-2xl border border-white bg-black2 p-4 hover:bg-white hover:text-black1">
          Informations du compte
        </NavLink>
        <NavLink to="/Savoria/myrecipes"
                 className="rounded-2xl border border-white bg-black2 p-4 hover:bg-white hover:text-black1">
          Mes recettes
        </NavLink>
      </section>

    </div>
  );
}