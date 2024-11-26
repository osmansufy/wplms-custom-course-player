import React from 'react';
import { StarIcon } from '../icons/StartIcon';

interface RatingStarsProps {
    rating: number;
    onRatingChange: (value: number) => void;
}

export const RatingStars = ({ rating, onRatingChange }: RatingStarsProps) => (
    <div className="flex items-center gap-1 mb-6">
        {[1, 2, 3, 4, 5].map((value) => (
            <button
                key={value}
                onClick={() => onRatingChange(value)}
                className="bg-transparent transition-transform hover:scale-110"
                aria-label={`Rate ${value} stars`}
            >
                <StarIcon filled={value <= rating} />
            </button>
        ))}
    </div>
);
