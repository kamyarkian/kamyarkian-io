// src/types/index.ts

export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  link: string;
  github?: string;
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
