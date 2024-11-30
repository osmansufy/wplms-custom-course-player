import React from 'react';
import { NavigationButtons } from './NavigationButtons';

interface ContentDisplayProps {
    loading: boolean;
    error: string | null;
    unitContent: any; // Replace 'any' with proper type
    isHovering: boolean;
    isSidebarOpen: boolean;
    onPrevious: () => void;
    onNext: () => void;
    isFirstUnit: boolean;
    isLastUnit: boolean;
    onRetry: () => void;
}

export const ContentDisplay: React.FC<ContentDisplayProps> = ({
    loading,
    error,
    unitContent,
    isHovering,
    isSidebarOpen,
    onPrevious,
    onNext,
    isFirstUnit,
    isLastUnit,
    onRetry,
}) => {
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
                        onClick={onRetry}
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
            <NavigationButtons
                isHovering={isHovering}
                isSidebarOpen={isSidebarOpen}
                onPrevious={onPrevious}
                onNext={onNext}
                isFirstUnit={isFirstUnit}
                isLastUnit={isLastUnit}
                loading={loading}
            />
        </div>
    );
}; 