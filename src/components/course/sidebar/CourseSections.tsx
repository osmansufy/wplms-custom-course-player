// components/CourseSections.tsx
import React from 'react';
import { CourseItem } from '../../../types/course';
import { useCourseSections } from '../../../hooks/useCourseSections';
import { formatDuration } from '../../../utilities/utility';
import UnitItem from './UnitItem';
import { useEffect, useMemo, useState } from '@wordpress/element';
import { useSelect, useDispatch } from '@wordpress/data';
const REVIEW_MILESTONES = [15, 75, 100];


interface CourseSectionsProps {
    items: CourseItem[];
    currentUnitId: number | null;
}

const CourseSections: React.FC<CourseSectionsProps> = ({
    items,
    currentUnitId,
}) => {
    const [lastShownMilestone, setLastShownMilestone] = useState<number>(0);

    const {
        sections,
        expandedSections,
        toggleSection,
        getSectionStats
    } = useCourseSections(items, currentUnitId);
    const {
        progress, courseId, isCompleted, hasReview, reviewLoading } = useSelect((select) => ({
            progress: select('custom-course-player').getProgress(),
            courseId: select('custom-course-player').getCourseId(),
            isCompleted: select('custom-course-player').isCourseCompleted(),
            hasReview: select('custom-course-player').getCourseReview()?.comment_ID !== undefined,
            reviewLoading: select('custom-course-player').getReviewLoading(),
        }), []);
    const { setReviewModalOpen, finishCourse } = useDispatch('custom-course-player');
    const onHandleReviewModalOpen = () => {
        if (hasReview || reviewLoading) {
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
    useEffect(() => {
        console.log({ hasReview, reviewLoading });
        if (!hasReview && !reviewLoading) {
            console.log('review modal open');
            onHandleReviewModalOpen();
        }
    }, [progress, hasReview, reviewLoading]);

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
                        You've completed {progress}% of the course! Ready to finish?
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
                         ${stats.isComplete ? 'bg-green-50 hover:bg-green-100' : ''}`}
                            onClick={() => toggleSection(index)}
                        >
                            <div className="flex-grow">
                                <div className="flex items-center gap-2">
                                    <h3 className="font-semibold text-gray-900 text-[1rem] ">{section.title}</h3>

                                </div>
                                <p className="text-sm text-gray-500">
                                    {stats.completedUnits}/{stats.totalUnits} lessons • {formatDuration(stats.totalDuration)}
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
                                        currentUnitId={currentUnitId}
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