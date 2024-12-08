import React from 'react';
import { useTypedSelect } from '../../../store';
import ContentArea from './ContentArea';
import QuizContainer from './quiz';
interface ContentProps {
    isSidebarOpen: boolean;
}
const Content = ({
    isSidebarOpen
}: ContentProps) => {
    const { currentUnit, courseId } = useTypedSelect((select) => ({
        currentUnit: select.getCurrentUnit(),
        courseId: select.getCourseId()
    }), []);

    // quiz component

    if (currentUnit?.type === 'quiz') {
        return <QuizContainer quizId={currentUnit.id} courseId={courseId ?? null} />
    }

    return (
        <ContentArea isSidebarOpen={isSidebarOpen} />
    );
};

export default Content;