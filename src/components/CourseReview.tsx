import React, { useEffect, useState } from 'react';
import { useSelect } from '@wordpress/data';
import { fetchCourseReview, submitCourseReview } from '../utilities/apiCall';
import { IComment } from '../types/comment';

const StarIcon = ({ filled }: { filled: boolean }) => (
    <svg
        className={`w-8 h-8 ${filled ? 'text-yellow-400' : 'text-gray-300'}`}
        fill={filled ? "currentColor" : "none"}
        stroke="currentColor"
        viewBox="0 0 24 24"
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
        />
    </svg>
);

const RatingStars = ({ rating, onRatingChange }: { rating: number, onRatingChange: (value: number) => void }) => (
    <div className="flex items-center gap-2 mb-6">
        {[1, 2, 3, 4, 5].map((value) => (
            <button
                key={value}
                onClick={() => onRatingChange(value)}
                className="focus:outline-none transition-transform hover:scale-110"
                aria-label={`Rate ${value} stars`}
            >
                <StarIcon filled={value <= rating} />
            </button>
        ))}
    </div>
);

interface ReviewFormProps {
    rating: number;
    review: string;
    error: string;
    onRatingChange: (value: number) => void;
    onReviewChange: (value: string) => void;
    onSubmit: () => void;
}

const ReviewForm: React.FC<ReviewFormProps> = ({
    rating,
    review,
    error,
    onRatingChange,
    onReviewChange,
    onSubmit
}) => (
    <>
        <RatingStars rating={rating} onRatingChange={onRatingChange} />
        <textarea
            value={review}
            onChange={(e) => onReviewChange(e.target.value)}
            placeholder="Share your thoughts about this course..."
            className="w-full h-32 p-3 border rounded-md mb-4 focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none"
            maxLength={500}
        />
        {error && (
            <div className="mb-4 text-red-600 p-3 bg-red-50 rounded-md">
                {error}
            </div>
        )}
        <div className="flex justify-between items-center">
            <span className="text-sm text-gray-500">
                {500 - review.length} characters remaining
            </span>
            <button
                onClick={onSubmit}
                className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 
                 font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={review.length < 10}
            >
                Submit Review
            </button>
        </div>
    </>
);

const SuccessMessage = () => (
    <div className="text-center py-8">
        <div className="mb-4 text-green-500">
            <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        </div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Thank you for your review!
        </h3>
        <p className="text-gray-600">
            Your feedback helps improve the course for future students.
        </p>
    </div>
);

interface ReviewModalProps {
    isOpen: boolean;
    courseId: number | undefined;
    onClose: () => void;
    progress: number;
    courseName?: string;
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
    const [hasReviewed, setHasReviewed] = useState(false);

    const userInfo = useSelect(select =>
        select('custom-course-player').getUserInfo() || {}
    );

    useEffect(() => {
        const checkExistingReview = async () => {
            try {
                const token = (window as any).wplmsCustomCoursePlayer?.token;
                if (courseId) {
                    const response = await fetchCourseReview({ courseId: courseId, token: token }) as IComment
                    console.log({ response });
                    if (response.comment_ID) {
                        setHasReviewed(true);
                    } else {
                        setHasReviewed(false);
                    }
                }
            } catch (err) {
                console.error('Failed to fetch review status:', err);
            }
        };

        if (isOpen && courseId) {
            checkExistingReview();
        }
    }, [isOpen, courseId]);

    const shouldShowModal = () => {
        if (hasReviewed) return false;
        return progress >= 15;
    };

    const handleSubmit = async () => {
        if (review.length < 10) {
            setError('Please write a more detailed review (minimum 10 characters)');
            return;
        }

        try {
            const token = (window as any).wplmsCustomCoursePlayer?.token;
            const response = await submitCourseReview({
                rating,
                review,
                token,
                comment_post_ID: courseId || 0
            })


            if (!response) {
                setError('Failed to submit review. Please try again later.');
                return;
            }

            setSuccess(true);
            setTimeout(onClose, 2000);
            onReviewSuccess?.();
        } catch (err) {
            setError('Failed to submit review. Please try again later.');
        }
    };
    console.log({ hasReviewed });
    if (!isOpen || !shouldShowModal()) return null;

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
                    />
                )}
            </div>
        </div>
    );
}