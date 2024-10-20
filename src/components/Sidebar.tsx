import React, { useState } from 'react';
import { ICourse, CourseItem } from '../types/course';

interface SidebarProps {
    course: ICourse;
    currentUnitId: number | null;
    onSelectUnit: (id: number) => void;
    onCompleteUnit: (id: number) => void;
    isOpen: boolean;
    onToggle: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ course, currentUnitId, onSelectUnit, onCompleteUnit, isOpen, onToggle }) => {
    const [expandedSections, setExpandedSections] = useState<number[]>([]);

    const toggleSection = (sectionKey: number) => {
        setExpandedSections(prev =>
            prev.includes(sectionKey)
                ? prev.filter(key => key !== sectionKey)
                : [...prev, sectionKey]
        );
    };

    const getTotalLectures = () => {
        return course.courseitems.filter(item => item.type !== 'section').length;
    };

    const getTotalDuration = () => {
        const totalSeconds = course.courseitems.reduce((acc, item) => acc + (item.duration || 0), 0);
        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        return `${hours}hr ${minutes}min`;
    };

    const renderSectionContent = (sectionKey: number) => {
        return course.courseitems
            .filter(item => item.type !== 'section' && item.key > sectionKey && (course.courseitems[item.key + 1]?.type === 'section' || item.key === course.courseitems.length - 1))
            .map(item => (
                <div
                    key={item.key}
                    className={`flex items-center p-2 cursor-pointer ${item.id === currentUnitId ? 'bg-gray-100' : 'hover:bg-gray-50'}`}
                    onClick={() => onSelectUnit(item.id)}
                >
                    <div
                        className="flex-shrink-0 mr-3"
                        onClick={(e) => {
                            e.stopPropagation();
                            if (item.status !== 1) {
                                onCompleteUnit(item.id);
                            }
                        }}
                    >
                        {item.status === 1 ? (
                            <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                        ) : (
                            <div className="w-5 h-5 border border-gray-300 rounded-sm"></div>
                        )}
                    </div>
                    <div className="flex-grow">
                        <p className={`text-sm ${item.id === currentUnitId ? 'font-semibold' : 'font-normal'} ${item.status === 1 ? 'text-gray-500' : 'text-gray-700'}`}>
                            {item.title}
                        </p>
                        <p className="text-xs text-gray-500">{item.icon && <span className={item.icon}></span>} {Math.floor(item.duration / 60)}:{(item.duration % 60).toString().padStart(2, '0')}</p>
                    </div>
                </div>
            ));
    };

    return (
        <>
            {!isOpen && (
                <button
                    className="fixed top-1/4 right-0 bg-gray-200 p-2 rounded-l-md transform -translate-y-1/2 z-20"
                    onClick={onToggle}
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            )}
            <div className={`fixed top-0 right-0 w-80 bg-white border-l border-gray-200 h-full transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out z-10`}>
                <div className="h-full overflow-y-auto pt-16"> {/* Add padding-top to account for TopBar */}
                    <div className="p-4">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-xl font-bold text-gray-800">Course content</h2>
                            <button className="text-gray-500 hover:text-gray-700" onClick={onToggle}>
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        <div className="mb-4">
                            <div className="text-sm text-gray-600">
                                {getTotalLectures()} lectures • {getTotalDuration()} total length
                            </div>
                            <div className="mt-2 h-1 bg-gray-200 rounded-full">
                                <div
                                    className="h-full bg-blue-500 rounded-full"
                                    style={{ width: `${course.courseitems.filter(item => item.status === 1).length / getTotalLectures() * 100}%` }}
                                ></div>
                            </div>
                        </div>
                        {course.courseitems.map((item, index) => (
                            item.type === 'section' ? (
                                <div key={item.key} className="mb-2">
                                    <button
                                        className="w-full flex items-center justify-between p-2 bg-gray-50 hover:bg-gray-100 transition-colors rounded text-left"
                                        onClick={() => toggleSection(item.key)}
                                    >
                                        <span className="font-medium text-base text-gray-700">{item.title}</span>
                                        <svg className={`w-4 h-4 text-gray-500 transition-transform ${expandedSections.includes(item.key) ? 'transform rotate-180' : ''}`} viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                    </button>
                                    {expandedSections.includes(item.key) && renderSectionContent(item.key)}
                                </div>
                            ) : null
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Sidebar;