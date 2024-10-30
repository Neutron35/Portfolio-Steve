import Banner from '@/components/banner.tsx';
import { bannerData, sectionsData } from '@/data/aboutData.tsx';
import Section from '@/components/section.tsx';

function About() {
  return (
    <div className="flex w-full flex-col gap-24">
      <Banner title={bannerData.title} />
      {sectionsData.map((section) => (
        <Section section={section} key={section.id} />
      ))}
    </div>
  );
}

export default About;
