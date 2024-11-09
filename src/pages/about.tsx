import Banner from '@/components/banner.tsx';
import { bannerData, sectionsData } from '@/data/aboutData.tsx';
import { lazy, Suspense } from 'react';
const AboutSection = lazy(() => import('@/components/aboutSection.tsx'));

function About() {
  return (
    <div className="flex w-full flex-col gap-20 md:gap-24">
      <Banner title={bannerData.title} />
      {sectionsData.map((section) => (
        <Suspense fallback={<div className="loading-placeholder h-[200px]" />}>
          <AboutSection section={section} />
        </Suspense>
      ))}
    </div>
  );
}

export default About;
