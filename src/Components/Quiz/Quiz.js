import React from "react";

const Quiz = ({ quiz }) => {
  console.log(quiz);
  const { name, id, logo, total } = quiz;
  return <div className="rounded-md shadow-lg bg-slate-600">
          <div className="border rounded-md p-2">
          <img className="" src={logo} alt="" />
          </div>
          <div className="flex justify-between mx-4 my-2">
            <h1 className="text-xl font-bold text-yellow-500">{name}</h1>
            <button className="bg-sky-300 hover:bg-sky-600 px-2 py-1 rounded font-bold text-black hover:text-white">Start practice</button>
          </div>
  </div>;
};

export default Quiz;
