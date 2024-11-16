import React, { useEffect, useState } from 'react';
import { useSelect } from '@wordpress/data';
import ReviewModal from '../CourseReview';
import useReviewSystem from '../../hooks/useReviewSystem';
import ProgressCircle from './ProgressCircle';
import ProgressDropdown from './ProgressDropdown';

interface TopBarProps {
    onToggleSidebar: () => void;
    isSidebarOpen: boolean;
    progress: number;
}





export default function TopBar({ onToggleSidebar, progress }: TopBarProps) {
    const [isProgressOpen, setIsProgressOpen] = useState(false);

    const {
        courseInfo,
        totalUnits,
        completedUnits,
    } = useSelect((select) => ({
        courseInfo: select('custom-course-player').getCourseInfo(),
        totalUnits: select('custom-course-player').getAllUnits(),
        completedUnits: select('custom-course-player').getCompleteUnits(),
    }), []);

    const {
        isReviewModalOpen,
        setIsReviewModalOpen,
        hasReview,
        setHasReview
    } = useReviewSystem(progress, courseInfo?.course_id);

    const handleReviewSuccess = () => {
        setHasReview(true);
        setIsReviewModalOpen(false);
    };

    return (
        <>
            <div className="fixed top-0 left-0 right-0 bg-gray-800 text-white z-50">
                <div className="h-16 px-4 flex items-center justify-between">
                    {/* Left section */}
                    <div className="flex items-center gap-4">
                        <h1 className="text-xl font-bold truncate max-w-md">
                            {courseInfo?.title || ''}
                        </h1>
                    </div>

                    {/* Right section */}
                    <div className="flex items-center gap-4">
                        <ProgressCircle progress={progress} />

                        {!hasReview && (
                            <button
                                onClick={() => setIsReviewModalOpen(true)}
                                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 
                                     transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 
                                     focus:ring-offset-2 focus:ring-offset-gray-800"
                            >
                                Leave Review
                            </button>
                        )}

                        <ProgressDropdown
                            isOpen={isProgressOpen}
                            onToggle={() => setIsProgressOpen(!isProgressOpen)}
                            completedUnits={completedUnits.length}
                            totalUnits={totalUnits.length}
                        />

                        <button
                            onClick={onToggleSidebar}
                            className="p-2 hover:bg-gray-700 rounded-md transition-colors"
                            aria-label="Toggle sidebar"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Progress bar */}
                <div className="h-1 bg-gray-700">
                    <div
                        className="h-full bg-green-500 transition-all duration-500"
                        style={{ width: `${progress}%` }}
                    />
                </div>
            </div>

            {/* Review Modal */}
            <ReviewModal
                isOpen={isReviewModalOpen}
                onClose={() => setIsReviewModalOpen(false)}
                courseId={courseInfo?.course_id}
                courseName={courseInfo?.title}
                progress={progress}
                onReviewSuccess={handleReviewSuccess}
            />

            {/* Backdrop for progress dropdown */}
            {isProgressOpen && (
                <div
                    className="fixed inset-0 z-20"
                    onClick={() => setIsProgressOpen(false)}
                />
            )}
        </>
    );
}