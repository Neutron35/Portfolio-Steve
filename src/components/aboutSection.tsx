import Timeline from '@/components/timeline.tsx';
import Skills from '@/components/skills.tsx';
import { ExperienceContent, SectionType, SkillsContent } from '@/types/section.types.ts';

function AboutSection({ section }: { section: SectionType }) {
  let content = <></>;

  const isValidContent = (item: any, key: string) => key in item;

  if (section.id === 'experience' && section.content.every((item) => isValidContent(item, 'description'))) {
    content = <Timeline content={section.content as ExperienceContent[]} />;
  } else if (section.id === 'skills' && section.content.every((item) => isValidContent(item, 'text'))) {
    content = <Skills content={section.content as SkillsContent[]} />;
  }

  return (
    <section className="mt-20 flex w-full flex-col items-center gap-9 rounded-[100px] border-t border-[#1B1B1B] px-4 pt-8 md:mt-24 md:px-8">
      <h3 className="title3 relief-tag px-7 py-2 md:mr-auto">{section.title}</h3>
      {content}
    </section>
  );
}

export default AboutSection;
