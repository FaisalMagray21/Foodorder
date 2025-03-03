import React, { useContext } from "react";
import { MdFastfood } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { LuShoppingBag } from "react-icons/lu";
import { DataContext } from "../context/UserContext";
import { useEffect } from "react";
import { food_items } from "../Food";
import { useSelector } from "react-redux";
function Nav() {
  let { input, setInput, category, setCategory, showcart, setShowcart } =
    useContext(DataContext);
  useEffect(() => {
    if (input === "") {
      setCategory(category);
    } else {
      let list = food_items.filter((item) =>
        item.food_name.toLowerCase().includes(input.toLowerCase()),
      );
      setCategory(list);
    }
  }, [input]);
  let items = useSelector((state) => state.cart);
  console.log(items);
  return (
    <div className="w-full  h-[100px]  flex justify-between items-center px-5 md:px-8 ">
      <div className="w-[60px] h-[60px] bg-white rounded-md flex items-center justify-center shadow-xl">
        <MdFastfood className="w-[30px] h-[30px] text-green-500" />
      </div>
      <form
        className="w-[45%] h-[60px] bg-white rounded-md flex items-center shadow-xl px-5 gap-5 md:w-[70%]  "
        onSubmit={(e) => e.preventDefault()}
      >
        <FaSearch className="text-green-500 w-[20px] h-[20px] " />
        <input
          type="text"
          placeholder="Search Items..."
          className="w-[100%] outline-none text-[16px] md:text-[20px] "
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
      </form>
      <div
        className="w-[60px] h-[60px] bg-white rounded-md flex items-center justify-center  shadow-xl relative cursor-pointer"
        onClick={() => {
          setShowcart(true);
        }}
      >
        <span className="absolute top-0 right-2 text-green-500 font-bold text-[18px]">
          {items.length}
        </span>
        <LuShoppingBag className="w-[30px] h-[30px] text-green-500" />
      </div>
    </div>
  );
}

export default Nav;
