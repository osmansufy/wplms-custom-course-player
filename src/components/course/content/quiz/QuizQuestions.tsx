import { useEffect } from "@wordpress/element";
import React from "react";
import QuizHeader from "./QuizHeader";
import MultiStepQuiz from "./MultiStepQuiz";
import { IQuiz } from "../../../../types/quiz";

const QuizQuestions = ({
  quizData,
  onSubmit
}: {
  quizData: IQuiz;
  onSubmit: (answers: Record<string, number>) => void;
}) => {

  return (
    <div className="p-6">
      <QuizHeader
        title={quizData.title}
      />

      <MultiStepQuiz
        quizData={quizData}
        onSubmit={onSubmit}
      />
    </div>
  );
};

export default QuizQuestions;