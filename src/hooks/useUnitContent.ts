import { useState, useEffect } from "react";
import { useSelect } from "@wordpress/data";
import { IUnitItem } from "../types/course";
import { fetchUnitContent } from "../utilities/apiCall";
const userAuthToken = (window as any).wplmsCustomCoursePlayer.token;
export const useUnitContent = (
  courseId: number | string,
  unitId: number | null
) => {
  const [unitContent, setUnitContent] = useState<IUnitItem | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchContent = async () => {
      if (!unitId) {
        setUnitContent(null);
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        const data = await fetchUnitContent({
          courseId,
          unitId,
          token: userAuthToken,
        });
        setUnitContent(data ?? null);
        setError(null);
      } catch (err) {
        setError("Failed to fetch unit content");
        setUnitContent(null);
      } finally {
        setLoading(false);
      }
    };

    if (userAuthToken) {
      fetchContent();
    }
  }, [courseId, unitId, userAuthToken]);

  return { unitContent, loading, error };
};
