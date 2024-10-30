import Timeline from '@/components/timeline.tsx';
import Skill from '@/components/skills.tsx';
import { ExperienceContent, SectionType, SkillsContent } from '@/types/section.types.ts';

function Section({ section }: { section: SectionType }) {
  let content = <></>;

  if (section.id === 'experience' && section.content.every((item) => 'description' in item)) {
    // Cast as ExperienceContent[] for Timeline
    content = <Timeline content={section.content as ExperienceContent[]} />;
  } else if (section.id === 'skills' && section.content.every((item) => 'text' in item)) {
    // Cast as SkillsContent[] for Skill
    content = <Skill content={section.content as SkillsContent[]} />;
  }

  return (
    <section className="flex w-full flex-col items-center gap-9 rounded-[100px] border-t border-[#1B1B1B] px-4 pt-8 md:px-8">
      <h3 className="size-fit rounded-[100px] border-t border-grey1 bg-black2 px-7 py-2 md:mr-auto">{section.title}</h3>
      {content}
    </section>
  );
}

export default Section;
