import React from "react";
import { ShoppingCartIcon, } from "@heroicons/react/24/outline"; // Import relevant icons

const categoryIcons = {





};

const Filter = ({ categories, selectedCategory, onCategoryChange }) => {
    return (
        <div className="flex flex-wrap mb-4">
            <h3 className="text-xl font-semibold mr-4">Filter by Category:</h3>
            {categories.map((category) => (
                <button
                    key={category}
                    onClick={() => onCategoryChange(category)}
                    className={`mr-2 mb-2 px-4 py-2 rounded-md ${selectedCategory === category
                        ? "bg-custom-pink text-white"
                        : "bg-white text-gray-800"
                        } hover:bg-custom-pink hover:text-white transition flex items-center`}
                >
                    {categoryIcons[category] || null} {/* Render the icon for the category */}
                    {category}
                </button>
            ))}
            <button
                onClick={() => onCategoryChange("")} // Reset filter
                className={`mr-2 mb-2 px-4 py-2 rounded-md ${selectedCategory === ""
                    ? "bg-custom-pink text-white"
                    : "bg-white text-gray-800"
                    } hover:bg-custom-pink hover:text-white transition flex items-center`}
            >
                <ShoppingCartIcon className="h-5 w-5 mr-2" />
                All
            </button>
        </div>
    );
};

export default Filter;
