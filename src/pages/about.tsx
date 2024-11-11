import { Helmet } from 'react-helmet-async'; // Gestion du head du document
import Banner from '@/components/banner.tsx';
import { bannerData, sectionsData } from '@/data/aboutData.tsx';
import AboutSection from '@/components/aboutSection.tsx';

function About() {
  return (
    <div className="w-full">
      <Helmet>
        <title>À propos de Steve Lieuron - Portfolio</title>
      </Helmet>
      <Banner title={bannerData.title} />
      {sectionsData.map((section) => (
        <AboutSection section={section} key={section.id} />
      ))}
    </div>
  );
}

export default About;
