import { useDispatch } from '@wordpress/data';
import React, { useState } from 'react';
import { useTypedSelect } from '../store';
import TopBar from './TopBar';
import CourseTabs from './course/CourseTabs';
import Content from './course/content';
import Sidebar from './course/sidebar';

interface RootContainerProps {
    courseId: string;
}

const RootContainer: React.FC<RootContainerProps> = ({ courseId }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const token = localStorage.getItem('wplms_token');
    console.log({ token });
    // Get dispatch actions
    const {
        fetchCourse,
    } = useDispatch('custom-course-player');

    // Get state from Redux store
    const {
        courseInfo,
        loading,
        error,
    } = useTypedSelect((select) => ({
        courseInfo: select.getCourseInfo(parseInt(courseId)) || null,
        loading: select.isLoadingUserInfo() || false,
        error: select.getError() || null,
    }), []);




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
                        onClick={() => courseId && fetchCourse(courseId)}
                        className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
                    >
                        Retry
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="flex flex-col min-h-screen">
            <TopBar
                onToggleSidebar={toggleSidebar}
                isSidebarOpen={isSidebarOpen}
            />
            <div className={`flex flex-1 overflow-hidden sm:pt-16`}>
                <div className="flex flex-1 flex-col">
                    {/* content area */}
                    <Content
                        isSidebarOpen={isSidebarOpen}
                    />
                    <CourseTabs />
                </div>
                {/* sidebar */}
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