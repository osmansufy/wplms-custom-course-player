import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import React from "react";

const SearchContent: React.FC = () => {
    return (
        <div className="space-y-6">
            <div className="max-w-2xl">
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Search course content"
                        className="w-full pl-4 pr-12 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button className="absolute right-3 top-1/2 -translate-y-1/2 p-1 hover:bg-gray-100 rounded-full">
                        <MagnifyingGlassIcon className="w-5 h-5 text-gray-500" />
                    </button>
                </div>
            </div>
            <div className="text-center py-8">
                <h3 className="text-xl font-semibold text-gray-700 mb-2">Start a new search</h3>
                <p className="text-gray-600">To find captions, lectures or resources</p>
            </div>
        </div>
    );
};

export default SearchContent;