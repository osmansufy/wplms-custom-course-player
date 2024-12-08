// components/quiz/MultiStepQuiz.tsx
import React, { useState, useEffect, useCallback } from 'react';
import { IQuestion, IQuizAnswers, IQuiz } from '../../../../types/quiz';


interface MultiStepQuizProps {
  quizData: IQuiz;
  onSubmit: (answers: IQuizAnswers) => void;
  initialAnswers?: IQuizAnswers;
}

const MultiStepQuiz: React.FC<MultiStepQuizProps> = ({
  quizData,
  onSubmit,
  initialAnswers = {}
}) => {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [answers, setAnswers] = useState<IQuizAnswers>(initialAnswers);
  const [timeRemaining, setTimeRemaining] = useState<number>(quizData.meta.duration);

  const totalSteps = quizData.meta.questions.length;
  const currentQuestion = quizData.meta.questions[currentStep];

  // Timer effect
  useEffect(() => {
    if (timeRemaining > 0) {
      const timer = setInterval(() => {
        setTimeRemaining(prev => prev - 1);
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [timeRemaining]);

  const formatTime = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const handleAnswer = (questionKey: string, optionIndex: number) => {
    setAnswers(prev => ({
      ...prev,
      [questionKey]: optionIndex
    }));
  };

  const handleNext = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleSubmit = () => {
    onSubmit(answers);
  };

  const handleJumpToQuestion = (index: number) => {
    setCurrentStep(index);
  };

  const isQuestionAnswered = (questionKey: string): boolean => {
    return answers[questionKey] !== undefined;
  };

  const renderQuestion = (question: IQuestion) => (
    <div className="space-y-4">
      <p
        className="text-lg font-medium"
        dangerouslySetInnerHTML={{ __html: question.content }}
      />
      <div className="space-y-2">
        {question.options.map((option: string, index: number) => (
          <button
            key={index}
            onClick={() => handleAnswer(question.key, index)}
            className={`w-full text-left p-4 rounded border transition-colors ${answers[question.key] === index
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

  const renderQuestionNav = () => (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t">
      <div className="max-w-3xl mx-auto p-4">
        <div className="grid grid-cols-6 gap-2">
          {quizData.meta.questions.map((question, index) => (
            <button
              key={index}
              onClick={() => handleJumpToQuestion(index)}
              className={`p-2 rounded ${currentStep === index
                ? 'bg-blue-500 text-white'
                : isQuestionAnswered(question.key)
                  ? 'bg-green-100'
                  : 'bg-gray-100'
                }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="pb-24">
      {/* Header */}
      <div className="bg-white border-b sticky top-0 z-10">
        <div className="max-w-3xl mx-auto p-4">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold">
              Question {currentStep + 1} of {totalSteps}
            </h2>
            <div className="flex items-center gap-4">
              <div className="text-sm font-mono">
                Time: {formatTime(timeRemaining)}
              </div>
              <div className="text-sm">
                Score: {Object.keys(answers).length}/{totalSteps}
              </div>
            </div>
          </div>

          {/* Progress bar */}
          <div className="mt-4 h-1 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-blue-500 transition-all duration-300"
              style={{
                width: `${(Object.keys(answers).length / totalSteps) * 100}%`
              }}
            />
          </div>
        </div>
      </div>

      {/* Question content */}
      <div className="max-w-3xl mx-auto p-4">
        {renderQuestion(currentQuestion)}

        {/* Navigation buttons */}
        <div className="mt-6 flex justify-between">
          <button
            onClick={handlePrevious}
            disabled={currentStep === 0}
            className="px-4 py-2 border rounded hover:bg-gray-50 disabled:opacity-50"
          >
            Previous
          </button>

          {currentStep === totalSteps - 1 ? (
            <button
              onClick={handleSubmit}
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
            >
              Submit Quiz
            </button>
          ) : (
            <button
              onClick={handleNext}
              disabled={currentStep === totalSteps - 1}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
            >
              Next
            </button>
          )}
        </div>
      </div>

      {/* Question navigation */}
      {renderQuestionNav()}
    </div>
  );
};

export default MultiStepQuiz;