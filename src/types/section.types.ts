// types/section.types.ts

export type ExperienceContent = {
  title: string;
  description: string;
  projectsList: string[];
};

export type SkillLogo = 'faHtml5' | 'faCss3' | 'faJs' | 'faReact' | 'faSass' | 'faNodeJs' | 'faGit' | 'faGithub';

export type SkillsContent = {
  title: string;
  text: string[];
  logos: SkillLogo[]; // Changez ici pour utiliser SkillLogo[]
};

// Vous pouvez également définir SectionType ici si ce n'est pas déjà fait.
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
