import { ArrowSmallRightIcon } from "@heroicons/react/24/solid";
import React from "react";
import { Link } from "react-router-dom";

const Quiz = ({ quiz }) => {
  const { name, id, logo, total } = quiz;
  return (
    <div className="rounded-md  mx-auto drop-shadow-2xl mb-6 bg-slate-600">
      <div className="border rounded-md p-2">
        <img className="w-full" src={logo} alt="" />
      </div>
      <div className="flex items-center  justify-between p-2 mx-4 my-2 bg-zinc-600 rounded-sm">
        <h1 className="text-xl font-bold text-yellow-500">{name}</h1>
        <span className="text-white px-2 block md:hidden shadow-2xl lg:block  bg-zinc-600 border rounded-sm">
          Quiz-{total}
        </span>
        <div className="flex bg-sky-300 hover:bg-sky-600 px-2 py-1 rounded font-bold md:font-semibold lg:font-bold text-black hover:text-white">
          <Link to={`/topic/${id}`}>
            <button>
              Start practice
            </button>
           
          </Link>
          <ArrowSmallRightIcon className="w-5 ml-2 text-cyan-900"></ArrowSmallRightIcon>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
