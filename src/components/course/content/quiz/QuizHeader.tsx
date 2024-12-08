import React from 'react';

const QuizHeader = ({ title,
}: {
    title: string;
}) => {
    return (
        <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold">{title}</h1>

        </div>

    );
};

export default QuizHeader;