import { bannerData, galleryData } from '@/data/projectsData';

import Banner from '@/components/Banner';
import Gallery from '@/components/Gallery';

function Projects() {
  const { title: bannerTitle, content: bannerContent } = bannerData;
  const { title: galleryTitle, content: galleryContent } = galleryData;
  console.log(galleryTitle, galleryContent);
  return (
    <div className="flex flex-col gap-24">
      <Banner title={bannerTitle} content={bannerContent} />
      <Gallery title={galleryTitle} content={galleryContent} />
    </div>
  );
}

export default Projects;
