import { Helmet } from 'react-helmet-async';
import { bannerData, galleryData } from '@/data/recipesData';
import Banner from '@/components/banner';
import RecipesGallery from '@/components/recipesGallery';

function Recipes() {
  const { title: bannerTitle, content: bannerContent } = bannerData;
  const { title: galleryTitle, content: galleryContent } = galleryData;

  return (
    <div className="">
      <Helmet>
        <title>Mes Recettes</title>
      </Helmet>
      <Banner title={bannerTitle} content={bannerContent} />
      <RecipesGallery title={galleryTitle} content={galleryContent} />
    </div>
  );
}

export default Recipes;