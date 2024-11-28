import React, { useState, useEffect } from 'react';
import { useDispatch, useSelect } from '@wordpress/data';
import { ICourse } from '../types/course';
import ContentArea from './course/ContentArea';
import Sidebar from './course/sidebar';
import TopBar from './TopBar';

interface RootContainerProps {
    courseId: string;
}

const RootContainer: React.FC<RootContainerProps> = ({ courseId }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    // Get dispatch actions
    const {
        fetchCourseData,
        nextUnit,
        prevUnit,
    } = useDispatch('custom-course-player');

    // Get state from Redux store
    const {
        courseInfo,
        loading,
        error,
        currentUnitId,
    } = useSelect((select) => ({
        courseInfo: select('custom-course-player')?.getCourseInfo() || null,
        loading: select('custom-course-player')?.isLoadingUserInfo() || false,
        error: select('custom-course-player')?.getError() || null,
        currentUnitId: select('custom-course-player')?.getCurrentUnitId() || null,
    }), []);

    // Fetch course data on component mount
    useEffect(() => {
        if (courseId) {
            fetchCourseData(courseId);
        }
    }, [courseId]);

    // Set initial unit when course data is loaded




    const handlePrevious = () => {
        prevUnit();
    };

    const handleNext = () => {
        nextUnit();
    };

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };



    if (loading) {
        return (
            <div className="h-screen flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="h-screen flex items-center justify-center">
                <div className="bg-red-50 p-4 rounded-lg">
                    <p className="text-red-600">{error}</p>
                    <button
                        onClick={() => courseId && fetchCourseData(courseId)}
                        className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
                    >
                        Retry
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="flex flex-col h-screen">
            <TopBar
                onToggleSidebar={toggleSidebar}
                isSidebarOpen={isSidebarOpen}
            />
            <div className="flex flex-1 overflow-hidden pt-16">
                <ContentArea
                    courseId={courseId}
                    currentUnitId={currentUnitId}
                    isSidebarOpen={isSidebarOpen}
                    onToggleSidebar={toggleSidebar}
                    onPrevious={handlePrevious}
                    onNext={handleNext}
                />
                {courseInfo && (
                    <Sidebar
                        isOpen={isSidebarOpen}
                        onToggle={toggleSidebar}

                    />
                )}
            </div>
        </div>
    );
};

export default RootContainer;