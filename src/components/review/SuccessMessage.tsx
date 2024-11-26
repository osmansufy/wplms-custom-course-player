import React from "react";

export const SuccessMessage = () => (
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
