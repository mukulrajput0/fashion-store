import React, { useEffect, useState } from "react";
import { addToCard, clearCart, removeFromCart } from "../slice/counterSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

const AddToCard = () => {
  const [count, setCount] = useState(0);
  const { id } = useParams();
  const items = useSelector((state) => state.addToCard.items);

  const dispatch = useDispatch();
  const navigate = useNavigate()

  // Save cart to localStorage whenever items update
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(items));
  }, [items]);

  // Calculate total price of all products
  const totalPrice = items.reduce(
    (acc, item) => acc + item.Price * item.qty,
    0
  );

  return (
    <div className="flex items-center justify-center mb-20 gap-10">
      <div className="bg-white w-[900px] p-6 shadow-[0_4px_20px_rgba(0,0,0,0.1)] hover:shadow-md rounded-md">
        {/* Header */}
        <div className="flex justify-around font-bold text-lg mt-2">
          <h1 className="w-40">Product</h1>
          <h1 className="w-20">Price</h1>
          <h1 className="w-20">Qty</h1>
          <h1 className="w-30">Total Price</h1>
          <h1 className="w-20">Remove</h1>
        </div>

        <hr className="my-4" />

        {/* Items */}
        {items.length === 0 ? (
          <h2 className="text-center text-red-500">Your cart is empty</h2>
        ) : (
          items.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-around mt-6"
            >
              {/* Product image + details */}
              <div className="flex items-center w-40">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-[80px] h-[80px] object-cover rounded-md"
                />
                <div className="ml-3">
                  <h2 className="font-bold">{item.name}</h2>
                  <p className="text-sm text-gray-500">Color: {item.color}</p>
                  <p className="text-sm text-gray-500">Size: {item.size}</p>
                </div>
              </div>

              {/* Price */}
              <h1 className="w-20 font-bold">₹{item.Price}</h1>

              {/* Counter */}
              <div className="flex items-center gap-2 w-20">
                <button
                  onClick={() => dispatch(removeFromCart(item.id))}
                  className="px-2 py-1 bg-gray-200 rounded"
                >
                  -
                </button>
                <span className="font-bold">{item.qty}</span>
                <button
                  onClick={() => dispatch(addToCard(item))}
                  className="px-2 py-1 bg-gray-200 rounded"
                >
                  +
                </button>
              </div>

              {/* Total Price for item */}
              <h1 className="w-30 font-bold">
                ₹{(item.Price * item.qty).toFixed(2)}
              </h1>

              {/* Remove */}
              <button
                onClick={() => dispatch(removeFromCart(item.id))}
                className="text-red-500 font-bold cursor-pointer"
              >
                Remove
              </button>
            </div>
          ))
        )}

        {/* Footer Section (Clear + Total) */}
        {items.length > 0 && (
          <>
            <div className="flex justify-between items-center mt-8">
              {/* Clear Cart Button */}
              <button
                onClick={() => dispatch(clearCart())}
                className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600 cursor-pointer"
              >
                Clear Cart
              </button>
            <button
                onClick={() => navigate("/paymentpage", { state: { totalPrice } })}
               className="bg-red-500 text-white px-9 py-2 rounded ml-[-24rem] hover:bg-red-600 cursor-pointer"
                 >
                Buy
              </button>


              {/* Total Cart Price */}
              <h2 className="text-xl font-bold">
                Total:{" "}
                <span className="text-green-600">
                  ₹{totalPrice.toFixed(2)}
                </span>
              </h2>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default AddToCard;
