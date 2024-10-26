import { StarIcon } from '@heroicons/react/24/solid';

export default function FoodCard({ food, onFoodClick }) {
    if (!food) return null; // Pastikan food terdefinisi sebelum melanjutkan rendering

    return (
        <div className="border p-4 rounded-lg shadow-md">
            <div className="flex justify-between items-center mb-2">
                <h2 className="text-lg font-bold">{food.distance ? `${food.distance} km` : "N/A"}</h2>
                <h2 className="text-lg font-bold">{food.time ? `${food.time} mins` : "N/A"}</h2>
            </div>
            <img
                src={food.image}
                alt={food.name}
                className="w-full h-32 object-cover mb-2 rounded-md"
            />
            <div className="flex justify-between items-center mb-2">
                <div className="flex flex-col items-start">
                    <h3 className="text-lg font-bold">{food.name}</h3>
                    <p className="text-sm">{food.description}</p>
                </div>
                <div className="flex flex-col items-start">
                    <p className="text-lg font-bold flex justify-end">{food.price} $</p>
                    <div className="flex flex-col">
                        <div className="flex items-center gap-2">
                            <StarIcon className="h-5 w-5 text-yellow-500" />
                            <p>{food.rating}</p>
                            <p className="text-xs">{food.reviews}</p>
                        </div>
                    </div>
                </div>
            </div>
            <button
                className="mt-2 bg-blue-500 text-white py-1 px-4 rounded-md"
                onClick={() => onFoodClick(food)}
            >
                View Details
            </button>
        </div>
    );
}
