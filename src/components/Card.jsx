import React from "react";
import { LuLeafyGreen } from "react-icons/lu";
import { GiChickenOven } from "react-icons/gi";
import { additems } from "../redux/cartslice";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

function Card({ name, id, image, price, type }) {
  let dispatch = useDispatch();

  return (
    <div className="w-full max-w-xs sm:max-w-sm md:max-w-md bg-white rounded-lg shadow-lg flex flex-col justify-between m-3 p-4 border-2 border-green-500 transition hover:shadow-xl">
      {/* Image */}
      <div className="w-full h-48 sm:h-60 md:h-72 rounded-lg overflow-hidden">
        <img
          src={image}
          alt={name}
          className="object-cover w-full h-full"
        />
      </div>

      {/* Details */}
      <div className="flex justify-between items-center mt-3">
        <div className="text-left">
          <div className="text-lg sm:text-xl font-semibold">{name}</div>
          <div className="text-base sm:text-lg font-medium text-green-600">
            {price} PKR
          </div>
        </div>

        <div className="flex items-center gap-2">
          {type === "veg" ? (
            <LuLeafyGreen className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
          ) : (
            <GiChickenOven className="w-5 h-5 sm:w-6 sm:h-6 text-red-600" />
          )}
          <span className="text-sm sm:text-base font-medium text-green-600 capitalize">
            {type}
          </span>
        </div>
      </div>

      {/* Button */}
      <button
        className="w-full mt-3 py-2 sm:py-3 rounded-lg bg-green-300 text-gray-700 font-medium hover:bg-green-400 transition"
        onClick={() => {
          dispatch(
            additems({
              id,
              name,
              price,
              image,
              qty: 1,
            })
          );
          toast("Item added successfully");
        }}
      >
        Add to dish
      </button>
    </div>
  );
}

export default Card;
