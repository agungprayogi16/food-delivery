"use client";
import { useState } from 'react';
import OrderSummary from "@/components/OrderSummary";
import foodsData from '@/data/foods.json';
import Sort from "@/components/Sort";
import Modal from "@/components/Modal";
import Filter from "@/components/Filter";

function Page() {
    const [searchTerm, setSearchTerm] = useState(""); // State for the search term
    const [sortOption, setSortOption] = useState("name-asc"); // State for sorting option
    const [selectedFood, setSelectedFood] = useState(null); // State for the selected food
    const [selectedCategory, setSelectedCategory] = useState(""); // State for the selected category
    const [myOrder, setMyOrder] = useState([]); // State for the current order

    // Extract unique categories from foodsData for filtering
    const categories = [...new Set(foodsData.map(food => food.category))];

    

    const handleOrder = (food) => {
        setMyOrder([...myOrder, food]);
    };

    const clearOrder = () => {
        setMyOrder([]);
        alert("Order cleared!");
    };

    return (
        <div className="p-14">
        

            <Filter
                categories={categories}
                selectedCategory={selectedCategory}
                onCategoryChange={setSelectedCategory}
            />
           
            <Sort
                sortOption={sortOption}
                setSortOption={setSortOption}
                searchTerm={searchTerm}
                selectedCategory={selectedCategory}
                setSelectedFood={setSelectedFood}
            />

            {/* Modal for viewing food details and purchasing */}
            <Modal food={selectedFood} closeModal={() => setSelectedFood(null)} onBuy={handleOrder} />
            <OrderSummary myOrder={myOrder} onClearOrder={clearOrder} />
        </div>
    );
}

export default Page;
