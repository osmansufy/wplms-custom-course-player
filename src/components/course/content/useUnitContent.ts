import { useState, useEffect } from "react";
import { useSelect } from "@wordpress/data";
import { IUnitItem } from "../../../types/course";
import { fetchUnitContent } from "../../../utilities/apiCall";
import { useTypedSelect } from "../../../store";
const userAuthToken = (window as any).wplmsCustomCoursePlayer.token;
export const useUnitContent = () => {
  const { courseId, currentUnit, allUnits } = useTypedSelect((select: any) => ({
    courseId: select.getCourseId(),
    currentUnit: select.getCurrentUnit(),
    allUnits: select.getAllUnits(),
  }));
  const [unitContent, setUnitContent] = useState<IUnitItem | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isLastUnit, setIsLastUnit] = useState(false);
  const [isFirstUnit, setIsFirstUnit] = useState(false);
  const fetchContent = async () => {
    setUnitContent(null);
    setLoading(false);
    try {
      if (!courseId || !currentUnit) {
        return;
      }
      setLoading(true);
      const data = await fetchUnitContent({
        courseId: courseId,
        unitId: currentUnit?.id,
        token: userAuthToken,
      });
      setUnitContent(data ?? null);
      setIsLastUnit(
        allUnits ? currentUnit?.id === allUnits[allUnits.length - 1].id : false
      );
      setIsFirstUnit(allUnits ? currentUnit?.id === allUnits[0].id : false);
      setError(null);
    } catch (err) {
      console.log(err);
      setError(err instanceof Error ? err.message : String(err));
      setUnitContent(null);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    if (userAuthToken && courseId && currentUnit) {
      fetchContent();
    }
  }, [courseId, currentUnit, userAuthToken]);

  return {
    unitContent,
    loading,
    error,
    isLastUnit,
    isFirstUnit,
  };
};
