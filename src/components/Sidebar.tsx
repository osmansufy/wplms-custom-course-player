import React from 'react';
import { CourseItem } from '../types/course';

interface SidebarProps {
    curriculum: CourseItem[];
    currentUnitId: number | null;
    setCurrentUnitId: (id: number) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ curriculum, currentUnitId, setCurrentUnitId }) => {
    return (
        <div className="w-64 bg-white shadow-md overflow-y-auto">
            <div className="p-4">
                <h2 className="text-lg font-semibold mb-4">Course Content</h2>
                <ul>
                    {curriculum.map((item) => (
                        <li
                            key={item.id}
                            className={`cursor-pointer p-2 rounded ${item.id === currentUnitId ? 'bg-blue-100' : 'hover:bg-gray-100'
                                }`}
                            onClick={() => setCurrentUnitId(item.id)}
                        >
                            {item.title}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;