import { useEffect, useState } from "@wordpress/element";
import { REVIEW_MILESTONES } from "../../utilities/const";
// Progress milestones for review popup
// Custom hook to manage review state and auto-popup logic
const useReviewSystem = (progress: number, courseId?: number) => {
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const [hasReview, setHasReview] = useState(false);
  const [lastShownMilestone, setLastShownMilestone] = useState<number>(0);
  const [loading, setLoading] = useState(false);

  // Handle auto-popup at milestones
  useEffect(() => {
    if (hasReview || loading) return;

    const milestone = REVIEW_MILESTONES.find(
      (milestone) => progress >= milestone && lastShownMilestone < milestone
    );

    if (milestone) {
      setIsReviewModalOpen(true);
      setLastShownMilestone(milestone);
    }
  }, [progress, hasReview, lastShownMilestone, loading]);

  return {
    isReviewModalOpen,
    setIsReviewModalOpen,
    hasReview,
    setHasReview,
    loading,
  };
};

export default useReviewSystem;
