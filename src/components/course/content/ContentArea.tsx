import React from 'react';
import { useContentArea } from './useContentArea';
import { ContentDisplay } from './ContentDisplay';
import { SIDEBAR_WIDTH } from '../../../utilities/const';

interface ContentAreaProps {
    isSidebarOpen: boolean;
}

const ContentArea: React.FC<ContentAreaProps> = ({ isSidebarOpen }) => {
    const {
        unitContent,
        loading,
        error,
        isLastUnit,
        isFirstUnit,
        isHovering,
        handlePrevious,
        handleNext,
        handleMouseEnter,
        handleMouseLeave,
        handleRetry,
    } = useContentArea(isSidebarOpen);

    return (
        <div
            className={`flex-1 p-6 overflow-y-auto bg-black 
                transition-all duration-300 relative 
               sm:max-h-[520px] max-h-[300px] 
                }`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className="mb-6">
                {loading ? (
                    <div className="h-8 bg-gray-200 rounded animate-pulse w-2/3"></div>
                ) : (
                    <h1 className="text-lg text-white font-bold mb-1">{unitContent?.title}</h1>
                )}
            </div>
            <ContentDisplay
                loading={loading}
                error={error}
                unitContent={unitContent}
                isHovering={isHovering}
                isSidebarOpen={isSidebarOpen}
                onPrevious={handlePrevious}
                onNext={handleNext}
                isFirstUnit={isFirstUnit}
                isLastUnit={isLastUnit}
                onRetry={handleRetry}
            />
        </div>
    );
};

export default ContentArea;