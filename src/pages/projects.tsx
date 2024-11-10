import { Helmet } from 'react-helmet-async';
import { bannerData, galleryData } from '@/data/projectsData';

import Banner from '@/components/banner';
import Gallery from '@/components/gallery';

function Projects() {
  const { title: bannerTitle, content: bannerContent } = bannerData;
  const { title: galleryTitle, content: galleryContent } = galleryData;

  return (
    <div className="">
      <Helmet>
        <title>Projets - Portfolio Steve Lieuron</title>
      </Helmet>
      <Banner title={bannerTitle} content={bannerContent} />
      <Gallery title={galleryTitle} content={galleryContent} />
    </div>
  );
}

export default Projects;
