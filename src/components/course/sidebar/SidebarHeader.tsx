import React from 'react';
import { SidebarHeaderProps } from './types';

const SidebarHeader: React.FC<SidebarHeaderProps> = ({ title, onToggle }) => (
    <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-gray-800">{title}</h2>
        <button className="text-gray-500 hover:text-gray-700" onClick={onToggle}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
        </button>
    </div>
);

export default SidebarHeader;