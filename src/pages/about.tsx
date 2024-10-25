import { bannerData, sectionsData } from '@/data/aboutData';

import Banner from '@/components/banner';
import Section from '@/components/section';

function About() {
  const { title, content } = bannerData;
  return (
    <div className="flex flex-col gap-24">
      <Banner title={title} content={content} />
      {sectionsData.map((section) => (
        <Section key={section.title} title={section.title} content={section.content} />
      ))}
    </div>
  );
}

export default About;
