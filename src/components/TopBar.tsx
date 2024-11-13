import { useSelect } from '@wordpress/data';
import React, { useMemo } from 'react';
import DropdownButton from './common/DropdownButton';

interface TopBarProps {
    onToggleSidebar: () => void;
    isSidebarOpen: boolean;
    progress: number;
}

const TopBar: React.FC<TopBarProps> = ({
    onToggleSidebar,
    isSidebarOpen,
    progress
}) => {
    const courseInfo = useSelect((select: any) => select('custom-course-player').getCourseInfo(), []);
    const totalUnits = useSelect((select: any) => select('custom-course-player').getAllUnits(), []);
    const completedUnits = useSelect((select: any) => select('custom-course-player').getCompleteUnits(), []);
    const courseTitle = useMemo(() => {
        if (courseInfo) {
            return courseInfo.title?.rendered;
        }
        return '';
    }, [courseInfo]);

    return (
        <div className="fixed top-0 left-0 right-0 bg-gray-800 text-white p-4 flex justify-between items-center z-[30]">
            <div className="text-xl font-bold truncate">{courseTitle}</div>
            <div className="flex items-center space-x-4">
                <div className="text-sm flex items-center">
                    <svg className="h-6 w-6 mr-2" viewBox="0 0 36 36">
                        <path
                            className="circle-bg"
                            d="M18 2.0845
                            a 15.9155 15.9155 0 0 1 0 31.831
                            a 15.9155 15.9155 0 0 1 0 -31.831"
                            fill="none"
                            stroke="#e6e6e6"
                            strokeWidth="4"
                        />
                        <path
                            className="circle"
                            strokeDasharray={`${progress}, 100`}
                            d="M18 2.0845
                            a 15.9155 15.9155 0 0 1 0 31.831
                            a 15.9155 15.9155 0 0 1 0 -31.831"
                            fill="none"
                            stroke="#4caf50"
                            strokeWidth="4"
                        />
                    </svg>
                    {progress ? `${progress}%` : 'Loading...'}
                </div>
                <DropdownButton
                    label="Your progress"
                    children={
                        <div className="p-4">
                            <p className='text-sm text-black'>
                                {completedUnits.length} out of {totalUnits.length} units completed
                            </p>
                        </div>
                    }
                    buttonClassName="bg-none hover:bg-blue-600 px-4 py-2 rounded"
                    menuClassName="bg-gray-100"
                    itemClassName="hover:bg-blue-100"
                />
                <button onClick={onToggleSidebar} className="text-gray-300 hover:text-white">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default TopBar;