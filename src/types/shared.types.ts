export interface ProjectBase {
  id: number;
  title: string;
  tags: string[];
  context: string;
  role: string;
  date: string;
  description: string;
  issues: string[];
  skills: string[];
  githubLink?: string;
  previewLink?: string;
}
