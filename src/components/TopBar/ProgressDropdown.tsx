import React from "react";

interface ProgressDropdownProps {
    isOpen: boolean;
    onToggle: () => void;
    completedUnits: number;
    totalUnits: number;
}



// ProgressDropdown Component
const ProgressDropdown: React.FC<ProgressDropdownProps> = ({
    isOpen,
    onToggle,
    completedUnits,
    totalUnits
}) => {
    return (
        <div className="relative">
            <button
                onClick={onToggle}
                className="flex items-center gap-2 px-4 py-2 hover:bg-gray-700 rounded-md transition-colors"
            >
                <span>Progress</span>
                <svg
                    className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </button>
            {isOpen && (
                <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg z-50">
                    <div className="p-4">
                        <div className="space-y-4">
                            <div>
                                <h3 className="text-sm font-medium text-gray-900">Course Progress</h3>
                                <p className="text-sm text-gray-600">
                                    {completedUnits} of {totalUnits} units completed
                                </p>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2.5">
                                <div
                                    className="bg-green-500 h-2.5 rounded-full transition-all duration-300"
                                    style={{ width: `${(completedUnits / totalUnits) * 100}%` }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );

}

export default ProgressDropdown