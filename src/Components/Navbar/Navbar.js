import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css'

const Navbar = () => {
  return (
    <div>
      <nav className="bg-slate-600 flex justify-between px-16 h-14 items-center">
        <div>
        <Link className="text-4xl font-bold"><span className="text-amber-600 hover:text-yellow-400">QUIZ </span><span className="text-white hover:text-cyan-500">CAMP</span></Link>
        </div>
        <div className="link">
          <Link className="ml-3 text-xl font-semibold text-stone-200 hover:text-sky-400">Home</Link>
          <Link className="ml-3 font-semibold text-cyan-300 hover:text-yellow-200">Topics</Link>
          <Link className="ml-3 font-semibold text-cyan-300 hover:text-yellow-200">Statistics</Link>
          <Link className="ml-3 font-semibold text-cyan-300 hover:text-yellow-200">Blog</Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
