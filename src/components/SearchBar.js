// src/components/SearchBar.js
import { MagnifyingGlassIcon, FilterIcon } from '@heroicons/react/24/outline'; // Correctly import icons

export default function SearchBar({ searchTerm, setSearchTerm, onFilterClick }) {
    return (
        <div className="relative mb-6 w-3/5 "> {/* Set relative position for icons */}
            <MagnifyingGlassIcon className="absolute left-3 top-3 h-5 w-5 text-gray-500" /> {/* Search icon */}
            <input
                type="text"
                className="border border-gray-300 p-2 rounded-full pl-10 pr-12 w-full text-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Search "
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            {FilterIcon && ( // Check if FilterIcon is defined
                <FilterIcon
                    className="absolute right-3 top-2 h-5 w-5 text-gray-500 cursor-pointer" // Filter icon
                    onClick={onFilterClick} // Function for filter icon
                />
            )}
        </div>
    );
}
