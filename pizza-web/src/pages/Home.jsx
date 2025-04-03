import React from "react";
import Navbar from "../components/Navbar";
import image from "../images/piz-home.jpg";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-content flex">
        <div className="home-img">
          <img src={image} alt="pizza-img" className="w-full h-[600px]" />
        </div>
    <div className="home-text flex flex-col justify-center items-center">
      <div className="flex justify-end w-full mx-auto">
        <h1 className="text-[90px] font-bold text-right">
          Your favorite <span className="text-[#ff2407]">pizza</span>, <br></br>
          <span className="text-red-200 text-[80px] mt-[40px]">just a click away!</span>
        </h1>
      </div>
      <div className="flex justify-end w-full mx-auto">
        <p className="text-[25px]">Hot & fresh Pizza. Delivered fast</p>
      </div>
      <button className="bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white font-semibold py-3 px-6 rounded-full shadow-lg transform hover:scale-105 transition duration-300 ease-in-out mt-[60px]">
        Explore Now
      </button>
    </div>
      </div>
    </div>
  );
};

export default Home;
