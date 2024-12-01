import React from 'react';

interface TabPanelProps {
    children: React.ReactNode;
    value: number;
    index: number;
}

const TabPanel: React.FC<TabPanelProps> = ({ children, value, index }) => {
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            className="p-6 bg-white rounded-b-lg border-t border-gray-200"
        >
            {value === index && children}
        </div>
    );
};

export default TabPanel; 