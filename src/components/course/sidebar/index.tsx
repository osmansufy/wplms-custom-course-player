import React from 'react';
import CourseSections from './sections/CourseSections';
import SidebarHeader from './SidebarHeader';
import SidebarProgress from './SidebarProgress';
import { SidebarProps } from './types';

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onToggle }) => {
    return (
        <div className={`fixed top-0 right-0 w-[24rem] bg-white border-l border-gray-200 h-full transform 
        ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out z-10`}>
            <div className="h-full overflow-y-auto pt-16">
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