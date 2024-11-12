import React from 'react';
import { SectionItemProps } from './types';

const SectionItem: React.FC<SectionItemProps> = ({ item, isExpanded, onToggle, children }) => (
    <div className="mb-2">
        <button
            className="w-full flex items-center justify-between p-2 bg-gray-50 hover:bg-gray-100 transition-colors rounded text-left"
            onClick={onToggle}
        >
            <span className="font-medium text-base text-gray-700 max-w-[80%]">{item.title}</span>
            <svg className={`w-4 h-4 text-gray-500 transition-transform ${isExpanded ? 'transform rotate-180' : ''}`}
                viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd" />
            </svg>
        </button>
        {isExpanded && children}
    </div>
);

export default SectionItem;