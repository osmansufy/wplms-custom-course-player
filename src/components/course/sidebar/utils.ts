import { CourseItem } from "../../../types/course";

export const calculateTotalLectures = (items: CourseItem[]): number => {
  return items.filter((item) => item.type !== "section").length;
};

export const calculateTotalDuration = (items: CourseItem[]): string => {
  const totalSeconds = items.reduce(
    (acc, item) => acc + (item.duration || 0),
    0
  );
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  return `${hours}hr ${minutes}min`;
};
