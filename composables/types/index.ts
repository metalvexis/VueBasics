export interface TLineNode {
  title: string;
  subtitle: string;
  description: string;
  startDate: Date | string;
  endDate: Date | string;
  techStack: string[];
  position: "left" | "right";
}
