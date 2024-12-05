import React, { useState, useEffect } from 'react';
import { getQuizData } from '../../../../utilities/apiCall';
import { useTypedSelect } from '../../../../store';

const Quiz = ({ quizId, token }: { quizId: number, token: string }) => {
    const [quizData, setQuizData] = useState<any>(null);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedAnswers, setSelectedAnswers] = useState({});
    const [timeRemaining, setTimeRemaining] = useState(0);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [score, setScore] = useState(0);
    const [error, setError] = useState<string | null>(null);
    const { courseId } = useTypedSelect((select) => ({
        courseId: select.getCourseId(),
    }), []);
    useEffect(() => {
        const fetchQuizData = async () => {
            if (!courseId) return;
            try {
                const response = await getQuizData({
                    course: courseId, // Provide default value if courseId is null
                    token,
                    quizId
                });
                if (response) {
                    setQuizData(response);
                    setTimeRemaining((response as any)?.meta?.duration);
                }
            } catch (err) {
                setError(err instanceof Error ? err.message : 'Failed to load quiz');
            }
        };
        fetchQuizData();
    }, [courseId, quizId, token]);

    useEffect(() => {
        if (timeRemaining > 0 && !isSubmitted && quizData) {
            const timer = setInterval(() => {
                setTimeRemaining(prev => prev - 1);
            }, 1000);
            return () => clearInterval(timer);
        } else if (timeRemaining === 0 && quizData) {
            handleSubmit();
        }
    }, [timeRemaining, isSubmitted, quizData]);

    const handleAnswerSelect = (questionKey: string, optionIndex: number) => {
        setSelectedAnswers(prev => ({
            ...prev,
            [questionKey]: optionIndex
        }));
    };

    const handleSubmit = async () => {
        if (!quizData) return;

        let totalScore = 0;
        quizData.meta.questions.forEach((question: any) => {
            const correctAnswer = JSON.parse(atob(question.correct.split('.')[0]));
            if (question.key && selectedAnswers[question.key as keyof typeof selectedAnswers] === correctAnswer) {
                totalScore += parseInt(question.marks);
            }
        });
        setScore(totalScore);
        setIsSubmitted(true);
    };

    if (error) {
        return (
            <div className="bg-white rounded-lg shadow p-6 text-center">
                <div className="text-red-500 mb-4">{error}</div>
                <button
                    onClick={() => window.location.reload()}
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                    Try Again
                </button>
            </div>
        );
    }

    if (!quizData) {
        return (
            <div className="bg-white rounded-lg shadow p-6">
                <div className="flex justify-center">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
                </div>
            </div>
        );
    }

    const formatTime = (seconds: number) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
    };

    const currentQuestionData = quizData.meta.questions[currentQuestion];
    const progressPercentage = ((currentQuestion + 1) / quizData.meta.questions.length) * 100;

    return (
        <div className="max-w-3xl mx-auto p-4">
            <div className="bg-white rounded-lg shadow">
                <div className="p-6">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-xl font-bold">{quizData.title}</h2>
                        <div className="flex items-center gap-2">
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <circle cx="12" cy="12" r="10" />
                                <path d="M12 6v6l4 2" />
                            </svg>
                            <span className="font-mono">{formatTime(timeRemaining)}</span>
                        </div>
                    </div>

                    <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
                        <div
                            className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                            style={{ width: `${progressPercentage}%` }}
                        />
                    </div>

                    {!isSubmitted ? (
                        <>
                            <div className="mb-6">
                                <p className="font-medium mb-4"
                                    dangerouslySetInnerHTML={{
                                        __html: `${currentQuestion + 1}. ${currentQuestionData.content}`
                                    }}
                                />
                                <div className="space-y-3">
                                    {currentQuestionData.options.map((option: string, index: number) => (
                                        <button
                                            key={index}
                                            onClick={() => handleAnswerSelect(currentQuestionData.key, index)}
                                            className={`w-full text-left p-3 rounded border ${selectedAnswers[currentQuestionData.key as keyof typeof selectedAnswers] === index
                                                ? 'bg-blue-50 border-blue-500'
                                                : 'hover:bg-gray-50 border-gray-200'
                                                }`}
                                        >
                                            {option}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="flex justify-between">
                                <button
                                    onClick={() => setCurrentQuestion(prev => prev - 1)}
                                    disabled={currentQuestion === 0}
                                    className="px-4 py-2 border rounded hover:bg-gray-50 disabled:opacity-50"
                                >
                                    Previous
                                </button>
                                {currentQuestion === quizData.meta.questions.length - 1 ? (
                                    <button
                                        onClick={handleSubmit}
                                        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                                    >
                                        Submit Quiz
                                    </button>
                                ) : (
                                    <button
                                        onClick={() => setCurrentQuestion(prev => prev + 1)}
                                        disabled={currentQuestion === quizData.meta.questions.length - 1}
                                        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
                                    >
                                        Next
                                    </button>
                                )}
                            </div>
                        </>
                    ) : (
                        <div className="text-center">
                            <h3 className="text-2xl font-bold mb-4">Quiz Complete!</h3>
                            <p className="text-lg mb-2">Your score: {score}/{quizData.meta.max}</p>
                            <p className="text-lg mb-6">
                                Percentage: {Math.round((score / quizData.meta.max) * 100)}%
                            </p>
                            <button
                                onClick={() => window.location.reload()}
                                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                            >
                                Retake Quiz
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Quiz;