export interface galleryType {
  title: string;
  content: {
    id: number;
    title: string;
    tags: string[];
    image: string;
    context: string;
    description: string;
    issues: string;
    skills: string[];
    githubLink?: string;
    previewLink?: string;
  }[];
}
