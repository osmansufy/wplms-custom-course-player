import React from 'react';
import parse from 'html-react-parser';
import { CheckCircleIcon, XCircleIcon, PrinterIcon, RetakeIcon } from '../../../icons';
import { IQuiz } from '../../../../types/quiz';

const QuizResult: React.FC<{ quizData: IQuiz, onRetake: () => void }> = ({ quizData, onRetake }) => {
  const {
    title,
    meta: { marks, max, questions, retakes },
    tags_data
  } = quizData;

  const percentage = (marks / max) * 100;


  return (
    <div className="max-w-4xl mx-auto p-4">
      {/* Quiz Header */}
      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h1 className="text-2xl font-semibold mb-2">{parse(title)}</h1>
            <div className="flex gap-4 text-gray-600">
              <span className="font-medium">Score: {marks}/{max}</span>
              <span className="font-medium">Percentage: {percentage.toFixed(1)}%</span>
              <span className="font-medium">Retakes Available: {retakes}</span>
            </div>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => window.print()}
              className="flex items-center gap-2 px-4 py-2 text-gray-600 border rounded hover:bg-gray-50"
            >
              <PrinterIcon className="w-5 h-5" />
              Print Result
            </button>
            {retakes && retakes > 0 && (
              <button onClick={onRetake} className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                <RetakeIcon className="w-5 h-5" />
                Retake Quiz
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Questions Review */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-6">Questions Review</h2>
        <div className="space-y-8">
          {questions.map((question, index) => (
            <div
              key={question.raw.key}
              className="border-b last:border-b-0 pb-8"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="flex-1">
                  <div className="text-lg mb-3">
                    {parse(question.content)}
                  </div>
                  <div className="flex items-center gap-2">
                    {Number(question.marks) > 0 ? (
                      <CheckCircleIcon className="w-5 h-5 text-green-500" />
                    ) : (
                      <XCircleIcon className="w-5 h-5 text-red-500" />
                    )}
                    <span className={Number(question.marks) > 0 ? "text-green-600" : "text-red-600"}>
                      {question.marks}/{question.max_marks} marks
                    </span>
                  </div>
                </div>
                <span className="text-sm text-gray-500 py-1 px-2 bg-gray-100 rounded">
                  Question {index + 1}
                </span>
              </div>

              <div className="space-y-3 text-gray-700 pl-4">
                {question.marked_answer && (
                  <div>
                    <span className="text-sm font-medium block mb-1">Your Answer:</span>
                    <div className="pl-4 py-2 bg-gray-50 rounded">
                      {question.marked_answer}
                    </div>
                  </div>
                )}
                <div>
                  <span className="text-sm font-medium block mb-1">Correct Answer:</span>
                  <div className="pl-4 py-2 bg-gray-50 rounded">
                    {question.correct_answer}
                  </div>
                </div>
                {question.explaination && (
                  <div>
                    <span className="text-sm font-medium block mb-1">Explanation:</span>
                    <div className="pl-4 py-2 bg-gray-50 rounded">
                      {parse(question.explaination)}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Performance by Topic */}
      {tags_data && tags_data.length > 0 && (
        <div className="bg-white rounded-lg shadow p-6 mt-6">
          <h2 className="text-xl font-semibold mb-4">Performance by Topic</h2>
          <div className="space-y-4">
            {tags_data.map((tag, index) => (
              <div key={index} className="flex items-center gap-4">
                <span className="min-w-[200px] text-gray-700">{tag.label}:</span>
                <div className="flex-1 bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${tag.value}%` }}
                  />
                </div>
                <span className="text-sm text-gray-600 w-16 text-right">
                  {tag.value}%
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default QuizResult;