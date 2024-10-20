import React, { useState } from 'react';
import { IUnitItem, Meta, Type } from '../types/course';
import { useUnitContent } from '../hooks/useUnitContent';

interface ContentAreaProps {
    currentUnitId: number | null;
    courseId: string;
    isSidebarOpen: boolean;
    onToggleSidebar: () => void;
    onPrevious: () => void;
    onNext: () => void;
}

const ContentArea: React.FC<ContentAreaProps> = ({
    currentUnitId,
    courseId,
    isSidebarOpen,
    onToggleSidebar,
    onPrevious,
    onNext
}) => {
    const { unitContent, loading, error } = useUnitContent(courseId, currentUnitId);
    const [isHovering, setIsHovering] = useState(false);

    const renderContent = () => {
        if (unitContent) {
            return (
                <div className='custom_course_content max-h-[600px] relative'>
                    <div dangerouslySetInnerHTML={{ __html: unitContent.content }} />

                    {/* Previous button */}
                    <button
                        className={`fixed top-1/2 left-4 bg-gray-800 text-white p-2 rounded-full transform -translate-y-1/2 transition-opacity duration-300 ${isHovering ? 'opacity-50 hover:opacity-100' : 'opacity-0'}`}
                        onClick={onPrevious}
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    {/* Next button */}
                    <button
                        className={`fixed top-1/2 right-4 bg-gray-800 text-white p-2 rounded-full transform -translate-y-1/2 transition-opacity duration-300 ${isSidebarOpen ? 'mr-80' : ''} ${isHovering ? 'opacity-50 hover:opacity-100' : 'opacity-0'}`}
                        onClick={onNext}
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            );
        }
        return null;
    };

    return (
        <div
            className={`flex-1 p-6 overflow-y-auto transition-all duration-300 relative ${isSidebarOpen ? 'mr-80' : ''}`}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
        >
            <h1 className="text-3xl font-bold mb-1">{unitContent?.title}</h1>
            {renderContent()}

        </div>
    );
};

export default ContentArea;