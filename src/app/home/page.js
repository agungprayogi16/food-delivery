"use client";

import { useState } from "react";
import Link from "next/link";
import OrderSummary from "@/components/OrderSummary";
import SearchBar from "@/components/SearchBar";
import FoodCard from "@/components/FoodCard";
import Sort from "@/components/Sort";
import Modal from "@/components/Modal";
import Filter from "@/components/Filter";
import foodsData from "@/data/foods.json";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import {
  FontAwesomeIcon
} from '@fortawesome/react-fontawesome';

export default function HomePage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("name-asc");
  const [selectedFood, setSelectedFood] = useState(null);
  const [myOrder, setMyOrder] = useState([]);

  const [selectedCategory, setSelectedCategory] = useState(""); 

  // Extract unique categories from foodsData
  const categories = [...new Set(foodsData.map((food) => food.category))];

  const filteredFoods = foodsData
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

  const handleOrder = (food) => {
    setMyOrder([...myOrder, food]);
  };

  const clearOrder = () => {
    setMyOrder([]);
    alert("Order cleared!");
  };




  return (
    <>
      <div className="flex w-full  lg:p-3 lg:flex-row flex-col">


        <div className="flex h-screen w-full flex-col lg:ml-20 p-4 ">
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <div className="flex flex-col justify-center mb-4">
            <div className="flex flex-col justify-center bg-white rounded-lg shadow-md p-4 md:p-4">
              <div className="flex flex-col md:flex-row justify-between items-center mb-4 gap-4">
                <img
                  src="https://i.pinimg.com/564x/57/53/cc/5753ccfa7ba513e51ab99523cb06aa18.jpg"
                  alt="Dessert"
                  className="w-full h-40 object-cover rounded md:w-1/2"
                />
                <div className="md:w-1/2 text-center md:text-left">
                  <h4 className="text-3xl font-bold text-custom-pink">Dessert FOR FREE</h4>
                  <p>Make your first order for $50 and get dessert from our bakery for free!</p>
                </div>
              </div>
              <div className="flex flex-col justify-end p-1">
                <Link href="/order" className="flex justify-end mr-4">
                  <i>Learn more</i>
                  <FontAwesomeIcon icon={faArrowRight} className="mt-2 items-end ml-2 flex justify-center" />
                </Link>
              </div>
            </div>
          </div>
          <div className="mb-8 flex flex-col">

            <h1 className="text-4xl font-bold ">Restaurants</h1>
            <p className="text-gray-600 ">
              selected category you like to eat from
            </p>
          </div>
          <Sort sortOption={sortOption} setSortOption={setSortOption} />

          {/* Filter */}
          <Filter
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {filteredFoods.map((food) => (
              <FoodCard key={food.id} food={food} onFoodClick={setSelectedFood} />
            ))}
          </div>

          {/* Modal for viewing food details and purchasing */}
          <Modal food={selectedFood} closeModal={() => setSelectedFood(null)} onBuy={handleOrder} />
        </div>

        <div className="flex flex-col mt-[2465px] lg:mt-0 w-full lg:w-1/4 rounded-lg p-6">
          <OrderSummary myOrder={myOrder} onClearOrder={clearOrder} />
        </div>
      </div>
    </>
  );
}
