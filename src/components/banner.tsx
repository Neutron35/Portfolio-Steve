import { bannerType } from '@/types/banner.types';

function Banner({ title, content }: bannerType) {
  return (
    <section className="flex w-full flex-col items-center gap-5 pt-9 md:pt-24">
      <h1>{title}</h1>
      <p className="w-full text-center md:w-[464px]">{content}</p>
    </section>
  );
}

export default Banner;
