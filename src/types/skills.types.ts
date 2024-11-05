import { iconMapping } from '@/components/skills.tsx';
import { IconDefinition } from '@fortawesome/free-brands-svg-icons';

export interface IconMapping {
  [key: string]: {
    icon: IconDefinition;
    color: string;
  };
}

export type SkillContent = {
  title: string;
  text: string[];
  logos: (keyof typeof iconMapping)[];
};
