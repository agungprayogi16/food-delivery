import { useState } from "react";
import { MapPinIcon, UserIcon } from "@heroicons/react/24/outline"; // Import icons from Heroicons
import userData from "@/data/userData.json"; // Adjust the path to your JSON file

export default function OrderSummary({ myOrder, onClearOrder }) {
    const [successMessage, setSuccessMessage] = useState(""); // State for success message
    const [cardNumber, setCardNumber] = useState(""); // State for card number
    const [expiryDate, setExpiryDate] = useState(""); // State for expiry date
    const [cvv, setCvv] = useState(""); // State for CVV

    // Menghitung total harga
    const totalPrice = myOrder.reduce((total, food) => total + food.price, 0);

    const handleSubmitOrder = () => {
        if (myOrder.length > 0) {
            // Set the success message
            setSuccessMessage("Purchase successful!");
            // Optionally, clear the order after submission
            onClearOrder();
            // Clear payment information
            setCardNumber("");
            setExpiryDate("");
            setCvv("");
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
                        <li key={index} className="flex justify-between mb-2">
                            <img
                                src={food.image}
                                alt={food.name}
                                className="w-10 h-10 object-cover rounded-full"
                            />
                            <span>{food.name}</span>
                            <span>{food.price} $</span>
                           
                         

                        </li>
                    ))}
                </ul>
            )}

            <div className="flex justify-end font-bold mt-4">
                <span>Total :</span>
                <span>{myOrder.length > 0 ? `${totalPrice} IDR` : '0 $'}</span>
            </div>

            {/* Display success message if exists */}
            {successMessage && (
                <p className="mt-2 text-green-500 text-center">{successMessage}</p>
            )}


            {/* Payment Section */}
            <div className="mt-8">
                <h4 className="text-lg font-semibold">Payment Information</h4>
                <div className="flex flex-col mb-4">
                    <label className="mb-1" htmlFor="card-number">Card Number</label>
                    <input
                        type="text"
                        id="card-number"
                        className="border rounded-md p-2"
                        value={cardNumber}
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
                            value={expiryDate}
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
                            value={cvv}
                            onChange={(e) => setCvv(e.target.value)}
                            placeholder="CVV"
                        />
                    </div>
                </div>
            </div>
            <button
                className="mt-4 w-full bg-custom-pink text-white py-2 px-4 rounded-md hover:bg-pink-600 transition"
                onClick={handleSubmitOrder}
            >
                Submit Order
            </button>
        </div>
    );
}
