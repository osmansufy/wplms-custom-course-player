import { useState } from "react";
import { useUnitContent } from "./useUnitContent";
import { useDispatch } from "@wordpress/data";

export const useContentArea = (isSidebarOpen: boolean) => {
  const { unitContent, loading, error, isLastUnit, isFirstUnit } =
    useUnitContent();
  const [isHovering, setIsHovering] = useState(false);
  const { setPreviousUnit, setNextUnit } = useDispatch("custom-course-player");

  const handlePrevious = () => {
    setPreviousUnit();
  };

  const handleNext = () => {
    setNextUnit();
  };

  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => setIsHovering(false);

  const handleRetry = () => window.location.reload();

  return {
    // State
    unitContent,
    loading,
    error,
    isLastUnit,
    isFirstUnit,
    isHovering,
    isSidebarOpen,

    // Methods
    handlePrevious,
    handleNext,
    handleMouseEnter,
    handleMouseLeave,
    handleRetry,
  };
};
