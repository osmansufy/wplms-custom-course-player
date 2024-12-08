import React from "react";

const QuizStart = ({ quizData, onStart }: {
    quizData: Record<string, any>;
    onStart: () => void;
}) => (
    <div className="p-6">
        <h2 className="text-xl font-bold mb-4">{quizData.title}</h2>
        <div className="mb-6 space-y-2">
            <p>Total Questions: {quizData.meta.questions.length}</p>
            <p>Duration: {Math.floor(quizData.meta.duration / 60)} minutes</p>
            <p>Maximum Score: {quizData.meta.max}</p>
            {quizData.meta.quiz_passing_score > 0 && (
                <p>Passing Score: {quizData.meta.quiz_passing_score}%</p>
            )}
        </div>
        <button
            onClick={onStart}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
            Start Quiz
        </button>
    </div>
);

export default QuizStart;