import "./App.css";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import React from "react";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <Home />
      <ToastContainer />
    </>
  );
}
export default App;
