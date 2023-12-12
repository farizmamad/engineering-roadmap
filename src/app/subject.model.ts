export interface Subject {
  id: number;
  name: string;
  excerpt: string;
  roadmap: RoadmapItem[];
}

export interface RoadmapItem {
  title: string;
  contributors: string[];
  body: RoadmapBodyItem[];
}

export interface RoadmapBodyItem {
  subheader?: string;
  text: string;
  image?: string; // Image URL
}
