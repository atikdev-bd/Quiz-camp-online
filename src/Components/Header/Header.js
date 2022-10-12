import Lottie from "lottie-react";
import React from "react";
import reader from "../../Assets/reader.json";

import "./Header.css";
const Header = () => {
  return (
    <div className="header text-center">
      <div className="lg:flex md:flex justify-between">
        <div>
          <Lottie
            className=" w-[300px] lg:w-[600px] md:w-[600px]"
            animationData={reader}
            loop={true}
          ></Lottie>
        </div>
        <h1 className="text-4xl mt-20 lg:mt-4 text-green-500 hover:text-green-600  lg:text-teal-900 md:hover:text-red-500 font-bold lg:scroll-mr-48 md:mr-52  lg:pt-44 md:pt-44 ">
          <span className="text-6xl">L</span>ET'S START QUIZ...
        </h1>
      </div>
    </div>
  );
};

export default Header;
