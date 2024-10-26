import React from "react";
import {
    FontAwesomeIcon
} from '@fortawesome/react-fontawesome';
import {
    faBurger,
    faPizzaSlice,
    faUtensils,
    faFish,
    faIceCream,
    faList
} from '@fortawesome/free-solid-svg-icons';

const Filter = ({ selectedCategory, onCategoryChange }) => {
    return (
        <div className="flex flex-wrap rounded-full mb-4">
           
            {/* Fast Food Button */}
            <button
                onClick={() => onCategoryChange("Fast Food")}
                className={`mr-2 mb-2 px-4 py-2 rounded-md ${selectedCategory === "Fast Food"
                    ? "bg-custom-pink text-white"
                    : "bg-white text-gray-800"
                    } hover:bg-custom-pink hover:text-white transition flex items-center`}
            >
                <FontAwesomeIcon icon={faBurger} className="w-5 h-5 mr-2" />
                Fast Food
            </button>
            {/* Italian Button */}
            <button
                onClick={() => onCategoryChange("Italian")}
                className={`mr-2 mb-2 px-4 py-2 rounded-md ${selectedCategory === "Italian"
                    ? "bg-custom-pink text-white"
                    : "bg-white text-gray-800"
                    } hover:bg-custom-pink hover:text-white transition flex items-center`}
            >
                <FontAwesomeIcon icon={faPizzaSlice} className="w-5 h-5 mr-2" />
                Italian
            </button>
            {/* Asian Food Button */}
            <button
                onClick={() => onCategoryChange("Asian")}
                className={`mr-2 mb-2 px-4 py-2 rounded-md ${selectedCategory === "Asian Food"
                    ? "bg-custom-pink text-white"
                    : "bg-white text-gray-800"
                    } hover:bg-custom-pink hover:text-white transition flex items-center`}
            >
                <FontAwesomeIcon icon={faUtensils} className="w-5 h-5 mr-2" />
                Asian Food
            </button>
            {/* Japanese Button */}
            <button
                onClick={() => onCategoryChange("Japanese")}
                className={`mr-2 mb-2 px-4 py-2 rounded-md ${selectedCategory === "Japanese"
                    ? "bg-custom-pink text-white"
                    : "bg-white text-gray-800"
                    } hover:bg-custom-pink hover:text-white transition flex items-center`}
            >
                <FontAwesomeIcon icon={faFish} className="w-5 h-5 mr-2" />
                Japanese
            </button>
            {/* Dessert Button */}
            <button
                onClick={() => onCategoryChange("Dessert")}
                className={`mr-2 mb-2 px-4 py-2 rounded-md ${selectedCategory === "Dessert"
                    ? "bg-custom-pink text-white"
                    : "bg-white text-gray-800"
                    } hover:bg-custom-pink hover:text-white transition flex items-center`}
            >
                <FontAwesomeIcon icon={faIceCream} className="w-5 h-5 mr-2" />
                Dessert
            </button>
            {/* All Button */}
            <button
                onClick={() => onCategoryChange("")} // Reset filter
                className={`mr-2 mb-2 px-4 py-2 rounded-md ${selectedCategory === ""
                    ? "bg-custom-pink text-white"
                    : "bg-white text-gray-800"
                    } hover:bg-custom-pink hover:text-white transition flex items-center`}
            >
                <FontAwesomeIcon icon={faList} className="h-5 w-5 mr-2" />
                All
            </button>
        </div>
    );
};

export default Filter;
