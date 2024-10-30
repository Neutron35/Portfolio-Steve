import { iconMapping } from '@/components/skills.tsx';

export type SkillContent = {
  title: string;
  text: string[];
  logos: (keyof typeof iconMapping)[];
};
