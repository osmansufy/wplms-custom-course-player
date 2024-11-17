// hooks/useCourseProgress.ts
import { useMemo, useCallback } from "react";
import { CourseItem } from "../types/course";

interface ProgressStats {
  totalDuration: number;
  completedDuration: number;
  currentProgress: number;
  totalUnits: number;
  completedUnits: number;
  onCompleteUnit: (unitId: number) => number;
  formatDuration: (seconds: number) => string;
}

export const useCourseProgress = (items: CourseItem[]): ProgressStats => {
  // Calculate current progress based on completed units' duration
  const {
    totalDuration,
    completedDuration,
    totalUnits,
    completedUnits,
    currentProgress,
  } = useMemo(() => {
    const units = items.filter((item) => item.type === "unit");
    const total = units.reduce((sum, unit) => sum + (unit.duration || 0), 0);
    const completed = units
      .filter((unit) => unit.status === 1)
      .reduce((sum, unit) => sum + (unit.duration || 0), 0);

    return {
      totalDuration: total,
      completedDuration: completed,
      totalUnits: units.length,
      completedUnits: units.filter((unit) => unit.status === 1).length,
      currentProgress: total > 0 ? Math.round((completed / total) * 100) : 0,
    };
  }, [items]);

  // Calculate progress if any unit is completed with unit id

  const onCompleteUnit = useCallback(
    (unitId: number) => {
      const unit = items.find((item) => item.id === unitId);
      if (unit && unit.duration) {
        return Math.round(
          ((completedDuration + unit.duration) / totalDuration) * 100
        );
      }
      return currentProgress;
    },
    [items, completedDuration, totalDuration, currentProgress]
  );

  // Format duration helper function
  const formatDuration = useCallback((seconds: number): string => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);

    if (hours > 0) {
      return `${hours}h ${minutes}m`;
    }
    return `${minutes}m`;
  }, []);

  return {
    totalDuration,
    completedDuration,
    currentProgress,
    totalUnits,
    completedUnits,
    onCompleteUnit,
    formatDuration,
  };
};
