import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css'

const Navbar = () => {
  return (
    <div>
      <nav className="bg-slate-600 flex justify-between px-16 h-14 items-center">
        <div>
        <Link className="text-4xl font-bold">QUIZ CAMP</Link>
        </div>
        <div className="link">
          <Link className="ml-3 text-xl font-semibold">Home</Link>
          <Link className="ml-3 font-semibold">Topics</Link>
          <Link className="ml-3 font-semibold">Statistics</Link>
          <Link className="ml-3 font-semibold">Blog</Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
