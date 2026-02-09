export interface Publication {
  id: string;
  title: string;
  authors: string[];
  venue: string;
  year: number;
  type: "conference" | "journal" | "preprint" | "patent";
  url?: string;
  pdf?: string;
  code?: string;
  bibtex?: string;
  tags?: string[];
}

export interface ResearchPillar {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  projects: Project[];
  color: "blue" | "purple" | "emerald";
}

export interface Project {
  id: string;
  title: string;
  description: string;
  impact: string;
  technologies: string[];
  url?: string;
}

export interface ImpactMetric {
  id: string;
  label: string;
  value: string;
  description: string;
  icon?: string;
  trend?: "up" | "down" | "neutral";
  size?: "small" | "medium" | "large";
}
