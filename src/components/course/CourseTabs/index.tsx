import React, { useState } from 'react';
import { MagnifyingGlassIcon, HandThumbUpIcon, HandThumbDownIcon, FlagIcon } from '@heroicons/react/24/outline';
import { useSelect } from '@wordpress/data';
import parse from 'html-react-parser';
import ReviewsContent from './ReviewsContent';
import SearchContent from './SearchContent';
import { useTypedSelect } from '../../../store';

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

const CourseTabs: React.FC = () => {

    const [activeTab, setActiveTab] = useState(0);

    const { courseId } = useTypedSelect((state) => ({
        courseId: state.getCourseId()
    }));

    const tabs = [
        {
            label: (
                <div className="flex items-center gap-2">
                    <MagnifyingGlassIcon className="w-4 h-4" />
                </div>
            ),
            content: <SearchContent />
        },
        { label: 'Overview', content: 'Overview content' },
        { label: 'Q&A', content: 'Q&A content' },
        { label: 'Notes', content: 'Notes content' },
        { label: 'Announcements', content: 'Announcements content' },
        { label: 'Reviews', content: courseId ? <ReviewsContent courseId={courseId} /> : null },
        { label: 'Learning tools', content: 'Learning tools content' }
    ];

    return (
        <div className="mt-6">
            <div className="flex border-b border-gray-200">
                {tabs.map((tab, index) => (
                    <button
                        key={index}
                        className={`px-6 py-3 text-sm font-medium transition-colors
              ${activeTab === index
                                ? 'border-b-2 border-blue-500 text-blue-600'
                                : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
                            }`}
                        onClick={() => setActiveTab(index)}
                    >
                        {typeof tab.label === 'string' ? tab.label : tab.label}
                    </button>
                ))}
            </div>

            {tabs.map((tab, index) => (
                <TabPanel key={index} value={activeTab} index={index}>
                    {tab.content}
                </TabPanel>
            ))}
        </div>
    );
};

export default CourseTabs;