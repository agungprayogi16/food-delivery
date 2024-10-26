// src/components/Modal.js
import React from 'react';
import { StarIcon } from '@heroicons/react/24/outline';

export default function Modal({ food, closeModal, onBuy }) {
    if (!food) return null;

    const handleBuy = () => {
        onBuy(food); // Panggil fungsi onBuy yang di-passing dari komponen induk
        closeModal(); // Tutup modal setelah membeli
    };

    return (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded-lg w-96 shadow-lg">
                <img
                    src={food.image}
                    alt={food.name}
                    className="w-full h-32 object-cover mb-2 rounded-md"
                ></img>
                <div className="flex justify-between items-center mb-2">
                    <div className="flex flex-col items-start">
                        <h3 className="text-lg font-bold">{food.name}</h3>
                        <p className='text-sm'>{food.description}</p>
                    </div>
                    <div className='flex flex-col items-start'>
                        <p className="text-lg font-bold flex justify-end">{food.price} $</p>
                        <div className="flex flex-col ">
                            <div className="flex items-center">

                                <StarIcon className="h-5 w-5 text-yellow-500" />
                                <p > {food.rating}</p>
                                <p className='text-xs'> {food.reviews}</p>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="flex justify-end gap-3 mt-4">
                    <button
                        className="bg-green-500 text-white py-2 px-4 rounded-md"
                        onClick={handleBuy}
                    >
                        Buy
                    </button>
                    <button
                        className="bg-red-500 text-white py-2 px-4 rounded-md"
                        onClick={closeModal}
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
}
