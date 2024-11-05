export interface ProjectBase {
  id: number;
  title: string;
  tags: string[];
  context: string;
  role: string;
  date: string;
  description: string;
  issues: { title: string; desc: string[]; solutions: string[] }[];
  skills: string[];
  githubLink?: string;
  previewLink?: string;
}
