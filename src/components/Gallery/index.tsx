import { galleryType } from '@/types/gallery.types';

function Gallery({ title, content }: galleryType) {
  return (
    <section className="flex w-full flex-col justify-between gap-9 rounded-[100px] border-t border-[#1B1B1B] px-4 pt-8 md:px-8 xl:flex-row">
      <h3 className="size-fit rounded-[100px] border-t border-grey1 bg-black2 px-7 py-2">{title}</h3>
      <div className="flex flex-col gap-3.5 xl:w-1/2">
        {content.map((item) => (
          <div key={item.title}>
            <p>{item.title}</p>
            <ul>
              {item.tags.map((tag) => (
                <li key={tag}>
                  <p>{tag}</p>
                </li>
              ))}
            </ul>
            <img src={item.image} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Gallery;
