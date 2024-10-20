import { useState, useEffect, useCallback, useMemo } from "react";
import { useDispatch, useSelect } from "@wordpress/data";
import { ICourse } from "../types/course";
import { fetchCourseData } from "../utilities/apiCall";
const userAuthToken = (window as any).wplmsCustomCoursePlayer.token;
export const useCourseData = (courseId: string) => {
  const [courseData, setCourseData] = useState<ICourse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { setProgress, setAllUnits } = useDispatch("custom-course-player");

  console.log(userAuthToken);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await fetchCourseData({ courseId, token: userAuthToken });
        const courseProgress = data?.courseitems.reduce((acc: number, item) => {
          if (item.status === 1) {
            return acc + 1;
          }
          return acc;
        }, 0);

        const totalUnits = data.courseitems.filter(
          (item) => item.type === "unit"
        );
        setAllUnits(totalUnits);
        const progress = Math.floor((courseProgress / totalUnits.length) * 100);
        setProgress(progress);
        setCourseData(data);
        setError(null);
      } catch (err) {
        setError("Failed to fetch course data");
        setCourseData(null);
      } finally {
        setLoading(false);
      }
    };

    if (userAuthToken) {
      fetchData();
    }
  }, [courseId, userAuthToken]);

  return { courseData, loading, error };
};
