import React from 'react';
import CourseSections from './sections/CourseSections';
import SidebarHeader from './SidebarHeader';
import SidebarProgress from './SidebarProgress';
import { SidebarProps } from './types';

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onToggle }) => {
    return (
        <div className={`sm:block hidden   bg-white border-l border-gray-200 h-full transform 
        ${isOpen ? 'translate-x-0 w-[24rem]' : 'translate-x-full w-0'} transition-transform duration-300 ease-in-out z-10`}>
            <div className="h-full overflow-y-auto">
                <div className="p-4">
                    <SidebarHeader title="Course content" onToggle={onToggle} />
                    <SidebarProgress />
                    <CourseSections />
                </div>
            </div>
        </div>
    );
};

export default Sidebar;