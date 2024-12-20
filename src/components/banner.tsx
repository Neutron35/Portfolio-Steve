import { Badge } from './ui/badge';
import LinkArrow from './linkarrow';
import { bannerType } from '@/types/ui.types.ts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';
import { NavLink, useParams } from 'react-router-dom';
import { projectsData } from '@/data/projectsData.tsx';

// Composant Banner affichant le titre, le contenu, un tag optionnel et des options de navigation
function Banner({ title, content, tag, link, allowNav }: bannerType) {
  const { projectId } = useParams();
  const numericProjectId = projectId ? parseInt(projectId, 10) : undefined;
  const { ref, isVisible } = useIntersectionObserver();

  // Calcul des indices pour le projet suivant et précédent
  const nextProject = numericProjectId !== undefined ? (numericProjectId + 1) % projectsData.length : 0;
  const prevProject =
    numericProjectId !== undefined
      ? (numericProjectId - 1 + projectsData.length) % projectsData.length
      : projectsData.length - 1;

  return (
    <section className="flex w-full flex-col items-center gap-5 pt-9 md:pt-24">
      {/* Affichage du tag si présent */}
      {tag && (
        <Badge variant="default" className="justify-center rounded-[100px] bg-black2 px-7 py-2.5 text-white">
          <div className="title3">{tag}</div>
        </Badge>
      )}
      {/* Options de navigation conditionnelles */}
      {allowNav ? (
        <div
          className={`flex w-full items-center justify-between px-7 transition-opacity delay-200 duration-[800ms] ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
        >
          <NavLink
            to={`/project/${prevProject}`}
            className="text-xl md:text-4xl xl:text-6xl"
            aria-label={`Aller au projet précédent : ${projectsData[prevProject].title}`}
          >
            <FontAwesomeIcon icon={faArrowLeft} />
          </NavLink>
          <h2 className="title1">{title}</h2>
          <NavLink
            to={`/project/${nextProject}`}
            className="text-xl md:text-4xl xl:text-6xl"
            aria-label={`Aller au projet suivant : ${projectsData[nextProject].title}`}
          >
            <FontAwesomeIcon icon={faArrowRight} />
          </NavLink>
        </div>
      ) : (
        <h2
          className={`title1 transition-opacity delay-200 duration-[800ms] ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
        >
          {title}
        </h2>
      )}
      {/* Affichage du contenu avec animation d'apparition */}
      <p
        ref={ref}
        className={`w-full text-center transition-opacity delay-[400ms] duration-[800ms] md:w-3/5 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
      >
        {content}
      </p>
      {/* Affichage du lien si présent */}
      {link && <LinkArrow linkto="/" text={link} />}
    </section>
  );
}

export default Banner;
