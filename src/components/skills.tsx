import { faCss3, faGit, faGithub, faHtml5, faJs, faNodeJs, faReact, faSass } from '@fortawesome/free-brands-svg-icons';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card.tsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SkillContent } from '@/types/skills.types.ts';

// Mapping des noms d'icônes aux icônes FontAwesome
export const iconMapping = {
  faHtml5: faHtml5,
  faCss3: faCss3,
  faJs: faJs,
  faReact: faReact,
  faSass: faSass,
  faNodeJs: faNodeJs,
  faGit: faGit,
  faGithub: faGithub,
};

function Skills({ content }: { content: SkillContent[] }) {
  return (
    <div className="grid w-fit grid-cols-1 gap-9 xl:grid-cols-2 xl:items-stretch xl:justify-around">
      {content.map((skill, index) => (
        <Card
          key={index}
          className="flex w-full flex-col rounded-[24px] border-x-0 border-b-0 border-t border-t-white bg-black2 xl:mx-0"
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
              <FontAwesomeIcon key={logoIndex} icon={iconMapping[logo]} className="text-3xl text-white" />
            ))}
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}

export default Skills;
