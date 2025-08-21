import React, { useContext } from "react";
import Nav from "../components/Nav";
import Categories from "../Categories";
import Card from "../components/Card";
import Card2 from "../components/Card2";
import { food_items } from "../Food";
import { DataContext } from "../context/UserContext";
import { RxCross2 } from "react-icons/rx";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Home() {
  let { category, setCategory, input, showcart, setShowcart } =
    useContext(DataContext);

  function filter(cate) {
    if (cate === "All") {
      setCategory(food_items);
    } else {
      let list = food_items.filter((item) => item.food_category === cate);
      setCategory(list);
    }
  }

  let items = useSelector((state) => state.cart);
  let subtotal = items.reduce(
    (total, item) => total + item.price * item.qty,
    0
  );
  let deliveryfee = 50;
  let taxes = (subtotal * 0.5) / 100;
  let total = subtotal > 0 ? subtotal + deliveryfee + taxes : 0;

  return (
    <div className="w-full bg-slate-200 min-h-screen">
      <Nav />

      {/* Categories Section (Responsive Grid) */}
      {!input && (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 p-4">
          {Categories.map((category) => (
            <div
              key={category.id}
              className="flex flex-col justify-center items-center h-32 sm:h-36 w-full bg-white rounded-lg hover:shadow-lg hover:bg-green-300 cursor-pointer transition duration-300"
              onClick={() => filter(category.name)}
            >
              <div className="text-4xl sm:text-5xl text-green-500">
                {category.image}
              </div>
              <p className="text-black font-bold text-sm sm:text-lg mt-2">
                {category.name}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* Food Items Section (Responsive Flex/Grid) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
        {category.map((food) => (
          <Card
            key={food.id}
            name={food.food_name}
            id={food.id}
            image={food.food_image}
            price={food.price}
            type={food.food_type}
          />
        ))}
      </div>

      {/* Cart Sidebar (Responsive: Full width on mobile, sidebar on desktop) */}
      <div
        className={`fixed bottom-0 right-0 w-full sm:w-[80%] md:w-[40vw] h-[90%] sm:h-full bg-white shadow-lg p-4 duration-500 overflow-auto z-50 ${
          showcart ? "block" : "hidden"
        }`}
      >
        <header className="w-full flex justify-between items-center px-2 sm:px-4">
          <span className="text-green-500 text-lg sm:text-xl font-semibold">
            Order Items
          </span>
          <RxCross2
            className="text-green-500 text-xl sm:text-2xl cursor-pointer"
            onClick={() => setShowcart(false)}
          />
        </header>

        <div>
          {items.length > 0 ? (
            <>
              {items.map((item) => (
                <Card2
                  key={item.id}
                  name={item.name}
                  price={item.price}
                  image={item.image}
                  id={item.id}
                  qty={item.qty}
                />
              ))}

              {/* Totals */}
              <div className="w-full border-t-2 border-gray-300 mt-6 p-4 bg-gray-100 rounded-lg shadow-md">
                <div className="flex justify-between text-base sm:text-lg font-semibold text-gray-700">
                  <span>Subtotal:</span>
                  <span className="text-green-600">{subtotal} PKR</span>
                </div>

                <div className="flex justify-between text-base sm:text-lg text-gray-600 mt-2">
                  <span>Delivery Fee:</span>
                  <span className="text-green-600">{deliveryfee} PKR</span>
                </div>

                <div className="flex justify-between text-base sm:text-lg text-gray-600 mt-2">
                  <span>Taxes (0.5%):</span>
                  <span className="text-green-600">{taxes.toFixed(2)} PKR</span>
                </div>

                <div className="flex justify-between text-lg sm:text-xl font-bold text-gray-800 border-t-2 border-gray-400 mt-4 pt-3">
                  <span>Total:</span>
                  <span className="text-green-700">{total.toFixed(2)} PKR</span>
                </div>
              </div>

              <button
                className="w-full p-3 rounded-lg bg-green-400 text-white font-semibold hover:bg-green-500 mt-4 transition"
                onClick={() => {
                  toast("Order successfully placed");
                }}
              >
                Place Order
              </button>
            </>
          ) : (
            <div className="text-center text-gray-500 text-lg font-semibold p-6">
              No Order Yet! Add some items to place an order.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
