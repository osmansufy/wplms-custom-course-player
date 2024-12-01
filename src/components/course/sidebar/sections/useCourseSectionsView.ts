import { useState, useEffect } from "@wordpress/element";
import { useDispatch } from "@wordpress/data";
import { useTypedSelect } from "../../../../store";
import { useCourseSections } from "../../../../hooks/useCourseSections";
import { REVIEW_MILESTONES } from "../../../../utilities/const";

export function useCourseSectionsView() {
  const [lastShownMilestone, setLastShownMilestone] = useState<number>(0);
  const { setReviewModalOpen, finishCourse } = useDispatch(
    "custom-course-player"
  );

  const { sections, expandedSections, toggleSection, getSectionStats } =
    useCourseSections();

  const courseId = useTypedSelect((select) => select.getCourseId(), []);

  const { progress, isCompleted, completionMessage } = useTypedSelect(
    (select) => ({
      progress: select.getProgress(),
      isCompleted: select.isCourseCompleted(),
      completionMessage: select.getCompletionMessage(),
    }),
    [courseId]
  );

  const { hasReview } = useTypedSelect(
    (select) => {
      if (courseId) {
        return {
          hasReview: select.hasReview(),
          reviewLoading: select.isLoadingReview(courseId),
        };
      }
      return { hasReview: false, reviewLoading: true };
    },
    [courseId]
  );

  const onHandleReviewModalOpen = () => {
    if (hasReview) {
      return;
    }
    const milestone = REVIEW_MILESTONES.find(
      (milestone) => progress >= milestone && lastShownMilestone < milestone
    );

    if (milestone) {
      setReviewModalOpen(true);
      setLastShownMilestone(milestone);
    }
  };

  useEffect(() => {
    if (!hasReview && courseId) {
      onHandleReviewModalOpen();
    } else {
      setReviewModalOpen(false);
    }
  }, [progress, hasReview, courseId]);

  const handleFinishCourse = async () => {
    if (courseId) {
      await finishCourse(courseId);
    }
  };

  return {
    sections,
    expandedSections,
    toggleSection,
    getSectionStats,
    isCompleted,
    completionMessage,
    handleFinishCourse,
  };
}
