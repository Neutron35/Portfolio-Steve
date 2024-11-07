export interface CollapseProps {
  title: string;
  desc: string[];
  solutions: string[];
}

export interface bannerType {
  title: string;
  content?: string;
  tag?: string;
  link?: string;
  allowNav?: boolean;
}

export interface linkarrowType {
  linkto: string;
  text: string;
  className?: string;
}

export interface navbarType {
  visible: boolean;
}

export interface navLinksType {
  position: string;
}
