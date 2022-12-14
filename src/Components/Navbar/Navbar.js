import React from "react";
import {  NavLink } from "react-router-dom";
import './Navbar.css'

const Navbar = () => {
  let activeStyle = {
    textDecoration: "underline",
  };

  return (
    <div>
      <nav className="bg-slate-600 flex justify-between px-4 md:px-14 lg:px-16 h-14 items-center">
        <div>
        <NavLink  to='home'
             className="text-2xl md:text-4xl lg:text-4xl lg:font-bold"><span className="text-amber-600 hover:text-yellow-400">QUIZ </span><span className="text-white hover:text-cyan-500">CAMP</span></NavLink>
        </div>
        <div className="link">
          <NavLink to='home'  style={({ isActive }) =>
              isActive ? activeStyle : undefined
            } className="ml-3 text-xl font-semibold text-stone-200 hover:text-sky-400">Home</NavLink>
          <NavLink to='topics'  style={({ isActive }) =>
              isActive ? activeStyle : undefined
            } className="ml-3 font-semibold text-cyan-300 hover:text-yellow-200">Topics</NavLink>
          <NavLink to='statistics'  style={({ isActive }) =>
              isActive ? activeStyle : undefined
            } className="ml-3 font-semibold text-cyan-300 hover:text-yellow-200">Statistics</NavLink>
          <NavLink to='blog'  style={({ isActive }) =>
              isActive ? activeStyle : undefined
            } className="ml-3 font-semibold text-cyan-300 hover:text-yellow-200">Blog</NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
