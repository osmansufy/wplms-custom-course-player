// components/CourseSections.tsx
import React from 'react';
import { CourseItem } from '../../../types/course';
import { useCourseSections } from '../../../hooks/useCourseSections';
import { formatDuration } from '../../../utilities/utility';
import UnitItem from './UnitItem';
import { useEffect, useState } from '@wordpress/element';
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
    const { progress } = useSelect((select) => ({
        progress: select('custom-course-player').getProgress(),
    }), []);
    const { setReviewModalOpen } = useDispatch('custom-course-player');
    const onHandleReviewModalOpen = () => {
        const milestone = REVIEW_MILESTONES.find(
            (milestone) => progress >= milestone && lastShownMilestone < milestone
        );

        if (milestone) {
            setReviewModalOpen(true);
            setLastShownMilestone(milestone);
        }
    }
    useEffect(() => {
        onHandleReviewModalOpen();
    }, [progress]);
    return (
        <div className="space-y-2">
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