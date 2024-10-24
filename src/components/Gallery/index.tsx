import Card from '../Card';
import { galleryType } from '@/types/gallery.types';

function Gallery({ title, content }: galleryType) {
  return (
    <section className="flex w-full flex-col items-center justify-between gap-9 rounded-[100px] border-t border-[#1B1B1B] px-4 pt-8 md:items-start md:px-8">
      <h3 className="size-fit rounded-[100px] border-t border-grey1 bg-black2 px-7 py-2">{title}</h3>
      <div className="flex flex-col gap-3.5 xl:w-1/2">
        {content.map((item) => (
          <Card key={item.title} content={item} />
        ))}
      </div>
    </section>
  );
}

export default Gallery;
