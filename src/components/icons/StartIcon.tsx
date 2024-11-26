import React from "react";

interface StarIconProps {
    filled: boolean;
}

export const StarIcon = ({ filled }: StarIconProps) => (
    <svg
        className={`w-8 h-8 ${filled ? 'text-yellow-400' : 'text-gray-300'}`}
        fill={filled ? 'currentColor' : 'none'}
        stroke="currentColor"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
        />
    </svg>
);
