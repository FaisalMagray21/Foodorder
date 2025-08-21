import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { increaseQty, decreaseQty, removeItem } from "../redux/cartslice";

function Card2({ name, id, price, image, qty }) {
  const dispatch = useDispatch();

  return (
    <div className="w-full bg-white shadow-lg rounded-lg flex flex-col sm:flex-row justify-between items-center p-4 m-3 sm:m-4 gap-4">
      {/* Left Side: Image + Info */}
      <div className="flex flex-col sm:flex-row items-center sm:items-start w-full sm:w-2/3 gap-4">
        {/* Product Image */}
        <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-lg overflow-hidden">
          <img
            src={image}
            alt={name}
            className="object-cover w-full h-full"
          />
        </div>

        {/* Product Details */}
        <div className="flex flex-col justify-between items-center sm:items-start">
          <div className="text-base sm:text-lg text-gray-600 font-semibold">
            {name}
          </div>

          {/* Quantity Controls */}
          <div className="flex justify-between items-center font-semibold border-2 border-green-400 rounded-lg shadow-md text-lg sm:text-xl cursor-pointer mt-2">
            <button
              className="px-3 py-1 hover:bg-slate-200 text-green-500"
              onClick={() => dispatch(decreaseQty(id))}
            >
              -
            </button>
            <span className="px-4 py-1 bg-slate-200">{qty}</span>
            <button
              className="px-3 py-1 hover:bg-slate-200 text-green-500"
              onClick={() => dispatch(increaseQty(id))}
            >
              +
            </button>
          </div>
        </div>
      </div>

      {/* Right Side: Price + Delete */}
      <div className="flex flex-row sm:flex-col justify-between items-center sm:items-end w-full sm:w-1/3 gap-4">
        <span className="text-green-600 font-semibold text-base sm:text-lg">
          Rs: {price * qty}
        </span>

        <RiDeleteBin6Line
          className="text-red-500 text-xl sm:text-2xl cursor-pointer hover:scale-110 transition"
          onClick={() => dispatch(removeItem(id))}
        />
      </div>
    </div>
  );
}

export default Card2;
