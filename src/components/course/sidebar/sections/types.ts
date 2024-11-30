export interface CourseSection {
  key: string;
  title: string;
  units: Unit[];
}

export interface Unit {
  id: number;
  // Add other unit properties
}

export interface SectionStats {
  completedUnits: number;
  totalUnits: number;
  totalDuration: number;
  isComplete: boolean;
}
