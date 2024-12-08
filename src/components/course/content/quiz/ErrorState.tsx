import React from "react";

// components/quiz/ErrorState.tsx
const ErrorState = ({ error, onRetry }: {
    error: string;
    onRetry: () => void;
}) => (
    <div className="bg-white rounded-lg shadow p-6">
        <div className="text-red-500 mb-4">{error}</div>
        <button
            onClick={onRetry}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
            Retry
        </button>
    </div>
);

export default ErrorState;