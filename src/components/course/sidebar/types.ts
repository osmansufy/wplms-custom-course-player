import { ICourse, CourseItem } from "../../../types/course";

export interface SidebarProps {
  course: ICourse;
  currentUnitId: number | null;
  onSelectUnit: (id: number) => void;
  onCompleteUnit: (id: number) => void;
  isOpen: boolean;
  onToggle: () => void;
}

export interface SidebarHeaderProps {
  title: string;
  onToggle: () => void;
}

export interface SidebarProgressProps {
  totalLectures: number;
  totalDuration: string;
  completedLectures: number;
}

export interface SectionItemProps {
  item: CourseItem;
  isExpanded: boolean;
  onToggle: () => void;
  children?: React.ReactNode;
}

export interface UnitItemProps {
  item: CourseItem;
  currentUnitId: number | null;
  onSelectUnit: (id: number) => void;
  onCompleteUnit: (id: number) => void;
}
