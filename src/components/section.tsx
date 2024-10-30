import Timeline from '@/components/timeline.tsx';
import Skill from '@/components/skill.tsx';

function Section({ section }) {
  let content = <></>;
  switch (section.id) {
    case 'experience':
      content = <Timeline content={section.content} />;
      break;
    case 'skills':
      content = <Skill content={section.content} />;
      break;
  }
  return (
    <section className="flex w-full flex-col items-center gap-9 rounded-[100px] border-t border-[#1B1B1B] px-4 pt-8 md:px-8">
      <h3 className="size-fit rounded-[100px] border-t border-grey1 bg-black2 px-7 py-2 md:mr-auto">{section.title}</h3>
      {content}
    </section>
  );
}

export default Section;
