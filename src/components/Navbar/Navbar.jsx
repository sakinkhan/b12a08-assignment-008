import React from "react";
import { Link, NavLink } from "react-router";
import logoImg from "../../assets/logo.png";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-lg px-[80px]">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden"
          ><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg></div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/apps"}>Apps</Link>
            </li>
            <li>
              <Link to={"/installation"}>Installation</Link>
            </li>
          </ul>
        </div>
        <Link to={"/"}>
            <div className="flex items-center gap-1">
                <img src={logoImg} alt="logo" className="w-10" />
                <p className="inter-font font-bold text-[16px] bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
                    HERO.IO
                </p>
            </div>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="flex items-center gap-2 px-1">
          <li>
            <NavLink to={"/"} className={({ isActive }) =>
          `inter-font font-medium text-[16px] ${
            isActive ? "bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent underline underline-offset-4 decoration-2" 
            : "text-black/90 hover:bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent"
          }`
        }>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/apps"} className={({ isActive }) =>
          `inter-font font-medium text-[16px] ${
            isActive ? "bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent underline underline-offset-4 decoration-2 decoration-[#9F62F2]" 
            : "text-black/90 hover:bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent"
          }`
        }>Apps</NavLink>
          </li>
          <li>
            <NavLink to={"/installation"} className={({ isActive }) =>
          `inter-font font-medium text-[16px] ${
            isActive ? "bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent underline underline-offset-4 decoration-2" 
            : "text-black/90 hover:bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent"
          }`
        }>Installation</NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white">
          <i className="fa-brands fa-github"></i>Contribute
        </a>
      </div>
    </div>
  );
};

export default Navbar;
