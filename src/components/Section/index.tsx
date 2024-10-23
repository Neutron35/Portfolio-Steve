import { SectionType } from '@/types/section.types';

function Section({ title, content }: SectionType) {
  return (
    <section className="flex w-full flex-col justify-between gap-9 rounded-[100px] border-t border-[#1B1B1B] px-4 pt-8 md:px-8 xl:flex-row">
      <h3 className="size-fit rounded-[100px] border-t border-grey1 bg-black2 px-7 py-2">{title}</h3>
      <div className="flex flex-col gap-3.5 xl:w-1/2">
        {content.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
    </section>
  );
}

export default Section;
