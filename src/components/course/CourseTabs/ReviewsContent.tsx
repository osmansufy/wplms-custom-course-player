import { MagnifyingGlassIcon, HandThumbUpIcon, HandThumbDownIcon, FlagIcon } from "@heroicons/react/24/outline";
import parse from "html-react-parser";
import React from "react";
import { ICourseReview } from "../../../types/comment";
import { useDispatch, useSelect } from "@wordpress/data";
import coursePlayerStore, { useTypedDispatch, useTypedSelect } from "../../../store";
import StarRating from "./StarRating"


const ReviewsContent: React.FC<{ courseId: number }> = ({ courseId }) => {


    const { reviewList, hasReview } = useTypedSelect((state) => ({
        reviewList: state.getReviewList(courseId),
        hasReview: state.hasReview()
    }), [courseId]);

    const { setReviewModalOpen } = useDispatch(coursePlayerStore.name);
    console.log({ reviewList });
    const mockReviews: ICourseReview[] = [
        {
            id: 1,
            title: 'Great course!',
            member: {
                id: 1,
                name: 'Dhaval V.',
                avatar: '',
                sub: ''
            },
            rating: 5,
            date: 'a week ago',
            content: 'This course is absolutely perfect for anyone looking to start with GitHub Actions and progress from beginner to expert. Thank you so much for creating such an outstanding and insightful course!'
        }
    ];

    if (!courseId) {
        return null;
    }

    return (
        <div className="space-y-8">
            <div className="flex items-start gap-8">
                <div className="text-center">
                    <div className="text-6xl font-bold text-orange-500">4.7</div>
                    <StarRating rating={4.7} size="lg" />
                    <div className="text-gray-600 mt-1">Course Rating</div>
                </div>
                <div className="flex-1 space-y-2">
                    {[
                        { stars: 5, percentage: 69 },
                        { stars: 4, percentage: 27 },
                        { stars: 3, percentage: 4 },
                        { stars: 2, percentage: 1 },
                        { stars: 1, percentage: 1 }
                    ].map((rating) => (
                        <div key={rating.stars} className="flex items-center gap-2">
                            <StarRating rating={rating.stars} />
                            <div className="flex-1 h-4 bg-gray-200 rounded">
                                <div
                                    className="h-full bg-orange-400 rounded"
                                    style={{ width: `${rating.percentage}%` }}
                                />
                            </div>
                            <div className="text-sm text-gray-600 min-w-[40px]">
                                {rating.percentage}%
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="space-y-4">
                <div className="flex justify-between items-center">
                    <h2 className="text-xl font-bold">Reviews</h2>
                    <select className="border p-2 rounded-md">
                        <option>All ratings</option>
                    </select>
                </div>

                <div className="relative">
                    <input
                        type="text"
                        placeholder="Search reviews"
                        className="w-full pl-4 pr-12 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button className="absolute right-3 top-1/2 -translate-y-1/2 p-1 hover:bg-gray-100 rounded-full">
                        <MagnifyingGlassIcon className="w-5 h-5 text-gray-500" />
                    </button>
                </div>

                <div className="space-y-6">
                    {reviewList?.length === 0 ? (
                        <div className="text-center py-8">
                            <h3 className="text-xl font-semibold text-gray-700 mb-2">No reviews yet</h3>
                            <p className="text-gray-600">Be the first to review this course</p>
                            {
                                !hasReview && <button className="mt-4 bg-orange-500 text-white px-4 py-2 rounded-md" onClick={() => setReviewModalOpen(true)}>Write a review</button>
                            }
                        </div>
                    ) : (
                        reviewList?.map((review: ICourseReview) => (
                            <div key={review.id} className="border-b pb-6">
                                <div className="flex items-center gap-4 mb-3">
                                    <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-gray-600">
                                        {review.member?.avatar && <img src={review.member.avatar} alt={review.member.name} className="w-full h-full object-cover rounded-full" />}
                                    </div>
                                    <div>
                                        <div className="font-medium">{review.member.name}</div>
                                        <div className="flex items-center gap-2">
                                            <StarRating rating={review.rating} />
                                            <span className="text-gray-500 text-sm">{review.date}</span>
                                        </div>
                                    </div>
                                </div>
                                <p className="text-gray-700 mb-4">{review.content}</p>
                                <div className="flex items-center gap-4">
                                    <button className="flex items-center gap-1 text-gray-600 hover:text-gray-800">
                                        <HandThumbUpIcon className="w-4 h-4" />
                                        Helpful
                                    </button>
                                    <button className="flex items-center gap-1 text-gray-600 hover:text-gray-800">
                                        <HandThumbDownIcon className="w-4 h-4" />
                                        Not helpful
                                    </button>
                                    <button className="flex items-center gap-1 text-gray-600 hover:text-gray-800">
                                        <FlagIcon className="w-4 h-4" />
                                        Report
                                    </button>
                                </div>
                            </div>
                        ))
                    )}



                </div>
            </div>
        </div>
    );
};

export default ReviewsContent;