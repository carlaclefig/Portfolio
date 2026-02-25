export interface Technology {
  name: string;
  imageIcon: string;
  color: string;
  description: string;
}

export interface Project {
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  features: string[];
  technologies: Technology[];
  demoUrl?: string;
  githubUrl: string;
  imageUrl?: string;
}

export const projects: Project[] = [];

export function getAllProjects(): Project[] {
  return projects;
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
