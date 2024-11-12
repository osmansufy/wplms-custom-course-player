import React from 'react';
import { SidebarProgressProps } from './types';

const SidebarProgress: React.FC<SidebarProgressProps> = ({ totalLectures, totalDuration, completedLectures }) => (
    <div className="mb-4">
        <div className="text-sm text-gray-600">
            {totalLectures} lectures • {totalDuration} total length
        </div>
        <div className="mt-2 h-1 bg-gray-200 rounded-full">
            <div
                className="h-full bg-blue-500 rounded-full"
                style={{ width: `${(completedLectures / totalLectures) * 100}%` }}
            ></div>
        </div>
    </div>
);

export default SidebarProgress;