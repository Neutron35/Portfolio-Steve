export interface ProjectBase {
  id: number;
  title: string;
  tags: string[];
  images: Images;
  context: string;
  role: string;
  date: string;
  description: string;
  issues: { title: string; desc: string[]; solutions: string[] }[];
  skills: string[];
  githubLink?: string;
  previewLink?: string;
}

export interface Images {
  large: string;
  small: string;
}

export interface GalleryType {
  title: string;
  content: ProjectBase[];
}
