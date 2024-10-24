import { bannerData, sectionsData } from '@/data/aboutData';

import Banner from '@/components/Banner';
import Section from '@/components/Section';

function About() {
  const { title: bannerTitle, content: bannerContent } = bannerData;
  return (
    <div className="flex flex-col gap-24">
      <Banner title={bannerTitle} content={bannerContent} />
      {sectionsData.map((section) => (
        <Section key={section.title} title={section.title} content={section.content} />
      ))}
    </div>
  );
}

export default About;
