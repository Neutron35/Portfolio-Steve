import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCss3, faGit, faGithub, faHtml5, faJs, faNodeJs, faReact, faSass } from '@fortawesome/free-brands-svg-icons';
import { bannerData, experienceData, skillsData } from '@/data/aboutData';

import Banner from '@/components/banner';

// Définir un type pour les icônes disponibles
type IconName = 'faHtml5' | 'faCss3' | 'faJs' | 'faReact' | 'faSass' | 'faNodeJs' | 'faGit' | 'faGithub';

function About() {
  const { title } = bannerData;

  const iconMapping: Record<IconName, any> = {
    faHtml5: faHtml5,
    faCss3: faCss3,
    faJs: faJs,
    faReact: faReact,
    faSass: faSass,
    faNodeJs: faNodeJs,
    faGit: faGit,
    faGithub: faGithub,
  };

  return (
    <div className="flex w-full flex-col gap-24">
      <Banner title={title} />

      <section className="flex w-full flex-col items-center justify-between gap-9 rounded-[100px] border-t border-[#1B1B1B] px-4 pt-8 md:items-start md:px-8 xl:flex-row">
        <h3 className="size-fit rounded-[100px] border-t border-grey1 bg-black2 px-7 py-2">{experienceData.title}</h3>
        <div className="flex flex-col gap-3.5 xl:w-1/2">
          {experienceData.content.map((item, index) => (
            <div key={index}>
              <p className="font-bold underline">{item.title}</p>
              <p>{item.org}</p>
              <p>{item.date}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="flex w-full flex-col items-center justify-between gap-9 rounded-[100px] border-t border-[#1B1B1B] px-4 pt-8 md:items-start md:px-8 xl:flex-row">
        <h3 className="size-fit rounded-[100px] border-t border-grey1 bg-black2 px-7 py-2">{skillsData.title}</h3>
        <div className="flex flex-col gap-8 xl:w-1/2">
          {skillsData.content.map((item, index) => (
            <div key={index} className="">
              <p className="font-bold underline">{item.title}</p>
              <p>{item.text}</p>
              <div className="flex justify-center gap-2 pt-2 text-2xl">
                {item.logos.map((logo, logoIndex) => (
                  <FontAwesomeIcon key={logoIndex} icon={iconMapping[logo as IconName]} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default About;
