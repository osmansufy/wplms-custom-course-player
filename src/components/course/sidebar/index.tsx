import { useDispatch, useSelect } from '@wordpress/data';
import React from 'react';
import CourseSections from './CourseSections';
import SidebarHeader from './SidebarHeader';
import SidebarProgress from './SidebarProgress';
import { SidebarProps } from './types';
import { calculateTotalDuration, calculateTotalLectures } from './utils';

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onToggle }) => {
    const { courseInfo: course, currentUnitId } = useSelect((select) => ({
        courseInfo: select('custom-course-player').getCourseInfo(),
        currentUnitId: select('custom-course-player')?.getCurrentUnitId()
    }), []);

    if (!course) return null;

    return (
        <div className={`fixed top-0 right-0 w-[24rem] bg-white border-l border-gray-200 h-full transform 
        ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out z-10`}>
            <div className="h-full overflow-y-auto pt-16">
                <div className="p-4">
                    <SidebarHeader title="Course content" onToggle={onToggle} />
                    <SidebarProgress
                        totalLectures={calculateTotalLectures(course.courseitems)}
                        totalDuration={calculateTotalDuration(course.courseitems)}
                        completedLectures={course.courseitems.filter(item => item.status === 1).length}
                    />
                    <CourseSections
                        items={course.courseitems}
                        currentUnitId={currentUnitId}
                    />
                </div>
            </div>
        </div>
    );
};

export default Sidebar;