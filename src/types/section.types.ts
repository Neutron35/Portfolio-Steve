export type ExperienceContent = {
  title: string;
  description: string;
  projectsList: string[];
};

export type SkillLogo = {
  name: 'faHtml5' | 'faCss3' | 'faJs' | 'faReact' | 'faSass' | 'faNodeJs' | 'faGit' | 'faGithub';
  title: string;
  color: string;
};

export type SkillContent = {
  title: string;
  text: string[];
  logos: SkillLogo[];
};

export type SkillsContent = SkillContent;

export type SectionType =
  | {
      id: 'experience';
      title: string;
      content: ExperienceContent[];
    }
  | {
      id: 'skills';
      title: string;
      content: SkillsContent[];
    };
