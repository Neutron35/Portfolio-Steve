import ProjectCard from './projectCard.tsx';
import { GalleryType } from '@/types/project.types.ts';

// Composant Gallery affichant une collection de projets sous forme de cartes
function Gallery({ title, content }: GalleryType) {
  return (
    <section className="mt-20 flex w-full flex-col items-center justify-between gap-9 rounded-[100px] border-t border-[#1B1B1B] px-4 pt-8 md:items-start md:px-8">
      <div className="title3 relief-tag px-7 py-2">{title}</div>
      {/* Grille de cartes de projets */}
      <div className="grid grid-cols-1 gap-5 xl:grid-cols-2">
        {content.map((item) => (
          <ProjectCard key={item.id} content={item} />
        ))}
      </div>
    </section>
  );
}

export default Gallery;
