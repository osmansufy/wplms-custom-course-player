// components/quiz/QuizContainer.tsx
import React, { useState, useEffect } from 'react';
import { getQuizData, quizRetake, startQuiz, submitQuiz } from '../../../../utilities/apiCall';
import QuizStart from './QuizStart';
import QuizQuestions from './QuizQuestions';
import QuizResults from './QuizResults';
import LoadingState from './LoadingState';
import ErrorState from './ErrorState';
import { IQuiz } from '../../../../types/quiz';

export enum QuizStep {
    START = 'start',
    QUESTIONS = 'questions',
    RESULTS = 'results'
}

const QuizContainer = ({ courseId, quizId }: {
    courseId: number | null;
    quizId: number | null;
}) => {

    if (!courseId || !quizId) {
        return null;
    }
    const [quizData, setQuizData] = useState<IQuiz | null>(null);
    const [currentStep, setCurrentStep] = useState(QuizStep.START);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);

    const token = (window as any).wplmsCustomCoursePlayer.token;
    const fetchQuizData = async () => {
        try {
            setLoading(true);
            const data = await getQuizData({ course: courseId, quizId, token });

            setQuizData(data);
            if (data.submitted) {
                setCurrentStep(QuizStep.RESULTS);
            } else if (data.start) {
                setCurrentStep(QuizStep.QUESTIONS);
            }
        } catch (err) {
            setError('Failed to load quiz');
        } finally {
            setLoading(false);
        }
    };
    const onHandleRetake = async () => {
        try {
            setLoading(true);
            const response = await quizRetake({ courseId, quizId, token });
            if ((response as { status: boolean }).status) {
                await fetchQuizData();
                setCurrentStep(QuizStep.START);
            }
        } catch (err) {
            setError('Failed to start quiz');
        } finally {
            setLoading(false);
        }
    }


    useEffect(() => {
        fetchQuizData();
    }, [courseId, quizId]);

    const handleStartQuiz = async () => {
        try {
            setLoading(true);
            const response = await startQuiz({ courseId, quizId, token });
            if ((response as { status: boolean }).status) {
                await fetchQuizData();
                setCurrentStep(QuizStep.QUESTIONS);
            }
        } catch (err) {
            setError('Failed to start quiz');
        } finally {
            setLoading(false);
        }
    };

    const handleSubmitQuiz = async (answers: any) => {
        if (!courseId || !quizData) {
            return;
        }
        try {
            setLoading(true);


            await submitQuiz({
                courseId,
                quizData,
                token,
                answers
            });
            await fetchQuizData();
            setCurrentStep(QuizStep.RESULTS);
        } catch (err) {
            setError('Failed to submit quiz');
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return <LoadingState />;
    }

    if (error) {
        return <ErrorState error={error} onRetry={fetchQuizData} />;
    }

    if (!quizData) {
        return null;
    }

    const renderStep = () => {
        switch (currentStep) {
            case QuizStep.START:
                return (
                    <QuizStart
                        quizData={quizData}
                        onStart={handleStartQuiz}
                    />
                );
            case QuizStep.QUESTIONS:
                return (
                    <QuizQuestions
                        quizData={quizData}
                        onSubmit={handleSubmitQuiz}
                    />
                );
            case QuizStep.RESULTS:
                return (
                    <QuizResults
                        quizData={quizData}
                        onRetake={onHandleRetake}
                    />
                );
            default:
                return null;
        }
    };

    return (
        <div className="bg-white rounded-lg shadow max-h-[400px] overflow-scroll">
            {renderStep()}
        </div>
    );
};

export default QuizContainer;