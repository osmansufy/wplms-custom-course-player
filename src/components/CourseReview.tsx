import React, { useEffect, useState } from 'react';
import { fetchCourseReview, submitCourseReview } from '../utilities/apiCall';
import { useSelect } from '@wordpress/data';
const token = (window as any).wplmsCustomCoursePlayer.token;
export const useModal = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    return { isOpen, toggle };
};

const Modal = ({ isOpen, onClose, children }: {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}) => {
    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4"
            onClick={onClose}
        >
            <div
                className="bg-white rounded-lg max-w-md w-full"
                onClick={e => e.stopPropagation()}
            >
                {children}
            </div>
        </div>
    );
};


const ReviewModal = ({
    isOpen,
    courseId,
    onClose,
    progress,
    courseName = "British Sign Language",
}: {
    isOpen: boolean;
    onClose: () => void;
    progress: number;
    courseId: number;
    courseName: string;
}) => {
    const [rating, setRating] = useState(5);
    const [review, setReview] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);
    const [hasReviewed, setHasReviewed] = useState(false);
    const userInfo = useSelect(select => select('custom-course-player').getUserInfo());


    console.log(userInfo);
    useEffect(() => {
        // Check if review exists
        checkExistingReview();
    }, []);

    const checkExistingReview = async () => {
        try {
            const response = await fetchCourseReview({ courseId, token });
            if (response) {
                setHasReviewed(true);
            }
        } catch (err) {
            console.error('Failed to fetch review status');
        }
    };

    const shouldShowModal = () => {
        if (hasReviewed) return false;
        return [15, 50, 100].includes(progress);
    };

    const handleSubmit = async () => {
        if (review.length < 10) {
            setError('Please write a more detailed review');
            return;
        }

        try {
            const response = await submitCourseReview({ comment_post_ID: courseId, rating, review, token });


            if (response) {
                setSuccess(true);
                setTimeout(() => {
                    onClose();
                }, 2000);
            }
        } catch (err) {
            setError('Failed to submit review');
        }
    };

    if (!isOpen || !shouldShowModal()) return null;
    if (!userInfo) return null;

    return (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg max-w-lg w-full p-6" onClick={e => e.stopPropagation()}>
                <div className="flex justify-between items-start mb-6">
                    <div>
                        <h2 className="text-2xl font-bold text-gray-800">
                            Leave a review and get featured on our course page!
                        </h2>
                        <p className="text-gray-600 mt-2">{courseName}</p>
                    </div>
                    <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                <div className="flex items-center gap-3 mb-6">
                    <img src={userInfo.avatar} alt={userInfo.name} className="w-10 h-10 rounded-full" />
                    <span className="font-medium text-gray-700">{userInfo.name}</span>
                </div>

                {error && (
                    <div className="mb-4 text-red-600 p-3 bg-red-50 rounded-md">
                        {error}
                    </div>
                )}

                {success ? (
                    <div className="text-green-600 p-3 bg-green-50 rounded-md">
                        Review submitted successfully!
                    </div>
                ) : (
                    <>
                        <div className="flex items-center gap-2 mb-6">
                            {[1, 2, 3, 4, 5].map((value) => (
                                <button
                                    key={value}
                                    onClick={() => setRating(value)}
                                    className="focus:outline-none"
                                >
                                    <svg
                                        className={`w-8 h-8 ${value <= rating ? 'text-yellow-400' : 'text-gray-300'}`}
                                        fill={value <= rating ? "currentColor" : "none"}
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
                                </button>
                            ))}
                        </div>

                        <textarea
                            value={review}
                            onChange={(e) => setReview(e.target.value)}
                            placeholder="Share your review here"
                            className="w-full h-32 p-3 border rounded-md mb-4 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        />

                        <button
                            onClick={handleSubmit}
                            className="w-full py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 font-medium"
                        >
                            Save and Continue
                        </button>
                    </>
                )}
            </div>
        </div>
    );
};


export { Modal, ReviewModal };