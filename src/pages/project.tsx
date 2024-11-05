import { Link, useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { projectsData } from '@/data/projectsData.tsx';
import Banner from '@/components/banner.tsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

function Project() {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const [idFound, setIdFound] = useState(false);

  const numericProjectId = projectId ? parseInt(projectId, 10) : undefined;
  const projectData = projectsData.find((project) => project.id === numericProjectId);

  useEffect(() => {
    if (projectData !== undefined) {
      setIdFound(true);
    } else {
      setIdFound(false);
      navigate('/notfound', { replace: true });
    }
  }, [projectData, navigate]);

  if (idFound && projectData) {
    const { title, tags, role, date, context, image, description, issues, skills, githubLink, previewLink } =
      projectData;

    return (
      <div className="flex flex-col gap-14 md:gap-24">
        <Banner title={title} content={context} allowNav={true} />
        <section className="flex flex-col gap-16">
          <div className="h-[400px] w-full overflow-hidden rounded-[24px] md:h-[500px] xl:h-[800px]">
            {previewLink ? (
              <iframe
                src={previewLink}
                className="size-full bg-white"
                sandbox="allow-scripts allow-modals"
                loading="lazy"
              ></iframe>
            ) : (
              <img src={image} alt={title} />
            )}
          </div>
          <div className="flex w-full flex-col items-center justify-between gap-16 xl:flex-row xl:items-start xl:gap-0">
            <div className="flex w-full flex-col gap-5 xl:w-fit">
              <h3 className="size-fit rounded-[100px] border-t border-grey1 bg-black2 px-7 py-2">Details</h3>
              <div className="alt-style flex flex-col gap-3.5">
                <div className="flex items-center gap-3.5">
                  Role : <div className="tag">{role}</div>
                </div>
                <div className="flex items-center gap-3.5">
                  Services :
                  <div className="flex gap-1">
                    {tags.map((tag, index) => (
                      <div key={index} className="tag">
                        {tag}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex items-center gap-3.5">
                  Date : <div className="tag">{date}</div>
                </div>
              </div>
            </div>
            <div className="flex w-full flex-col gap-16 xl:w-3/5">
              <div className="flex flex-col gap-4">
                <h3 className="size-fit rounded-[100px] border-t border-grey1 bg-black2 px-7 py-2">Description</h3>
                <p>{description}</p>
              </div>
              <div className="flex flex-col gap-4">
                <h3 className="size-fit rounded-[100px] border-t border-grey1 bg-black2 px-7 py-2">Problématiques</h3>
                <p>{issues}</p>
              </div>
              <div className="flex flex-col gap-4">
                <h3 className="size-fit rounded-[100px] border-t border-grey1 bg-black2 px-7 py-2">Compétences</h3>
                <ul className="list-inside list-disc">
                  {skills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                  ))}
                </ul>
              </div>
              {(githubLink || previewLink) && (
                <div className="flex flex-col gap-4">
                  <h3 className="size-fit rounded-[100px] border-t border-grey1 bg-black2 px-7 py-2">Liens</h3>
                  <ul className="underline">
                    {githubLink && (
                      <li>
                        <Link to={githubLink} target="_blank">
                          <FontAwesomeIcon icon={faGithub} className="mr-1" />
                          Code source
                        </Link>
                      </li>
                    )}
                    {previewLink && (
                      <li>
                        <Link to={previewLink} target="_blank">
                          Prévisualisation
                        </Link>
                      </li>
                    )}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </section>
      </div>
    );
  }

  return null;
}

export default Project;
