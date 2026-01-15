// src/types/index.ts

export interface Stat {
  label: string;
  value: string;
}

export interface Project {
  id: string;
  slug?: string;
  title: string;
  description: string;
  tech: string[];
  link: string;
  github?: string;
  category?: string;   // Used in ProjectCard
  stats?: Stat[];
}

export interface Signal {
  id: string;
  slug?: string;
  title: string;
  description: string;
  summary?: string;    // Used in SignalCard
  link: string;
  date: string;
  tags: string[];
  category?: string;   // Used in SignalCard
  readTime?: string;
}
