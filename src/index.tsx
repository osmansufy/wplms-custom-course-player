import { createRoot } from 'react-dom/client';
import './index.css';
import React from '@wordpress/element';
import './store';
import RootContainer from './components/RootContainer';



const initializeCoursePlayer = () => {
    const container = document.getElementById('wplms-custom-course-player');
    if (container) {

        const courseId = container.getAttribute('data-course-id') || '0';
        const root = createRoot(container);
        root.render(<RootContainer courseId={courseId} />);
    }
};

document.addEventListener('DOMContentLoaded', initializeCoursePlayer);