import { TimelineItem } from './timeline.types';
import { SkillContent } from './skills.types.ts';

export type ExperienceContent = TimelineItem;
export type SkillsContent = SkillContent;

export type SectionType = {
  id: 'experience' | 'skills';
  title: string;
  content: ExperienceContent[] | SkillsContent[];
};
