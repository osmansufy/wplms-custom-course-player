import React from 'react';
import { ICourse, IUnitItem } from '../types/course';

interface ContentAreaProps {
    courseData: IUnitItem | null;
    currentUnitId: number | null;
}

const ContentArea: React.FC<ContentAreaProps> = ({ courseData, currentUnitId }) => {

    if (!courseData) {
        return null;
    }
    return (
        <div className="flex-1 p-4">
            <h2 className="text-lg font-semibold mb-4">{courseData.title}</h2>
            <div dangerouslySetInnerHTML={{ __html: courseData.content }} />
        </div>
    );
};

export default ContentArea;