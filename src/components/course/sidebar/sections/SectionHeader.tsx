import React from 'react';
import { formatDuration } from '../../../../utilities/utility';
import { SectionStats } from './types';

interface SectionHeaderProps {
    title: string;
    stats: SectionStats;
    isExpanded: boolean;
    onClick: () => void;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
    title,
    stats,
    isExpanded,
    onClick
}) => (
    <button
        className={`w-full flex items-center justify-between p-4 text-left
                   transition-colors rounded-t-lg
                   ${isExpanded ? 'bg-gray-50' : 'hover:bg-gray-50'}
                   ${stats.isComplete ? 'bg-primary-50 hover:bg-primary-100' : ''}`}
        onClick={onClick}
    >
        <div className="flex-grow">
            <div className="flex items-center gap-2">
                <h3 className="font-semibold text-gray-900 text-[1rem]">{title}</h3>
            </div>
            <p className="text-sm text-gray-500">
                {stats.completedUnits}/{stats.totalUnits} lessons • {formatDuration(stats.totalDuration)} m
            </p>
        </div>
        <svg
            className={`w-5 h-5 text-gray-500 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
        >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
    </button>
); 