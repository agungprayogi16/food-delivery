"use client";
import { useState } from 'react';
import FoodCard from '@/components/FoodCard';
import foodsData from '@/data/foods.json';
import Sort from "@/components/Sort";
import Modal from "@/components/Modal";
import Filter from "@/components/Filter";
import OrderSummary from '@/components/OrderSummary';

function Page() {
    const [searchTerm, setSearchTerm] = useState(""); 
    const [sortOption, setSortOption] = useState("name-asc"); 
    const [selectedFood, setSelectedFood] = useState(null); 
    const [selectedCategory, setSelectedCategory] = useState(""); 
    const [myOrder, setMyOrder] = useState([]);

  
    const categories = [...new Set(foodsData.map(food => food.category))];

    const handleOrder = (food) => {
        setMyOrder([...myOrder, food]);
    };

    const clearOrder = () => {
        setMyOrder([]);
        alert("Order cleared!");
    };

    // Filter foods based on searchTerm and selectedCategory
    const filteredFoods = foodsData.filter(food => {
        const matchesCategory = selectedCategory === "" || food.category === selectedCategory;
        const matchesSearch = food.name.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    // Sort filtered foods based on sortOption
    const sortedFoods = filteredFoods.sort((a, b) => {
        if (sortOption === "name-asc") return a.name.localeCompare(b.name);
        if (sortOption === "name-desc") return b.name.localeCompare(a.name);
        if (sortOption === "price-asc") return a.price - b.price;
        if (sortOption === "price-desc") return b.price - a.price;
        return 0; // Default case (no sorting)
    });

    return (
        <div className="p-10">
           

            {/* Sort Component */}
            <Sort
                sortOption={sortOption}
                setSortOption={setSortOption}
                searchTerm={searchTerm}
                selectedCategory={selectedCategory}
                setSelectedFood={setSelectedFood}
            />

            {/* Filter Component */}
            <Filter
                categories={categories}
                selectedCategory={selectedCategory}
                onCategoryChange={setSelectedCategory}
            />

            {/* Food Cards Display */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {sortedFoods.map((food) => (
                    <FoodCard key={food.id} food={food} onFoodClick={setSelectedFood} />
                ))}
            </div>

            {/* Order Summary */}
            <OrderSummary
                myOrder={myOrder}
                clearOrder={clearOrder}
            />

            {/* Modal for viewing food details and purchasing */}
            <Modal food={selectedFood} closeModal={() => setSelectedFood(null)} onBuy={handleOrder} />
        </div>
    );
}

export default Page;
