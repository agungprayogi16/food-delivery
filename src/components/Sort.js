// components/Sort.js
import foodsData from "@/data/foods.json";
import FoodCard from "@/components/FoodCard";

export default function Sort({ sortOption, setSortOption, searchTerm, selectedCategory, setSelectedFood }) {
  // Filter and sort foods based on the current search term, selected category, and sort option
  const filteredAndSortedFoods = foodsData
    .filter((food) => food.name.toLowerCase().includes(searchTerm.toLowerCase()))
    .filter((food) => (selectedCategory ? food.category === selectedCategory : true))
    .sort((a, b) => {
      if (sortOption === "name-asc") return a.name.localeCompare(b.name);
      if (sortOption === "name-desc") return b.name.localeCompare(a.name);
      if (sortOption === "price-asc") return a.price - b.price;
      if (sortOption === "price-desc") return b.price - a.price;
      if (sortOption === "rating-asc") return a.rating - b.rating;
      if (sortOption === "rating-desc") return b.rating - a.rating;
      return 0;
    });

  return (
    <div>
      <div className="mb-4">
        <label className="block mb-2 text-sm font-medium">Sort by:</label>
        <select
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
          className="border p-2 rounded-lg w-full"
        >
          <option value="name-asc">Name (A-Z)</option>
          <option value="name-desc">Name (Z-A)</option>
          <option value="price-asc">Price (Low to High)</option>
          <option value="price-desc">Price (High to Low)</option>
          <option value="rating-asc">Rating (Low to High)</option>
          <option value="rating-desc">Rating (High to Low)</option>
        </select>
      </div>
      {/* Render the filtered and sorted foods */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {filteredAndSortedFoods.map((food) => (
          <FoodCard key={food.id} food={food} onFoodClick={setSelectedFood} />
        ))}
      </div>
    </div>
  );
}
