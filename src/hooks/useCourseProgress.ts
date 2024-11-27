// hooks/useCourseProgress.ts
import { useMemo, useCallback } from "react";
import { CourseItem } from "../types/course";
import { useSelect } from "@wordpress/data";

interface ProgressStats {
  courseTotalDuration: number | null;
  progress: number;
  onCompleteUnit: (unitId: number) => number;
  formatDuration: (seconds: number) => string;
}

export const useCourseProgress = (items: CourseItem[]): ProgressStats => {
  // Calculate current progress based on completed units' duration
  const { progress, courseTotalDuration } = useSelect(
    (select) => ({
      progress: select("custom-course-player").getProgress(),
      courseTotalDuration: select(
        "custom-course-player"
      ).getCourseTotalDuration(),
    }),
    []
  );

  // Calculate progress if any unit is completed with unit id

  const onCompleteUnit = useCallback(
    (unitId: number) => {
      const unit = items.find((item) => item.id === unitId);
      if (unit && unit.duration && courseTotalDuration) {
        return Math.round(
          ((progress + unit.duration) / courseTotalDuration) * 100
        );
      }
      return progress;
    },
    [items, courseTotalDuration, progress]
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
    courseTotalDuration,
    progress,
    onCompleteUnit,
    formatDuration,
  };
};
