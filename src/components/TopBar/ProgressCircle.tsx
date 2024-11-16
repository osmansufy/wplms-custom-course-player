import React from 'react';

interface ProgressCircleProps {
    progress: number;
    size?: number;
    strokeWidth?: number;
    circleColor?: string;
    progressColor?: string;
}

const ProgressCircle: React.FC<ProgressCircleProps> = ({
    progress,
    size = 42, // default size
    strokeWidth = 3,
    circleColor = 'text-gray-700',
    progressColor = 'text-green-500'
}) => {
    const center = size / 2;
    const radius = center - strokeWidth;
    const circumference = 2 * Math.PI * radius;
    const strokeDasharray = `${(progress / 100) * circumference}, ${circumference}`;

    return (
        <div className="flex items-center gap-2">
            <div className="relative">
                <svg
                    className="transform -rotate-90"
                    width={size}
                    height={size}
                    viewBox={`0 0 ${size} ${size}`}
                >
                    <circle
                        cx={center}
                        cy={center}
                        r={radius}
                        stroke="currentColor"
                        strokeWidth={strokeWidth}
                        fill="none"
                        className={circleColor}
                    />
                    <circle
                        cx={center}
                        cy={center}
                        r={radius}
                        stroke="currentColor"
                        strokeWidth={strokeWidth}
                        fill="none"
                        className={progressColor}
                        strokeDasharray={strokeDasharray}
                        strokeLinecap="round"
                    />
                </svg>
                <span className="absolute inset-0 flex items-center justify-center text-xs font-medium">
                    {progress}%
                </span>
            </div>
        </div>
    );
};

export default ProgressCircle;