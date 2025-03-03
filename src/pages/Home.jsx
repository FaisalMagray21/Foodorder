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
  let total = 0;
  if (subtotal > 0) {
    total = subtotal + deliveryfee + taxes;
  } else {
    total = 0;
  }
  //console.log(subtotal);
  return (
    <div className="w-full bg-slate-200 min-h-screen">
      <Nav />

      {/* Show Categories only if input is empty */}
      {!input && (
        <div className="flex flex-wrap justify-center items-center">
          {Categories.map((category) => (
            <div
              key={category.id}
              className="justify-center items-center h-36 w-36 bg-white m-2 rounded-lg hover:shadow-lg hover:bg-green-300"
              onClick={() => filter(category.name)}
            >
              <div className="text-5xl text-green-500 mt-3 ml-5 mb-3 mr-4">
                {category.image}
              </div>
              <p className="text-black font-bold ml-4 text-[20px]">
                {category.name}
              </p>
            </div>
          ))}
        </div>
      )}

      <div className="flex flex-wrap justify-center items-center">
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
      <div
        className={` w-fit md:w-[40vw] h-[100%] bg-white fixed bottom-0 right-0 p-4 duration-1000 overflow-auto  ${showcart ? "block " : "hidden "}`}
      >
        <header className="w-[100%]   flex justify-between items-center px-4">
          <span className="text-green-500 text-[18px]">order items</span>
          <RxCross2
            className="text-green-500 text-[18px] w-6 h-6 cursor-pointer d"
            onClick={() => setShowcart(false)}
          />
        </header>

        <div>
          {items.length > 0 ? (
            <>
              {items.map((item) => (
                <Card2
                  //id={item.id}
                  name={item.name}
                  price={item.price}
                  image={item.image}
                  id={item.id}
                  qty={item.qty}
                />
              ))}

              <div className="w-full border-t-2 border-gray-400 mt-7 p-4 bg-gray-100 rounded-lg shadow-md">
                <div className="flex justify-between text-lg font-semibold text-gray-700">
                  <span>Subtotal:</span>
                  <span className="text-green-600">{subtotal} PKR</span>
                </div>

                {items.length > 0 && (
                  <div className="flex justify-between text-lg text-gray-600 mt-2">
                    <span>Delivery Fee:</span>
                    <span className="text-green-600">{deliveryfee} PKR</span>
                  </div>
                )}

                <div className="flex justify-between text-lg text-gray-600 mt-2">
                  <span>Taxes (0.5%):</span>
                  <span className="text-green-600">{taxes.toFixed(2)} PKR</span>
                </div>

                <div className="flex justify-between text-xl font-bold text-gray-800 border-t-2 border-gray-400 mt-4 pt-3">
                  <span>Total:</span>
                  <span className="text-green-700">{total.toFixed(2)} PKR</span>
                </div>
              </div>

              <button
                className="w-full p-3 rounded-lg bg-green-300 text-gray-700 hover:bg-green-400 mt-4"
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
