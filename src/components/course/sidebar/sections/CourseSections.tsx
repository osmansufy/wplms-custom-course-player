import React from 'react';
import { useCourseSectionsView } from './useCourseSectionsView';
import { CourseCompletionStatus } from './CourseCompletionStatus';
import { SectionHeader } from './SectionHeader';
import UnitItem from '../Unit/UnitItem';

const CourseSections = () => {
    const {
        sections,
        expandedSections,
        toggleSection,
        getSectionStats,
        isCompleted,
        completionMessage,
        handleFinishCourse
    } = useCourseSectionsView();

    return (
        <div className="space-y-2">
            <CourseCompletionStatus
                isCompleted={isCompleted}
                completionMessage={completionMessage || ''}
                onFinishCourse={handleFinishCourse}
            />

            {sections.map((section, index) => {
                const stats = getSectionStats(section);
                const isExpanded = expandedSections.includes(index);

                return (
                    <div key={section.key} className="border rounded-lg transition-colors border-gray-200">
                        <SectionHeader
                            title={section.title}
                            stats={stats}
                            isExpanded={isExpanded}
                            onClick={() => toggleSection(index)}
                        />

                        {isExpanded && (
                            <div className="border-t border-gray-200">
                                {section.units.map((unit) => (
                                    <UnitItem key={unit.id} unit={unit} />
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