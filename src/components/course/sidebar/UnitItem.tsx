import React from 'react';
import { UnitItemProps } from './types';

const UnitItem: React.FC<UnitItemProps> = ({ item, currentUnitId, onSelectUnit, onCompleteUnit }) => (
    <div
        className={`flex items-center p-2 cursor-pointer ${item.id === currentUnitId ? 'bg-gray-100' : 'hover:bg-gray-50'}`}
        onClick={() => onSelectUnit(item.id)}
    >
        <div
            className="flex-shrink-0 mr-3"
            onClick={(e) => {
                e.stopPropagation();
                if (item.status !== 1) {
                    onCompleteUnit(item.id);
                }
            }}
        >
            {item.status === 1 ? (
                <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
            ) : (
                <div className="w-5 h-5 border border-gray-300 rounded-sm"></div>
            )}
        </div>
        <div className="flex-grow">
            <p className={`text-sm ${item.id === currentUnitId ? 'font-semibold' : 'font-normal'} ${item.status === 1 ? 'text-gray-500' : 'text-gray-700'}`}>
                {item.title}
            </p>
            <p className="text-xs text-gray-500">
                {item.icon && <span className={item.icon}></span>}
                {Math.floor(item.duration / 60)}:{(item.duration % 60).toString().padStart(2, '0')}
            </p>
        </div>
    </div>
);

export default UnitItem;