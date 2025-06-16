import { Helmet } from 'react-helmet-async';
import { NavLink } from 'react-router-dom';
import { bannerData, galleryData } from '@/Savoria/data/recipesData.tsx';
import Banner from '@/Portfolio/components/banner.tsx';
import RecipesGallery from '@/Savoria/components/recipesGallery.tsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import SavoriaLogo from '@/Savoria/assets/Savoria.webp';

function Home() {
  const { title: bannerTitle, content: bannerContent } = bannerData;
  const { title: galleryTitle, content: galleryContent } = galleryData;

  return (
    <div className="">
      <Helmet>
        <title>Mes Recettes</title>
      </Helmet>
      <img src={SavoriaLogo} alt="logo Savoria" className="mx-auto mt-5 w-[150px]" />
      <div className="flex justify-end px-11 pt-4">
        <NavLink to="/Savoria/sign">
          <FontAwesomeIcon icon={faUser} />
        </NavLink>
      </div>
      <Banner title={bannerTitle} content={bannerContent} />
      <RecipesGallery title={galleryTitle} content={galleryContent} />
    </div>
  );
}

export default Home;