import React, { useState } from 'react';
import { SidebarProps } from './types';
import SidebarHeader from './SidebarHeader';
import SidebarProgress from './SidebarProgress';
import SectionItem from './SectionItem';
import UnitItem from './UnitItem';
import { calculateTotalLectures, calculateTotalDuration } from './utils';

const Sidebar: React.FC<SidebarProps> = ({
    course,
    currentUnitId,
    onSelectUnit,
    onCompleteUnit,
    isOpen,
    onToggle
}) => {
    const [expandedSections, setExpandedSections] = useState<number[]>([]);

    const toggleSection = (sectionKey: number) => {
        setExpandedSections(prev =>
            prev.includes(sectionKey)
                ? prev.filter(key => key !== sectionKey)
                : [...prev, sectionKey]
        );
    };

    const getSectionContent = (sectionKey: number) => {
        return course.courseitems.filter(
            item => item.type !== 'section' &&
                item.key > sectionKey &&
                (course.courseitems[item.key + 1]?.type === 'section' || item.key === course.courseitems.length - 1)
        );
    };

    return (
        <div className={`fixed top-0 right-0 w-80 bg-white border-l border-gray-200 h-full transform 
            ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out z-10`}>
            <div className="h-full overflow-y-auto pt-16">
                <div className="p-4">
                    <SidebarHeader title="Course content" onToggle={onToggle} />
                    <SidebarProgress
                        totalLectures={calculateTotalLectures(course.courseitems)}
                        totalDuration={calculateTotalDuration(course.courseitems)}
                        completedLectures={course.courseitems.filter(item => item.status === 1).length}
                    />

                    {course.courseitems.map((item) => (
                        item.type === 'section' ? (
                            <SectionItem
                                key={item.key}
                                item={item}
                                isExpanded={expandedSections.includes(item.key)}
                                onToggle={() => toggleSection(item.key)}
                            >
                                {getSectionContent(item.key).map(unitItem => (
                                    <UnitItem
                                        key={unitItem.key}
                                        item={unitItem}
                                        currentUnitId={currentUnitId}
                                        onSelectUnit={onSelectUnit}
                                        onCompleteUnit={onCompleteUnit}
                                    />
                                ))}
                            </SectionItem>
                        ) : null
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Sidebar;