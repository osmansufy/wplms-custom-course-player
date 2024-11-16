import { useEffect, useState } from "@wordpress/element";
import { fetchCourseReview } from "../utilities/apiCall";
// Progress milestones for review popup
const REVIEW_MILESTONES = [15, 50, 100];
// Custom hook to manage review state and auto-popup logic
const useReviewSystem = (progress: number, courseId?: number) => {
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const [hasReview, setHasReview] = useState(false);
  const [lastShownMilestone, setLastShownMilestone] = useState<number>(0);

  // Check if user has already reviewed
  useEffect(() => {
    const checkReviewStatus = async () => {
      if (!courseId) return;

      try {
        const token = (window as any).wplmsCustomCoursePlayer?.token;
        const response = await fetchCourseReview({ courseId, token });
        setHasReview(!!response?.comment_ID);
      } catch (error) {
        console.error("Error checking review status:", error);
      }
    };

    checkReviewStatus();
  }, [courseId]);

  // Handle auto-popup at milestones
  useEffect(() => {
    if (hasReview) return;

    const milestone = REVIEW_MILESTONES.find(
      (milestone) => progress >= milestone && lastShownMilestone < milestone
    );

    if (milestone) {
      setIsReviewModalOpen(true);
      setLastShownMilestone(milestone);
    }
  }, [progress, hasReview, lastShownMilestone]);

  return {
    isReviewModalOpen,
    setIsReviewModalOpen,
    hasReview,
    setHasReview,
  };
};

export default useReviewSystem;
