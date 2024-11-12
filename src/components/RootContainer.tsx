import React, { useState, useEffect } from 'react';
import { ICourse } from '../types/course';
import ContentArea from './course/ContentArea';
import Sidebar from './course/sidebar';
import TopBar from './TopBar';
import { useCourseData } from '../hooks/useCourseData';

const RootContainer: React.FC<{
    courseId: string;
}> = ({ courseId }) => {
    const { courseData, loading, error } = useCourseData(courseId);
    const [currentUnitId, setCurrentUnitId] = useState<number | null>(null);
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    useEffect(() => {
        if (courseData?.courseitems.length) {
            const firstUnit = courseData.courseitems.find(item => item.key === courseData.current_unit_key);
            if (firstUnit) {
                setCurrentUnitId(firstUnit.id);
            }
        }
    }, [courseData]);

    const handleSelectUnit = (id: number) => {
        setCurrentUnitId(id);
    };

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const handlePrevious = () => {

    };

    const handleNext = () => {
        // Implement next unit logic
    };

    if (loading) return <div className="h-screen flex items-center justify-center">Loading...</div>;
    if (error) return <div className="h-screen flex items-center justify-center text-red-500">{error}</div>;

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
                <Sidebar
                    course={courseData as ICourse}
                    currentUnitId={currentUnitId}
                    onSelectUnit={handleSelectUnit}
                    isOpen={isSidebarOpen}
                    onToggle={toggleSidebar}
                    onCompleteUnit={() => { }}
                />
            </div>
        </div>
    );
};

export default RootContainer;