import React from 'react';
import { RatingStars } from './RatingStars';

interface ReviewFormProps {
    rating: number;
    review: string;
    error: string;
    isLoading: boolean;
    onRatingChange: (value: number) => void;
    onReviewChange: (value: string) => void;
    onSubmit: () => void;
}

export const ReviewForm: React.FC<ReviewFormProps> = ({
    rating,
    review,
    error,
    isLoading,
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
            disabled={isLoading}
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
                disabled={review.length < 10 || isLoading}
            >
                {isLoading ? 'Submitting...' : 'Submit Review'}
            </button>
        </div>
    </>
);
