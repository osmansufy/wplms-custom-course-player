import React from 'react';
import { formatDuration } from '../../../../utilities/utility';
import { IUnit } from '../../../../types/course';

interface UnitItemViewProps {
    unit: IUnit;
    currentUnit: IUnit | null;
    isUnitComplete: number;
    onSelectUnit: (id: number) => void;
    onCompleteUnit: (id: number) => void;
}

const UnitItemView: React.FC<UnitItemViewProps> = ({
    unit,
    currentUnit,
    isUnitComplete,
    onSelectUnit,
    onCompleteUnit,
}) => (
    <div
        className={`flex items-center p-4 cursor-pointer transition-colors
                   ${currentUnit?.id === unit.id ? 'bg-blue-50' : 'hover:bg-gray-50'}
                   ${unit.status === 1 ? 'opacity-75' : ''}`}
        onClick={() => onSelectUnit(unit.id)}
    >
        <div className="flex-shrink-0 mr-3">
            {isUnitComplete === 1 ? (
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                    />
                </svg>
            ) : (
                <div
                    className="w-5 h-5 border-2 border-gray-300 rounded-full cursor-pointer"
                    onClick={(e) => {
                        e.stopPropagation();
                        onCompleteUnit(unit.id);
                    }}
                />
            )}
        </div>

        <div className="flex-grow">
            <h4 className={`text-sm ${currentUnit?.id === unit.id ? 'font-medium' : ''}`}>
                {unit.title}
            </h4>
            <div className="flex items-center text-xs text-gray-500 mt-1">
                {unit.icon && <span className={`${unit.icon} mr-1`} />}
                <span>{formatDuration(unit.duration)} m</span>
            </div>
        </div>
    </div>
);

export default UnitItemView; 