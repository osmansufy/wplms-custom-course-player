import React, { useEffect, useState } from 'react';
import { useSelect, useDispatch } from '@wordpress/data';
import ReviewModal from '../review/ReviewModal';
import useReviewSystem from '../../hooks/useReviewSystem';
import ProgressCircle from './ProgressCircle';
import ProgressDropdown from './ProgressDropdown';
import { useMemo } from '@wordpress/element';

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
        review,
        reviewLoading,
        reviewError,
        reviewModalOpen,
    } = useSelect((select) => ({
        courseInfo: select('custom-course-player').getCourseInfo(),
        totalUnits: select('custom-course-player').getAllUnits(),
        completedUnits: select('custom-course-player').getCompletedUnits(),
        review: select('custom-course-player').getCourseReview(),
        reviewLoading: select('custom-course-player').getReviewLoading(),
        reviewError: select('custom-course-player').getReviewError(),
        reviewModalOpen: select('custom-course-player').getReviewModalOpen(),
    }), []);

    // dispatch
    const dispatch = useDispatch();

    const setReviewModalOpen = (open: boolean) => {
        dispatch('custom-course-player').setReviewModalOpen(open);
    };
    // Fetch review
    useEffect(() => {
        if (courseInfo?.course_id) {
            console.log('Fetching review', courseInfo.course_id);
            dispatch('custom-course-player').fetchCourseReview(courseInfo.course_id);
        }
    }, [courseInfo?.course_id]);
    const hasReview = useMemo(() => {
        return review?.comment_ID !== undefined;
    }, [review]);
    return (
        <>
            <div className="fixed top-0 left-0 right-0 bg-gray-800 text-white z-50">
                <div className="h-16 px-4 flex items-center justify-between">
                    {/* Left section */}
                    <div className="flex items-center gap-4">
                        <h1 className="text-xl font-bold truncate max-w-md text-secondary-50">
                            {courseInfo?.course_title || ''}
                        </h1>
                    </div>

                    {/* Right section */}
                    <div className="flex items-center gap-4">
                        <ProgressCircle progress={progress} />

                        {!hasReview && (
                            <button
                                onClick={() => setReviewModalOpen(true)}
                                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 
                                     transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 
                                     focus:ring-offset-2 focus:ring-offset-gray-800"
                                disabled={reviewLoading || false}
                            >
                                {reviewLoading ? 'Loading...' : 'Leave a Review'}
                            </button>
                        )}

                        <ProgressDropdown
                            isOpen={isProgressOpen}
                            onToggle={() => setIsProgressOpen(!isProgressOpen)}
                            completedUnits={completedUnits?.length ?? 0}
                            totalUnits={totalUnits?.length ?? 0}
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
            {reviewModalOpen && <ReviewModal
                isOpen={Boolean(!reviewLoading && reviewModalOpen)}
                onClose={() => setReviewModalOpen(false)}
                courseId={courseInfo?.course_id}
                courseName={courseInfo?.course_title}
                progress={progress}
                onReviewSuccess={() => { }}
            />}

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