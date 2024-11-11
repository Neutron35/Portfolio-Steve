import { Link, useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { projectsData } from '@/data/projectsData.tsx';
import Banner from '@/components/banner.tsx';
import getTailwindBreakpoints from '@/lib/tailwindBreakpoints.ts';
import Collapse from '@/components/collapse.tsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { Helmet } from 'react-helmet-async'; // Gestion du head du document

function Project() {
  const { tabletBP } = getTailwindBreakpoints();

  const { projectId } = useParams(); // Récupération de l'ID du projet depuis l'URL
  const navigate = useNavigate(); // Hook pour naviguer programmaticalement
  const [idFound, setIdFound] = useState(false); // État pour vérifier si l'ID est trouvé

  const numericProjectId = projectId ? parseInt(projectId, 10) : undefined; // Conversion de l'ID en nombre
  const projectData = projectsData.find((project) => project.id === numericProjectId); // Recherche des données du projet

  useEffect(() => {
    setIdFound(!!projectData); // Mise à jour de l'état si le projet est trouvé
    if (!projectData) {
      navigate('/notfound', { replace: true }); // Redirection si le projet n'existe pas
    }
  }, [projectData, navigate]);

  if (!idFound || !projectData) return null; // Affichage nul si l'ID n'est pas trouvé

  const { title, tags, role, date, context, images, description, issues, skills, githubLink, previewLink } =
    projectData; // Déstructuration des données du projet

  const { large, small } = images; // Images de différentes tailles

  return (
    <div className="">
      <Helmet>
        <title>{title} - Portfolio Steve Lieuron</title>
      </Helmet>
      <Banner title={title} content={context} allowNav={true} />
      <section className="mt-14 md:mt-24">
        <div className="h-[400px] w-full overflow-hidden rounded-[24px] md:h-[500px] xl:h-[800px]">
          <img
            src={small}
            srcSet={`${large} 1200w, ${small} 720w`} // Images responsives
            sizes={`(min-width: ${tabletBP}px) 1200px, 720px`}
            alt={`Aperçu de la page de ${title}`}
            className="min-h-full"
          />
        </div>
        <div className="mt-16 w-full">
          <h3 className="relief-tag px-7 py-2">Details</h3>
          <div className="alt-style mt-5">
            <div className="w-fit">
              Role : <div className="flat-tag ml-3.5 inline-block w-fit text-xs">{role}</div>
            </div>
            <div className="mt-3.5 w-fit">
              Détails :
              <div className="ml-2.5 inline-block">
                {tags.map((tag, index) => (
                  <div
                    key={index}
                    className="alt-style flat-tag ml-1 inline-block justify-center px-3.5 py-1.5 text-xs"
                  >
                    {tag}
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-3.5 w-fit">
              Date : <div className="flat-tag ml-3.5 inline-block w-fit text-xs">{date}</div>
            </div>
          </div>
        </div>
        <div className="mt-12 w-full">
          <h3 className="relief-tag px-7 py-2">Description</h3>
          <p className="mt-5">{description}</p>
        </div>
        <div className="mt-12 flex flex-col gap-4">
          <h3 className="relief-tag px-7 py-2">Problématiques</h3>
          <div className="flex w-full flex-col gap-3 md:max-w-max xl:w-full">
            {issues.map((issue, index) => (
              <Collapse key={index} title={issue.title} desc={issue.desc} solutions={issue.solutions} />
            ))}
          </div>
        </div>
        <div className="mt-12 w-full">
          <h3 className="relief-tag px-7 py-2">Compétences</h3>
          <ul className="mt-3.5 list-inside list-disc">
            {skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
        {(githubLink || previewLink) && (
          <div className="mt-12 w-full">
            <h3 className="relief-tag px-7 py-2">Liens</h3>
            <ul className="mt-3.5 underline">
              {githubLink && (
                <li>
                  <Link to={githubLink} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} className="mr-1" />
                    Code source
                  </Link>
                </li>
              )}
              {previewLink && (
                <li>
                  <Link to={previewLink} target="_blank" rel="noopener noreferrer">
                    Prévisualisation
                  </Link>
                </li>
              )}
            </ul>
          </div>
        )}
      </section>
    </div>
  );
}

export default Project;
