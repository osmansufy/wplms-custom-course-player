import React from "react";
import parse from "html-react-parser";

// components/quiz/Question.tsx
const Question = ({ question, index, selectedAnswer, onSelect }: {
    question: Record<string, any>;
    index: number;
    selectedAnswer: number;
    onSelect: (optionIndex: number) => void;
}) => (
    <div className="border-b pb-6">
        <p
            className="font-medium mb-4"

        >
            {
                parse(question.content)
            }
        </p>
        <div className="space-y-3">
            {question.options.map((option: string, optionIndex: number) => (
                <button
                    key={optionIndex}
                    onClick={() => onSelect(optionIndex)}
                    className={`w-full text-left p-3 rounded border ${selectedAnswer === optionIndex
                        ? 'bg-blue-50 border-blue-500'
                        : 'hover:bg-gray-50 border-gray-200'
                        }`}
                >
                    {option}
                </button>
            ))}
        </div>
    </div>
);

export default Question;