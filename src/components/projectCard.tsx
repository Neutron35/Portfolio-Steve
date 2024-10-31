import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { CardProps } from '@/types/card.types.ts';

function ProjectCard({ content }: CardProps) {
  const [hover, setHover] = useState(false);
  const { id, title, tags, image } = content;

  return (
    <NavLink to={`/project/${id}`}>
      <article
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className="flex flex-col gap-3.5 rounded-[24px] bg-black2 pb-5"
      >
        <div className="h-[400px] w-full overflow-hidden rounded-[24px] md:h-[600px]">
          <img src={image} alt={title} className={`transition-transform ${hover && 'scale-[1.07]'}`} />
        </div>
        <div className="flex items-start justify-center gap-2 px-5 md:items-end">
          <div className="flex w-full flex-col items-start gap-1">
            <h2>{title}</h2>
            <div className="flex flex-col gap-1 md:flex-row">
              {tags.map((tag, index) => (
                <Badge
                  variant="outline"
                  key={index}
                  className="alt-style justify-center rounded-[100px] px-3.5 py-1.5 text-white"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
          <Button
            className={`transition-transform ${hover && 'bg-white text-[#1c1c1c]'} h-fit rounded-[100px] border px-3.5 py-1.5 hover:bg-white`}
          >
            <FontAwesomeIcon icon={faArrowRight} className={`transition-transform ${hover && 'rotate-[-30deg]'}`} />
          </Button>
        </div>
      </article>
    </NavLink>
  );
}

export default ProjectCard;
