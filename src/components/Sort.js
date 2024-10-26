
export default function Sort({ sortOption, setSortOption }) {
  return (
    <div className="mb-4">
      <label className="block mb-2 text-lg  font-bold">Sort by:</label>
      <select
        value={sortOption}
        onChange={(e) => setSortOption(e.target.value)}
        className="border p-2 rounded-lg w-full"
      >
        <option value="name-asc">Name (A-Z)</option>
        <option value="name-desc">Name (Z-A)</option>
        <option value="price-asc">Price (Low to High)</option>
        <option value="price-desc">Price (High to Low)</option>
        <option value={"rating-asc"}>Rating (Low to High)</option>
        <option value={"rating-desc"}>Rating (High to Low)</option>
      </select>
    </div>
  );
}
