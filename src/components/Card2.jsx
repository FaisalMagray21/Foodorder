import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { increaseQty, decreaseQty, removeItem } from "../redux/cartslice"; // Import removeItem

function Card2({ name, id, price, image, qty }) {
  const dispatch = useDispatch();

  return (
    <div className="h-[120px] w-full bg-white shadow-lg rounded-lg flex justify-between items-center p-4 m-4">
      <div className="h-full w-[60%] flex">
        <div className="h-full w-[40%] overflow-hidden rounded-lg">
          <img src={image} alt={name} className="object-cover w-full h-full" />
        </div>
        <div className="w-[40%] h-full flex flex-col ml-4">
          <div className="text-lg text-gray-600 font-semibold m-4">{name}</div>
          <div className="w-[110px] h-[50px] flex justify-between items-center font-semibold border-2 border-green-400 rounded-lg shadow-xl text-2xl cursor-pointer overflow-hidden">
            <button
              className="w-[30%] hover:bg-slate-200 h-full bg-white text-green-400 flex justify-center items-center"
              onClick={() => dispatch(decreaseQty(id))}
            >
              -
            </button>
            <span className="w-[40%] h-full bg-slate-300 flex justify-center items-center">
              {qty}
            </span>
            <button
              className="w-[30%] hover:bg-slate-200 h-full bg-white flex text-green-400 justify-center items-center"
              onClick={() => dispatch(increaseQty(id))}
            >
              +
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-start items-end gap-6">
        <span className="text-green-500 text-[18px]">RS: {price * qty}</span>

        <RiDeleteBin6Line
          className="text-red-500 text-[18px] w-6 h-6 cursor-pointer"
          onClick={() => dispatch(removeItem(id))}
        />
      </div>
    </div>
  );
}

export default Card2;
