export interface cardType {
  id: number;
  title: string;
  tags: string[];
  image?: string;
  context: string;
  role: string;
  date: string;
  description: string;
  issues: string;
  skills: string[];
  githubLink?: string;
  previewLink?: string;
}

export interface CardProps {
  content: cardType;
}
