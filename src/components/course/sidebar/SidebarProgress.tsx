import React from 'react';
import { SidebarProgressProps } from './types';
import { useSelect } from '@wordpress/data';
import { useTypedSelect } from '../../../store';
import { State } from '../../../store/types';

const SidebarProgress = () => {
    const { totalLectures, totalDuration, completedLectures } = useTypedSelect((select) => ({
        totalLectures: select.getAllUnits()?.length,
        totalDuration: select.getCourseTotalDuration(),
        completedLectures: select.getCompletedUnits()?.length
    }));

    return (
        <div className="mb-4">
            <div className="text-sm text-gray-600">
                {totalLectures} lectures • {totalDuration ? totalDuration / 60 : 0}m total duration
            </div>
            <div className="mt-2 h-1 bg-gray-200 rounded-full">
                <div
                    className="h-full bg-blue-500 rounded-full"
                    style={{ width: `${((completedLectures ?? 0) / (totalLectures ?? 1)) * 100}%` }}
                ></div>
            </div>
        </div>
    );
}

export default SidebarProgress;