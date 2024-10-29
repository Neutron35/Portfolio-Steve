import { Badge } from './ui/badge';
import Linkarrow from './linkarrow';
import { bannerType } from '@/types/banner.types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { NavLink, useParams } from 'react-router-dom';
import { projectsData } from '@/data/projectsData.tsx';

function Banner({ title, content, tag, link, allowNav }: bannerType) {
  const { projectId } = useParams();
  const numericProjectId = projectId ? parseInt(projectId, 10) : undefined;

  const nextProject = numericProjectId === projectsData.length - 1 ? 0 : numericProjectId + 1;

  const prevProject = numericProjectId === 0 ? projectsData.length - 1 : numericProjectId - 1;

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
      {allowNav ? (
        <div className="flex w-full items-center justify-between px-7">
          <NavLink to={`/project/${prevProject}`} className="text-3xl">
            <FontAwesomeIcon icon={faArrowLeft} />
          </NavLink>
          <h1>{title}</h1>
          <NavLink to={`/project/${nextProject}`} className="text-3xl">
            <FontAwesomeIcon icon={faArrowRight} />
          </NavLink>
        </div>
      ) : (
        <h1>{title}</h1>
      )}
      <p className="w-full text-center md:w-3/5">{content}</p>
      {link && <Linkarrow linkto="/" text={link} />}
    </section>
  );
}

export default Banner;
