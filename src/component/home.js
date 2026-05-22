import React from "react";
import img from "../assets/posterImage.jpg";
import Products from "./Products";


const Home = () => {
    return (
<div className="relative w-full h-[550px]">
  <img src={img} className="w-full h-full object-cover" />

  <div className="absolute inset-0 flex items-center">
    <div className="m-30">
      <h2 className="text-6xl font-bold text-white "> NEW SEASON ARRIVALS</h2>
      <p className="text-gray-100 text-4xl ">CHECK OUT ALL THE TRENDS</p>
    </div>
  </div>
  <Products/>
</div>



    );

};

export default Home;