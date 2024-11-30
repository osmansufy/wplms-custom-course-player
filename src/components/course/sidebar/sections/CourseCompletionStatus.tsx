import React from 'react';

interface CourseCompletionStatusProps {
    isCompleted: boolean;
    completionMessage: string;
    onFinishCourse: () => void;
}

export const CourseCompletionStatus: React.FC<CourseCompletionStatusProps> = ({
    isCompleted,
    completionMessage,
    onFinishCourse
}) => {
    if (isCompleted) {
        return (
            <div className="p-4 bg-green-100 rounded-lg">
                <p className="text-sm text-green-800">
                    Congratulations! You've completed this course.
                </p>
            </div>
        );
    }

    return (
        <div className="p-4 bg-green-50 rounded-lg">
            <p className="text-sm text-green-800 mb-2">
                {completionMessage}
            </p>
            <button
                onClick={onFinishCourse}
                className="w-full py-2 px-4 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
            >
                Complete Course
            </button>
        </div>
    );
}; 