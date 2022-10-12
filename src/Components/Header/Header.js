import Lottie from "lottie-react";
import React from "react";
import reader from "../../Assets/reader.json";

import "./Header.css";
const Header = () => {
  return (
    <div className="header text-center">
      <div className="flex justify-between" >
        <div>
          <Lottie
            className=" w-[300px] lg:w-[500px]"
            animationData={reader}
            loop={true}
          ></Lottie>
        </div>
        <h1 className="text-2xl lg:text-4xl mt-4 text-green-300 hover:text-green-500  lg:text-teal-900 md:hover:text-red-500 font-bold lg:mr-48 lg: pt-44">
          <span className="text-6xl">L</span>ET'S START QUIZ...
        </h1>
      </div>
    </div>
  );
};

export default Header;
