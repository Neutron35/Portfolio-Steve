import { Badge } from './ui/badge';
import Linkarrow from './linkarrow';
import { bannerType } from '@/types/banner.types';

function Banner({ title, content, tag, link }: bannerType) {
  return (
    <section className="flex w-full flex-col items-center gap-5 pt-9 md:pt-24">
      {tag && (
        <Badge
          variant="default"
          className="justify-center rounded-[100px] border-t-grey1 bg-black2 px-7 py-2.5 text-white"
        >
          <h3>{tag}</h3>
        </Badge>
      )}
      <h1>{title}</h1>
      <p className="w-full text-center md:w-[464px]">{content}</p>
      {link && <Linkarrow linkto="/" text={link} />}
    </section>
  );
}

export default Banner;
