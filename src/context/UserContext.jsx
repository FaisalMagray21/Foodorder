import React, { createContext, useState } from "react";
import { food_items } from "../Food";

export const DataContext = createContext();

function UserContext({ children }) {
  const [category, setCategory] = useState(food_items);
  const [showcart, setShowcart] = useState(false);
  const [input, setInput] = useState("");

  const value = {
    input,
    setInput,
    category,
    setCategory,
    showcart,
    setShowcart,
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
}

export default UserContext;
