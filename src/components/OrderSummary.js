"use client";

import React, { useState } from "react";
import { MapPinIcon, UserIcon, XMarkIcon } from "@heroicons/react/24/outline";
import userData from "@/data/userData.json";

export default function OrderSummary({ myOrder, onClearOrder }) {
    const [successMessage, setSuccessMessage] = useState("");
    const [cardNumber, setCardNumber] = useState("");
    const [expiryDate, setExpiryDate] = useState("");
    const [cvv, setCvv] = useState("");
    const [quantities, setQuantities] = useState(myOrder.map(() => 1));

    const deliveryCostPerKm = 10;

    const totalPrice = myOrder.reduce(
        (total, food, index) => total + food.price * (quantities[index] || 1),
        0
    );

    const totalDeliveryFee = myOrder.reduce(
        (total, food) => total + (Number(food.distance) || 0) * deliveryCostPerKm,
        0
    );

    const grandTotal = totalPrice + totalDeliveryFee;

    const handleQuantityChange = (index, quantity) => {
        const updatedQuantities = [...quantities];
        updatedQuantities[index] = quantity > 0 ? quantity : 1;
        setQuantities(updatedQuantities);
    };

    const handleRemoveItem = (index) => {
        const updatedOrder = [...myOrder];
        updatedOrder.splice(index, 1);
        onClearOrder(updatedOrder); // Pass the updated order to the parent
        setQuantities(updatedOrder.map(() => 1)); // Reset quantities
    };

    const handleSubmitOrder = () => {
        if (myOrder.length > 0) {
            setSuccessMessage("Purchase successful!");
            onClearOrder([]);
            setCardNumber("");
            setExpiryDate("");
            setCvv("");
            setQuantities([]);
        }
    };

    return (
        <div className="w-full p-4 h-full rounded-lg shadow-md bg-white">
            <div className="mb-4 flex flex-row justify-between">
                <div className="flex items-start justify-start mb-4">
                    <UserIcon className="h-6 w-6 text-custom-pink flex items-start mr-2" />
                    <span className="font-semibold">{userData.user.name}</span>
                </div>
                <div className="flex items-start mb-4">
                    <MapPinIcon className="h-6 w-6 text-custom-pink mr-2" />
                    <span className="font-semibold"> {userData.user.location}</span>
                </div>
            </div>

            <h2 className="text-xl font-bold mb-4">My Order</h2>

            {myOrder.length === 0 ? (
                <p className="text-center text-gray-500">No orders yet.</p>
            ) : (
                <ul>
                    {myOrder.map((food, index) => (
                        <li key={index} className="flex justify-between items-center mb-2">
                            <img
                                src={food.image}
                                alt={food.name}
                                className="w-10 h-10 object-cover rounded-full mr-2"
                            />
                            <input
                                type="number"
                                min="1"
                                value={quantities[index] || 1}
                                onChange={(e) => handleQuantityChange(index, parseInt(e.target.value))}
                                className="w-12 text-center border rounded-md p-1"
                            />
                            <span className="flex-1">{food.name}</span>
                            <span>{food.price * (quantities[index] || 1)} $</span>
                            <button
                                className=" hover:text-red-600 ml-2"
                                onClick={() => handleRemoveItem(index)}
                            >
                                <XMarkIcon className="h-4 w-4" />
                            </button>
                        </li>
                    ))}
                </ul>
            )}

            <div className="flex justify-between font-bold mt-2">
                <span>Delivery :</span>
                <span>{totalDeliveryFee} $</span>
            </div>
            <div className="flex justify-end gap-4 font-bold mt-2">
                <span> Total:</span>
                <span>{grandTotal} $</span>
            </div>

            {successMessage && (
                <p className="mt-2 text-green-500 text-center">{successMessage}</p>
            )}


            <button
                className="mt-4 w-full bg-custom-pink text-white py-2 px-4 rounded-md hover:bg-pink-600 transition"
                onClick={handleSubmitOrder}
            >
                Submit Order
            </button>
            <div className="mt-8">
                <img
                    src="https://i.pinimg.com/564x/5d/30/a0/5d30a085def65e40310d4ac5da6a7f46.jpg"
                    alt="Credit Card Icon"
                    className="w-64 h-32"
                />
                <div className="flex flex-col mb-4">
                    <label className="mb-1" htmlFor="card-number">Card Number</label>
                    <input
                        type="text"
                        id="card-number"
                        className="border rounded-md p-2"
                        value={cardNumber || ""}
                        onChange={(e) => setCardNumber(e.target.value)}
                        placeholder="Enter your card number"
                    />
                </div>
                <div className="flex mb-4">
                    <div className="flex flex-col mr-2 w-1/2">
                        <label className="mb-1" htmlFor="expiry-date">Expiry Date</label>
                        <input
                            type="text"
                            id="expiry-date"
                            className="border rounded-md p-2"
                            value={expiryDate || ""}
                            onChange={(e) => setExpiryDate(e.target.value)}
                            placeholder="MM/YY"
                        />
                    </div>
                    <div className="flex flex-col w-1/2">
                        <label className="mb-1" htmlFor="cvv">CVV</label>
                        <input
                            type="text"
                            id="cvv"
                            className="border rounded-md p-2"
                            value={cvv || ""}
                            onChange={(e) => setCvv(e.target.value)}
                            placeholder="CVV"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
