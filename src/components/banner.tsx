import { Badge } from './ui/badge';
import LinkArrow from './linkarrow';
import { bannerType } from '@/types/banner.types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';
import { NavLink, useParams } from 'react-router-dom';
import { projectsData } from '@/data/projectsData.tsx';

function Banner({ title, content, tag, link, allowNav }: bannerType) {
  const { projectId } = useParams();
  const numericProjectId = projectId ? parseInt(projectId, 10) : undefined;
  const { ref, isVisible } = useIntersectionObserver();

  const nextProject = numericProjectId !== undefined ? (numericProjectId + 1) % projectsData.length : 0;
  const prevProject =
    numericProjectId !== undefined
      ? (numericProjectId - 1 + projectsData.length) % projectsData.length
      : projectsData.length - 1;

  return (
    <section className="flex w-full flex-col items-center gap-5 pt-9 md:pt-24">
      {tag && (
        <Badge variant="default" className="justify-center rounded-[100px] bg-black2 px-7 py-2.5 text-white">
          <h3>{tag}</h3>
        </Badge>
      )}
      {allowNav ? (
        <div
          className={`flex w-full items-center justify-between px-7 transition-opacity delay-200 duration-[800ms] ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
        >
          <NavLink to={`/project/${prevProject}`} className="text-xl md:text-4xl xl:text-6xl">
            <FontAwesomeIcon icon={faArrowLeft} />
          </NavLink>
          <h1>{title}</h1>
          <NavLink to={`/project/${nextProject}`} className="text-xl md:text-4xl xl:text-6xl">
            <FontAwesomeIcon icon={faArrowRight} />
          </NavLink>
        </div>
      ) : (
        <h1
          className={`transition-opacity delay-200 duration-[800ms] ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
        >
          {title}
        </h1>
      )}
      <p
        ref={ref}
        className={`w-full text-center transition-opacity delay-[400ms] duration-[800ms] md:w-3/5 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
      >
        {content}
      </p>
      {link && <LinkArrow linkto="/" text={link} />}
    </section>
  );
}

export default Banner;
