import React from "react";
import { LuLeafyGreen } from "react-icons/lu";
import { GiChickenOven } from "react-icons/gi";
import { additems } from "../redux/cartslice";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
function Card({ name, id, image, price, type }) {
  let dispatch = useDispatch();
  return (
    <div className="w-[280px] h-[400px] bg-white rounded-lg shadow-lg flex flex-col justify-center m-5 p-5 border-4 border-green-500">
      <div className="w-[245px] h-[300px] rounded-lg overflow-hidden">
        <img src={image} alt="Pancake" className="object-cover w-full h-full" />
      </div>
      <div className="flex justify-between w-full items-center mt-3">
        <div className="text-left">
          <div className="text-2xl font-semibold">{name}</div>
          <div className="text-lg font-medium text-green-600">{price}</div>
        </div>

        <div className="flex items-center gap-2">
          {type === "veg" ? (
            <LuLeafyGreen className="w-6 h-6 text-green-600" />
          ) : (
            <GiChickenOven className="w-6 h-6 text-red-600" />
          )}
          <span className="text-lg font-medium text-green-600">{type}</span>
        </div>
      </div>

      <button
        className="w-full p-3 rounded-lg bg-green-300 text-gray-700 hover:bg-green-400"
        onClick={() =>
          dispatch(
            additems({
              id: id,
              name: name,
              price: price,
              image: image,
              qty: 1,
            }),
            toast("Item added successfully")
          )
        }
      >
        Add to dish
      </button>
    </div>
  );
}

export default Card;
