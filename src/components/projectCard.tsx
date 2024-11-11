import { Button } from './ui/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { memo, useMemo, useState } from 'react';
import { NavLink } from 'react-router-dom';
import getTailwindBreakpoints from '@/lib/tailwindBreakpoints';
import { ProjectBase } from '@/types/project.types.ts';

// Composant ProjectCard affichant un aperçu d'un projet avec image, titre, tags et bouton de navigation
const ProjectCard = memo(({ content }: { content: ProjectBase }) => {
  const { desktopBP, tabletBP } = getTailwindBreakpoints();

  const [hover, setHover] = useState(false);
  const { id, title, tags, images } = content;
  const { large, small } = images;

  // Définition des classes conditionnelles basées sur l'état de survol
  const classes = useMemo(
    () => ({
      hoverClass: hover ? 'scale-[1.07]' : '',
      buttonClass: `transition-transform ${hover ? 'bg-white text-[#1c1c1c]' : ''} h-fit rounded-[100px] border px-3.5 py-1.5 hover:bg-white`,
      iconClass: `transition-transform ${hover ? 'rotate-[-30deg]' : ''}`,
    }),
    [hover]
  );

  return (
    <NavLink to={`/project/${id}`}>
      <article
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className="flex flex-col gap-3.5 rounded-[24px] bg-black2 pb-5"
      >
        {/* Image de prévisualisation du projet */}
        <div className="h-[400px] max-h-fit w-full overflow-hidden rounded-[24px] md:h-[600px]">
          <img
            src={small}
            srcSet={`${large} 1200w, ${small} 720w`}
            sizes={`(min-width: ${desktopBP}px) 500px, (min-width: ${tabletBP}px) 1130px, 690px`}
            alt={`Aperçu de la page de ${title}`}
            className={`size-auto transition-transform ${classes.hoverClass}`}
          />
        </div>
        {/* Informations du projet avec tags et bouton */}
        <div className="flex items-start justify-center gap-2 px-5 md:items-end">
          <div className="flex w-full flex-col items-start gap-1">
            {/* Titre du projet */}
            <div className="title2">{title}</div>
            {/* Tags associés au projet */}
            <div className="flex flex-col gap-1 md:flex-row">
              {tags.map((tag, index) => (
                <div key={index} className="alt-style flat-tag justify-center px-3.5 py-1.5 text-xs">
                  {tag}
                </div>
              ))}
            </div>
          </div>
          {/* Bouton de navigation vers le projet */}
          <Button className={classes.buttonClass} aria-label={`Accéder au projet ${title}`}>
            <FontAwesomeIcon icon={faArrowRight} className={classes.iconClass} />
          </Button>
        </div>
      </article>
    </NavLink>
  );
});

export default ProjectCard;
