import { IUnit } from "../../../types/course";

export interface SidebarProps {
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
  item: IUnit;
  isExpanded: boolean;
  onToggle: () => void;
  children?: React.ReactNode;
}

export interface UnitItemProps {
  unit: IUnit;
}
