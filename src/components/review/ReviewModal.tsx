import React, { useEffect, useState } from 'react';
import { useDispatch } from '@wordpress/data';
import { ReviewForm } from './ReviewForm';
import { SuccessMessage } from './SuccessMessage';
import { useTypedSelect } from '../../store';
import { State } from '../../store/types';

interface ReviewModalProps {
    isOpen: boolean;
    courseId: number | null;
    onClose: () => void;
    progress: number;
    courseName?: string | null;
    onReviewSuccess?: () => void;
}

export default function ReviewModal({
    isOpen,
    courseId,
    onClose,
    progress,
    courseName = "Course",
    onReviewSuccess
}: ReviewModalProps) {
    const [rating, setRating] = useState(5);
    const [review, setReview] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);
    const dispatch = useDispatch();

    const { userInfo, currentReview, isLoading } = useTypedSelect((select) => ({
        userInfo: select.getUserInfo(),
        currentReview: select.getCourseReview(courseId || 0),
        isLoading: select.isLoadingUserInfo(),
    }), [courseId]);


    useEffect(() => {
        if (currentReview) {
            setRating(currentReview.rating || 5);
            setReview(currentReview.content || '');
        }
    }, [currentReview]);

    const handleSubmit = async () => {
        if (review.length < 10) {
            setError('Please write a more detailed review (minimum 10 characters)');
            return;
        }

        try {
            await dispatch('custom-course-player').submitCourseReview({
                rating,
                review,
                courseId: courseId || 0
            });

            setSuccess(true);
            setTimeout(() => {
                onClose();
                onReviewSuccess?.();
            }, 2000);
        } catch (err) {
            setError('Failed to submit review. Please try again later.');
        }
    };
    console.log('isOpen', isOpen);
    if (!isOpen) return null;
    return (
        <div
            className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4"
            onClick={onClose}
        >
            <div
                className="bg-white rounded-lg max-w-lg w-full p-6 shadow-xl"
                onClick={e => e.stopPropagation()}
            >
                <div className="flex justify-between items-start mb-6">
                    <div>
                        <h2 className="text-2xl font-bold text-gray-800">
                            Share Your Experience
                        </h2>
                        <p className="text-gray-600 mt-2">{courseName}</p>
                    </div>
                    <button
                        onClick={onClose}
                        className="text-gray-400 hover:text-gray-600 transition-colors"
                        aria-label="Close modal"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {userInfo?.avatar && (
                    <div className="flex items-center gap-3 mb-6">
                        <img
                            src={userInfo.avatar}
                            alt={userInfo.name || 'User avatar'}
                            className="w-10 h-10 rounded-full"
                        />
                        <span className="font-medium text-gray-700">
                            {userInfo.name || 'Anonymous'}
                        </span>
                    </div>
                )}

                {success ? (
                    <SuccessMessage />
                ) : (
                    <ReviewForm
                        rating={rating}
                        review={review}
                        error={error}
                        onRatingChange={setRating}
                        onReviewChange={setReview}
                        onSubmit={handleSubmit}
                        isLoading={isLoading} />
                )}
            </div>
        </div>
    );
}