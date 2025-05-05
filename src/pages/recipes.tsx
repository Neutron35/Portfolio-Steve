import { Helmet } from 'react-helmet-async';
import { NavLink } from 'react-router-dom';
import { bannerData, galleryData } from '@/data/recipesData';
import Banner from '@/components/banner';
import RecipesGallery from '@/components/recipesGallery';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

function Recipes() {
  const { title: bannerTitle, content: bannerContent } = bannerData;
  const { title: galleryTitle, content: galleryContent } = galleryData;

  return (
    <div className="">
      <Helmet>
        <title>Mes Recettes</title>
      </Helmet>
      <div className="flex justify-end px-11 pt-4">
        <NavLink to="/sign">
          <FontAwesomeIcon icon={faUser} />
        </NavLink>
      </div>
      <Banner title={bannerTitle} content={bannerContent} />
      <RecipesGallery title={galleryTitle} content={galleryContent} />
    </div>
  );
}

export default Recipes;