import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const PaymentPage = () => {
  const [selectedMethod, setSelectedMethod] = useState("card");
  const location = useLocation();

  // Support both flows (Cart & Single Product)
  const totalPrice = location.state?.totalPrice || location.state?.price || 0;

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-6">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-lg p-8">
        {/* Title */}
        <h1 className="text-2xl font-bold mb-6 text-gray-800">
          Choose Payment Method
        </h1>

        {/* Payment Options */}
        <div className="space-y-4">
          {/* Card Payment */}
          <div
            onClick={() => setSelectedMethod("card")}
            className={`p-4 border rounded-xl cursor-pointer ${
              selectedMethod === "card"
                ? "border-blue-500 bg-blue-50"
                : "border-gray-300"
            }`}
          >
            <h2 className="font-semibold text-gray-700">💳 Credit / Debit Card</h2>
            {selectedMethod === "card" && (
              <div className="mt-4 space-y-3">
                <input
                  type="text"
                  placeholder="Card Number"
                  className="w-full p-2 border rounded-lg focus:outline-blue-500"
                />
                <div className="flex gap-3">
                  <input
                    type="text"
                    placeholder="MM/YY"
                    className="w-1/2 p-2 border rounded-lg focus:outline-blue-500"
                  />
                  <input
                    type="text"
                    placeholder="CVV"
                    className="w-1/2 p-2 border rounded-lg focus:outline-blue-500"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Card Holder Name"
                  className="w-full p-2 border rounded-lg focus:outline-blue-500"
                />
              </div>
            )}
          </div>

          {/* UPI */}
          <div
            onClick={() => setSelectedMethod("upi")}
            className={`p-4 border rounded-xl cursor-pointer ${
              selectedMethod === "upi"
                ? "border-blue-500 bg-blue-50"
                : "border-gray-300"
            }`}
          >
            <h2 className="font-semibold text-gray-700">📱 UPI</h2>
            {selectedMethod === "upi" && (
              <div className="mt-3">
                <input
                  type="text"
                  placeholder="Enter UPI ID"
                  className="w-full p-2 border rounded-lg focus:outline-blue-500"
                />
              </div>
            )}
          </div>

          {/* Net Banking */}
          <div
            onClick={() => setSelectedMethod("netbanking")}
            className={`p-4 border rounded-xl cursor-pointer ${
              selectedMethod === "netbanking"
                ? "border-blue-500 bg-blue-50"
                : "border-gray-300"
            }`}
          >
            <h2 className="font-semibold text-gray-700">🏦 Net Banking</h2>
            {selectedMethod === "netbanking" && (
              <select className="mt-3 w-full p-2 border rounded-lg focus:outline-blue-500">
                <option>Select Bank</option>
                <option>SBI</option>
                <option>HDFC</option>
                <option>ICICI</option>
                <option>Axis</option>
              </select>
            )}
          </div>

          {/* Cash on Delivery */}
          <div
            onClick={() => setSelectedMethod("cod")}
            className={`p-4 border rounded-xl cursor-pointer ${
              selectedMethod === "cod"
                ? "border-blue-500 bg-blue-50"
                : "border-gray-300"
            }`}
          >
            <h2 className="font-semibold text-gray-700">💵 Cash on Delivery</h2>
            {selectedMethod === "cod" && (
              <p className="mt-3 text-sm text-gray-600">
                Pay with cash when your order is delivered.
              </p>
            )}
          </div>
        </div>

        {/* Order Summary */}
        <div className="mt-8 border-t pt-6">
          <h3 className="text-lg font-semibold text-gray-700 mb-3">
            Order Summary
          </h3>
          <div className="flex justify-between text-gray-600 mb-2">
            <span>Items Total</span>
            <span>₹{totalPrice.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-gray-600 mb-2">
            <span>Delivery</span>
            <span>₹50</span>
          </div>
          <div className="flex justify-between font-semibold text-gray-800 text-lg">
            <span>Total</span>
            <span>₹{(totalPrice + 50).toFixed(2)}</span>
          </div>
        </div>

        {/* Pay Button */}
        <button className="mt-6 w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition cursor-pointer">
          Pay Now
        </button>
      </div>
    </div>
  );
};

export default PaymentPage;
