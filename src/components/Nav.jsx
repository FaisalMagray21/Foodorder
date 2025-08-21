import React, { useContext, useEffect } from "react";
import { MdFastfood } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { LuShoppingBag } from "react-icons/lu";
import { DataContext } from "../context/UserContext";
import { food_items } from "../Food";
import { useSelector } from "react-redux";

function Nav() {
  let { input, setInput, category, setCategory, setShowcart } =
    useContext(DataContext);

  useEffect(() => {
    if (input === "") {
      setCategory(category);
    } else {
      let list = food_items.filter((item) =>
        item.food_name.toLowerCase().includes(input.toLowerCase())
      );
      setCategory(list);
    }
  }, [input, category, setCategory, setInput]);

  let items = useSelector((state) => state.cart);

  return (
    <div className="w-full bg-slate-100 py-4 px-4 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 shadow-md">
      {/* Logo */}
      <div className="w-14 h-14 bg-white rounded-md flex items-center justify-center shadow-lg">
        <MdFastfood className="w-7 h-7 text-green-500" />
      </div>

      {/* Search Bar */}
      <form
        className="w-full sm:w-2/3 md:w-1/2 h-12 sm:h-14 bg-white rounded-md flex items-center shadow-lg px-4 gap-3"
        onSubmit={(e) => e.preventDefault()}
      >
        <FaSearch className="text-green-500 w-5 h-5 sm:w-6 sm:h-6" />
        <input
          type="text"
          placeholder="Search items..."
          className="w-full outline-none text-sm sm:text-base md:text-lg"
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
      </form>

      {/* Cart */}
      <div
        className="relative w-14 h-14 bg-white rounded-md flex items-center justify-center shadow-lg cursor-pointer"
        onClick={() => setShowcart(true)}
      >
        <span className="absolute -top-1 -right-1 bg-green-500 text-white text-xs sm:text-sm font-bold px-2 py-0.5 rounded-full">
          {items.length}
        </span>
        <LuShoppingBag className="w-7 h-7 text-green-500" />
      </div>
    </div>
  );
}

export default Nav;
