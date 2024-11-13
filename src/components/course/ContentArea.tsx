import React, { useState } from 'react';
import { useUnitContent } from '../../hooks/useUnitContent';

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

    const renderNavigationButtons = () => (
        <>
            {/* Previous button */}
            <button
                className={`fixed top-1/2 left-4 bg-gray-800 text-white p-2 rounded-full transform -translate-y-1/2 transition-opacity duration-300 ${isHovering ? 'opacity-50 hover:opacity-100' : 'opacity-0'}`}
                onClick={onPrevious}
                disabled={loading}
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
            </button>

            {/* Next button */}
            <button
                className={`fixed top-1/2 right-4 bg-gray-800 text-white p-2 rounded-full transform -translate-y-1/2 transition-opacity duration-300 ${isSidebarOpen ? 'mr-80' : ''} ${isHovering ? 'opacity-50 hover:opacity-100' : 'opacity-0'}`}
                onClick={onNext}
                disabled={loading}
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </button>
        </>
    );

    const renderContent = () => {
        if (loading) {
            return (
                <div className="flex flex-col items-center justify-center min-h-[400px] space-y-4">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
                    <p className="text-gray-600">Loading content...</p>
                </div>
            );
        }

        if (error) {
            return (
                <div className="flex flex-col items-center justify-center min-h-[400px] space-y-4">
                    <div className="bg-red-50 p-6 rounded-lg text-center">
                        <p className="text-red-600 mb-4">{error}</p>
                        <button
                            onClick={() => window.location.reload()}
                            className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
                        >
                            Retry
                        </button>
                    </div>
                </div>
            );
        }

        if (!unitContent) {
            return (
                <div className="flex items-center justify-center min-h-[400px]">
                    <p className="text-gray-600">No content available</p>
                </div>
            );
        }

        return (
            <div className='custom_course_content max-h-[600px] relative'>
                <div
                    className={`transition-opacity duration-300 ${loading ? 'opacity-50' : 'opacity-100'}`}
                    dangerouslySetInnerHTML={{ __html: unitContent.content }}
                />
                {renderNavigationButtons()}
            </div>
        );
    };

    return (
        <div
            className={`flex-1 p-6 overflow-y-auto transition-all duration-300 relative ${isSidebarOpen ? 'mr-80' : ''}`}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
        >
            <div className="mb-6">
                {loading ? (
                    <div className="h-8 bg-gray-200 rounded animate-pulse w-2/3"></div>
                ) : (
                    <h1 className="text-3xl font-bold mb-1">{unitContent?.title}</h1>
                )}
            </div>
            {renderContent()}
        </div>
    );
};

export default ContentArea;