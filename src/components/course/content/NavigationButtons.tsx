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
            className={`fixed top-1/2 left-4 bg-secondary-300 hover:bg-secondary-400 text-white p-3 
            rounded-full transform -translate-y-1/2 transition-all duration-300 
            shadow-lg shadow-secondary-400/20
            ${isHovering ? 'opacity-100' : 'opacity-0'}`}
            onClick={onPrevious}
            disabled={loading || isFirstUnit}
        >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
        </button>

        <button
            className={`fixed top-1/2 right-4 bg-secondary-300 hover:bg-secondary-400 text-white p-3 
            rounded-full transform -translate-y-1/2 transition-all duration-300 
            shadow-lg shadow-secondary-400/20
            ${isSidebarOpen ? 'mr-[23rem]' : ''} 
            ${isHovering ? 'opacity-100' : 'opacity-0'}`}
            onClick={onNext}
            disabled={loading || isLastUnit}
        >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
        </button>
    </>
); 