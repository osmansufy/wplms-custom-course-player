import React, { useState, useEffect } from 'react';
import { UnitItemProps } from '../types';
import { formatDuration } from '../../../../utilities/utility';
import { useCallback } from '@wordpress/element';
import { useTypedSelect } from '../../../../store';
import { State } from '../../../../store/types';
import { useDispatch } from '@wordpress/data';
import UnitItemView from './UnitItemView';

const UnitItem: React.FC<UnitItemProps> = ({ unit }) => {
    const { completeUnit, setCurrentUnit } = useDispatch('custom-course-player');
    const [isUnitComplete, setIsUnitComplete] = useState(unit?.status ?? 0);

    const { currentUnit, courseId, completedDuration, courseTotalDuration } = useTypedSelect((select) => ({
        currentUnit: select.getCurrentUnit(),
        courseId: select.getCourseId(),
        completedDuration: select.getCompletedDuration(),
        courseTotalDuration: select.getCourseTotalDuration(),
    }), []);

    const unitCompletedProgress = useCallback(() => {
        if (unit.duration && courseTotalDuration && completedDuration !== null) {
            return Math.round(((completedDuration + unit.duration) / courseTotalDuration) * 100);
        }
        return 0;
    }, [completedDuration, unit.duration, courseTotalDuration]);

    const onHandleCompleteUnit = async (unitId: number) => {
        try {
            await completeUnit({
                courseId,
                unitId,
                progress: unitCompletedProgress(),
            });
            setIsUnitComplete(1);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <UnitItemView
            unit={unit}
            currentUnit={currentUnit ?? null}
            isUnitComplete={isUnitComplete}
            onSelectUnit={setCurrentUnit}
            onCompleteUnit={onHandleCompleteUnit}
        />
    );
}

export default UnitItem;