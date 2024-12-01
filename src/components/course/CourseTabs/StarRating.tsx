import React from "react";

interface StarRatingProps {
    rating: number;
    showNumber?: boolean;
    size?: 'sm' | 'lg';
}

const StarRating: React.FC<StarRatingProps> = ({ rating, showNumber = false, size = 'sm' }) => {
    const textSize = size === 'lg' ? 'text-6xl' : 'text-sm';
    const starSize = size === 'lg' ? 'text-2xl' : 'text-sm';

    return (
        <div className="flex items-center gap-1">
            {showNumber && <span className={`font-bold text-orange-500 ${textSize}`}>{rating}</span>}
            <div className={`flex text-orange-400 ${starSize}`}>
                {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star}>{star <= rating ? '★' : '☆'}</span>
                ))}
            </div>
        </div>
    );
};

export default StarRating;