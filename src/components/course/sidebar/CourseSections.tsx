// components/CourseSections.tsx
import React from 'react';
import { useCourseSections } from '../../../hooks/useCourseSections';
import { formatDuration } from '../../../utilities/utility';
import UnitItem from './UnitItem';
import { useEffect, useMemo, useState } from '@wordpress/element';
import { useSelect, useDispatch } from '@wordpress/data';
import { useTypedSelect } from '../../../store';
import { State } from '../../../store/types';
const REVIEW_MILESTONES = [15, 75, 100];


interface CourseSectionsProps {
    currentUnitId: number | null;
}

const CourseSections = () => {
    const [lastShownMilestone, setLastShownMilestone] = useState<number>(0);

    const {
        sections,
        expandedSections,
        toggleSection,
        getSectionStats
    } = useCourseSections();
    const courseId = useTypedSelect((select) => select.getCourseId(), []);
    const {
        progress,
        isCompleted,
        completionMessage
    } = useTypedSelect((select) => ({
        progress: select.getProgress(),
        isCompleted: select.isCourseCompleted(),

        completionMessage: select.getCompletionMessage(),
    }), [courseId]);

    const {
        hasReview,
    } = useTypedSelect((select) => {
        if (courseId) {
            return {
                hasReview: select.hasReview(),
                reviewLoading: select.isLoadingReview(courseId),
            }
        }
        return { hasReview: false, reviewLoading: true };
    }, [courseId]);
    const { setReviewModalOpen, finishCourse } = useDispatch('custom-course-player');
    const onHandleReviewModalOpen = () => {
        console.log({
            courseId,
            hasReview,
        })
        if (hasReview) {

            return;
        }
        const milestone = REVIEW_MILESTONES.find(
            (milestone) => progress >= milestone && lastShownMilestone < milestone
        );

        if (milestone) {
            setReviewModalOpen(true);
            setLastShownMilestone(milestone);
        }
    }
    // review modal don't open initial render
    useEffect(() => {

        if (!hasReview && courseId) {
            console.log('review modal open');
            onHandleReviewModalOpen();
        } else {
            setReviewModalOpen(false);
        }
    }, [progress, hasReview, courseId]);

    const handleFinishCourse = async () => {
        if (courseId) {
            await finishCourse(courseId);
        }
    };
    return (
        <div className="space-y-2">
            {!isCompleted && (
                <div className="p-4 bg-green-50 rounded-lg">
                    <p className="text-sm text-green-800 mb-2">
                        {completionMessage}
                    </p>
                    <button
                        onClick={handleFinishCourse}
                        className="w-full py-2 px-4 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
                    >
                        Complete Course
                    </button>
                </div>
            )}
            {isCompleted && (
                <div className="p-4 bg-green-100 rounded-lg">
                    <p className="text-sm text-green-800">
                        🎉 Congratulations! You've completed this course.
                    </p>
                </div>
            )}
            {sections.map((section, index) => {
                const stats = getSectionStats(section);
                const isExpanded = expandedSections.includes(index);

                return (
                    <div key={section.key}
                        className={`border rounded-lg transition-colors border-gray-200`}>
                        {/* Section Header */}
                        <button
                            className={`w-full flex items-center justify-between p-4 text-left
                         transition-colors rounded-t-lg
                         ${isExpanded ? 'bg-gray-50' : 'hover:bg-gray-50'}
                         ${stats.isComplete ? 'bg-primary-50 hover:bg-primary-100' : ''}`}
                            onClick={() => toggleSection(index)}
                        >
                            <div className="flex-grow">
                                <div className="flex items-center gap-2">
                                    <h3 className="font-semibold text-gray-900 text-[1rem] ">{section.title}</h3>

                                </div>
                                <p className="text-sm text-gray-500">
                                    {stats.completedUnits}/{stats.totalUnits} lessons • {formatDuration(stats.totalDuration)} m
                                </p>
                            </div>
                            <svg
                                className={`w-5 h-5 text-gray-500 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>

                        {/* Units */}
                        {isExpanded && (
                            <div className="border-t border-gray-200">
                                {section.units.map((unit) => (
                                    <UnitItem
                                        key={unit.id}
                                        unit={unit}
                                    />
                                ))}
                            </div>
                        )}
                    </div>
                );
            })}
        </div>
    );
};

export default CourseSections;