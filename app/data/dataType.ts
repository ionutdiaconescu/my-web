export type OverviewItem = {
  title: string;
  description: string;
};

export type WorkProject = {
  title: string;
  description: string;
  usedTools: string[];
  images: string[];
  link?: string;
  githubLink?: string;
};
