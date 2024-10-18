import React, { useState, useEffect } from 'react';
import apiFetch from '@wordpress/api-fetch';
import ContentArea from './ContentArea';
import Sidebar from './Sidebar';
import { ICourse, IUnitItem } from '../types/course';

interface CoursePlayerProps {
    courseId: string;
}

const CoursePlayer: React.FC<CoursePlayerProps> = ({ courseId }) => {
    const [courseData, setCourseData] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [currentUnitId, setCurrentUnitId] = useState<number | null>(null);
    const [unitContent, setUnitContent] = useState<IUnitItem | null>(null);

    useEffect(() => {
        const fetchCourseData = async () => {
            try {
                const data = await apiFetch<ICourse | null>({
                    path: `/wplms/v2/user/coursestatus/${courseId}`,
                    method: 'POST',
                    data: { token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6MTAwMDMiLCJpYXQiOjE3MjkwODc2NTEsIm5iZiI6MTcyOTA4NzY1MSwiZXhwIjoxNzI5NjkyNDUxLCJ2aWJlYnBfdG9rZW5fa2V5IjoiQ2ZaV2dlIiwiZGF0YSI6eyJ1c2VyIjp7ImlkIjoiMTQ4IiwidXNlcm5hbWUiOiJvc21hbnN1ZnkiLCJzbHVnIjoib3NtYW5zdWZ5IiwiZW1haWwiOiJvc21hbnN1ZnkyMEBnbWFpbC5jb20iLCJleHAiOjE3Mjk2OTI0NTEsIm1lbWJlcl90eXBlIjoic3R1ZGVudCIsInJlZnJlc2hfdG9rZW4iOiJRZDdNUTZHVmxHJHIiLCJhdmF0YXIiOiJodHRwOlwvXC9sb2NhbGhvc3Q6MTAwMDNcL3dwLWNvbnRlbnRcL3VwbG9hZHNcL2F2YXRhcnNcLzE0OFwvNjU5NTFiODYwYjI2Ny1icGZ1bGwucG5nIiwiZGlzcGxheW5hbWUiOiJPc21hbiBTdWZ5Iiwicm9sZXMiOlsiYWRtaW5pc3RyYXRvciIsImJicF9tb2RlcmF0b3IiXSwiY2FwcyI6eyJtYW5hZ2Vfb3B0aW9ucyI6dHJ1ZSwiZWRpdF9wb3N0cyI6dHJ1ZSwicmVhZCI6dHJ1ZSwiZWRpdF9hcHBvaW50bWVudHMiOjF9LCJwcm9maWxlX2xpbmsiOiJodHRwOlwvXC9sb2NhbGhvc3Q6MTAwMDNcL3B3YVwvIn0sImlwIjoiOjoxIiwiY2xpZW50X2lkIjoiQ2U5M2tMTkJmdkNJQmhzQyJ9fQ.QJrHIIokKC30j8G8yXN2nE_RyyFT7ZIVippvF-he4Gs" },
                });
                console.log(data);
                if (data) {
                    setCourseData(data);
                    setCurrentUnitId(data.courseitems[0]?.id || null);
                } else {
                    throw new Error(data || 'Failed to fetch course data');
                }
            } catch (err) {
                setError('Error fetching course data');
            } finally {
                setLoading(false);
            }
        };

        fetchCourseData();
    }, [courseId]);

    const fetchUnitContent = async (unitId: number) => {
        try {
            const data = await apiFetch<IUnitItem | null>({
                path: `/wplms/v2/user/coursestatus/${courseId}/item/${unitId}`,

                method: 'POST',
                data: { token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6MTAwMDMiLCJpYXQiOjE3MjkwODc2NTEsIm5iZiI6MTcyOTA4NzY1MSwiZXhwIjoxNzI5NjkyNDUxLCJ2aWJlYnBfdG9rZW5fa2V5IjoiQ2ZaV2dlIiwiZGF0YSI6eyJ1c2VyIjp7ImlkIjoiMTQ4IiwidXNlcm5hbWUiOiJvc21hbnN1ZnkiLCJzbHVnIjoib3NtYW5zdWZ5IiwiZW1haWwiOiJvc21hbnN1ZnkyMEBnbWFpbC5jb20iLCJleHAiOjE3Mjk2OTI0NTEsIm1lbWJlcl90eXBlIjoic3R1ZGVudCIsInJlZnJlc2hfdG9rZW4iOiJRZDdNUTZHVmxHJHIiLCJhdmF0YXIiOiJodHRwOlwvXC9sb2NhbGhvc3Q6MTAwMDNcL3dwLWNvbnRlbnRcL3VwbG9hZHNcL2F2YXRhcnNcLzE0OFwvNjU5NTFiODYwYjI2Ny1icGZ1bGwucG5nIiwiZGlzcGxheW5hbWUiOiJPc21hbiBTdWZ5Iiwicm9sZXMiOlsiYWRtaW5pc3RyYXRvciIsImJicF9tb2RlcmF0b3IiXSwiY2FwcyI6eyJtYW5hZ2Vfb3B0aW9ucyI6dHJ1ZSwiZWRpdF9wb3N0cyI6dHJ1ZSwicmVhZCI6dHJ1ZSwiZWRpdF9hcHBvaW50bWVudHMiOjF9LCJwcm9maWxlX2xpbmsiOiJodHRwOlwvXC9sb2NhbGhvc3Q6MTAwMDNcL3B3YVwvIn0sImlwIjoiOjoxIiwiY2xpZW50X2lkIjoiQ2U5M2tMTkJmdkNJQmhzQyJ9fQ.QJrHIIokKC30j8G8yXN2nE_RyyFT7ZIVippvF-he4Gs" },
            });

            if (data) {
                // Update the course data with the fetched unit content
                setUnitContent(data);
            } else {
                throw new Error('Failed to fetch unit content');
            }
        } catch (err) {
            console.error('Error fetching unit content:', err);
        }
    };

    const handleUnitClick = (unitId: number) => {
        setCurrentUnitId(unitId);
        fetchUnitContent(unitId);
    };

    if (loading) return <div className="text-center p-4">Loading...</div>;
    if (error) return <div className="text-center p-4 text-red-500">{error}</div>;

    return (
        <div className="flex h-screen bg-gray-100">
            <Sidebar
                curriculum={courseData.courseitems}
                currentUnitId={currentUnitId}
                setCurrentUnitId={handleUnitClick}
            />
            <ContentArea
                courseData={unitContent}
                currentUnitId={currentUnitId}
            />
        </div>
    );
};

export default CoursePlayer;