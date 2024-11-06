import { faCss3, faGit, faGithub, faHtml5, faJs, faNodeJs, faReact, faSass } from '@fortawesome/free-brands-svg-icons';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card.tsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SkillContent } from '@/types/section.types.ts';
import { useState } from 'react';
import { IconMapping } from '@/types/skills.types.ts';

export const iconMapping: IconMapping = {
  faHtml5: { icon: faHtml5, color: 'text-[#E44D26]' },
  faCss3: { icon: faCss3, color: 'text-[#264DE4]' },
  faJs: { icon: faJs, color: 'text-[#F7DF1E]' },
  faReact: { icon: faReact, color: 'text-[#61DAFB]' },
  faSass: { icon: faSass, color: 'text-[#CC6699]' },
  faNodeJs: { icon: faNodeJs, color: 'text-[#339933]' },
  faGit: { icon: faGit, color: 'text-[#F1502F]' },
  faGithub: { icon: faGithub, color: 'text-[#2DBA4E]' },
};

function Skills({ content }: { content: SkillContent[] }) {
  const [hoveredLogo, setHoveredLogo] = useState<string | null>(null);

  const renderLogos = (logos: { name: string; title: string }[]) => (
    logos.map((logo, index) => (
      <div
        key={index}
        onMouseEnter={() => setHoveredLogo(logo.name)}
        onMouseLeave={() => setHoveredLogo(null)}
        className="flex flex-col items-center"
      >
        <FontAwesomeIcon
          icon={iconMapping[logo.name].icon}
          className={`text-4xl transition-colors xl:text-5xl ${
            hoveredLogo === logo.name ? iconMapping[logo.name].color : 'text-white'
          }`}
        />
        <p className="text-xs xl:text-sm">{logo.title}</p>
      </div>
    ))
  );

  return (
    <div className="flex flex-col gap-9">
      <div className="mx-auto flex w-full flex-wrap justify-center gap-4 rounded-[24px] border-t bg-black2 p-8 md:w-fit xl:w-full">
        {renderLogos(content.flatMap(skill => skill.logos))}
      </div>
      <div className="grid w-fit grid-cols-1 gap-9 xl:grid-cols-2 xl:items-stretch xl:justify-around">
        {content.map((skill, index) => (
          <Card
            key={index}
            className="flex w-full flex-col rounded-[24px] border-x-0 border-b-0 border-t bg-black2 xl:mx-0"
          >
            <CardHeader className="text-center">
              <CardTitle className="text-lg">{skill.title}</CardTitle>
            </CardHeader>
            <CardContent className="mx-auto w-full text-sm text-white md:w-3/5 xl:w-fit">
              <ul className="flex list-inside list-disc flex-col gap-2">
                {skill.text.map((sentence, sentenceIndex) => (
                  <li key={sentenceIndex}>{sentence}</li>
                ))}
              </ul>
            </CardContent>
            <CardFooter className="mt-auto flex justify-center gap-4">
              {skill.logos.map((logo, logoIndex) => (
                <FontAwesomeIcon key={logoIndex} icon={iconMapping[logo.name].icon} className="text-3xl text-white" />
              ))}
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Skills;
