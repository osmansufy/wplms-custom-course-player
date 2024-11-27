import React, { useState, useEffect } from 'react';
import { UnitItemProps } from './types';
import { useSelect, useDispatch } from '@wordpress/data';
import { formatDuration } from '../../../utilities/utility';
import { useCourseProgress } from '../../../hooks/useCourseProgress';
import { useCallback } from '@wordpress/element';
const UnitItem: React.FC<UnitItemProps> = ({ unit, currentUnitId }) => {
    const { markUnitComplete, setCurrentUnit } = useDispatch('custom-course-player');
    const [isUnitComplete, setIsUnitComplete] = useState(unit?.status ?? 0);
    const { courseId, courseInfo } = useSelect((select) => ({
        courseId: select('custom-course-player').getCourseId(),
        courseInfo: select('custom-course-player').getCourseInfo(),
    }), [])
    const handleSelectUnit = (id: number) => {
        setCurrentUnit(id);
    };

    const { completedDuration, courseTotalDuration } = useSelect((select) => ({
        completedDuration: select('custom-course-player').getCompletedDuration(),
        courseTotalDuration: select('custom-course-player').getCourseTotalDuration(),
    }), []);

    const unitCompletedProgress = useCallback(() => {
        if (unit.duration && courseTotalDuration && completedDuration !== null) {
            return Math.round(((completedDuration + unit.duration) / courseTotalDuration) * 100);
        }
        return 0;
    }, [completedDuration, unit.duration, courseTotalDuration]);

    const onHandleCompleteUnit = async (unitId: number) => {
        try {
            await markUnitComplete(courseId, unitId, unitCompletedProgress());
            setIsUnitComplete(1);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div
            className={`flex items-center p-4 cursor-pointer transition-colors
                               ${currentUnitId === unit.id ? 'bg-blue-50' : 'hover:bg-gray-50'}
                               ${unit.status === 1 ? 'opacity-75' : ''}`}
            onClick={() => handleSelectUnit(unit.id)}
        >
            {/* Status Icon */}
            <div className="flex-shrink-0 mr-3">
                {isUnitComplete === 1 ? (
                    <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                        />
                    </svg>
                ) : (
                    <div className="w-5 h-5 border-2 border-gray-300 rounded-full cursor-pointer" onClick={(e) => {
                        e.stopPropagation();
                        onHandleCompleteUnit(unit.id);
                    }} />
                )}
            </div>

            {/* Unit Info */}
            <div className="flex-grow">
                <h4 className={`text-sm ${currentUnitId === unit.id ? 'font-medium' : ''}`}>
                    {unit.title}
                </h4>
                <div className="flex items-center text-xs text-gray-500 mt-1">
                    {unit.icon && <span className={`${unit.icon} mr-1`} />}
                    <span>{formatDuration(unit.duration)}</span>
                </div>
            </div>
        </div>
    );
}

export default UnitItem;