export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  link: string;
  github?: string;
  stats?: {
    label: string;
    value: string;
  }[];
}

export interface Signal {
  id: string;
  title: string;
  description: string;
  link: string;
  date: string;
  tags: string[];
  readTime?: string;
}
