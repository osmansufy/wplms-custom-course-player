import React from 'react';

interface NavigationButtonsProps {
    isHovering: boolean;
    isSidebarOpen: boolean;
    onPrevious: () => void;
    onNext: () => void;
    isFirstUnit: boolean;
    isLastUnit: boolean;
    loading: boolean;
}

export const NavigationButtons: React.FC<NavigationButtonsProps> = ({
    isHovering,
    isSidebarOpen,
    onPrevious,
    onNext,
    isFirstUnit,
    isLastUnit,
    loading,
}) => (
    <>
        <button
            className={`fixed top-1/2 left-4 bg-gray-800 text-white p-2 rounded-full transform -translate-y-1/2 transition-opacity duration-300 ${isHovering ? 'opacity-50 hover:opacity-100' : 'opacity-0'
                }`}
            onClick={onPrevious}
            disabled={loading || isFirstUnit}
        >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
        </button>

        <button
            className={`fixed top-1/2 right-4 bg-gray-800 text-white p-2 rounded-full transform -translate-y-1/2 transition-opacity duration-300 ${isSidebarOpen ? 'mr-[23rem]' : ''
                } ${isHovering ? 'opacity-50 hover:opacity-100' : 'opacity-0'}`}
            onClick={onNext}
            disabled={loading || isLastUnit}
        >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
        </button>
    </>
); 