import React from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import ActiveLink from "../ActiveLink";
const Header = () => {
  return (
    <div className="bg-gradient-to-r from-[#7e90f40d] to-[#98ffff0d]">
      <div className="navbar max-w-7xl mx-auto   sticky top-0 h-[80px]  z-40">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <ActiveLink to="/">Home</ActiveLink>
              </li>
              <li>
                <ActiveLink to="/statistics">Statistics</ActiveLink>
              </li>
              <li>
                <ActiveLink to="/jobs">Applied Jobs</ActiveLink>
              </li>
              <li>
                <ActiveLink to="/blogs">Blogs</ActiveLink>
              </li>
              <li>
                <a className="btn capitalize  bg-gradient-to-r from-indigo-400 via-indigo-500 to-indigo-500 border-0">
                  Start Applying
                </a>
              </li>
            </ul>
          </div>
          <Link to="/" className="flex gap-2 items-center">
            <img src={logo} className="h-10" alt="" />
            <h2 className="text-2xl font-semibold">CareerLink</h2>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex gap-10">
          <ul className="lg:flex gap-10 menu-horizontal px-1">
            <li>
              <ActiveLink to="/">Home</ActiveLink>
            </li>
            <li>
              <ActiveLink
                to="/statistics"
                className="font-semibold text-slate-600"
              >
                Statistics
              </ActiveLink>
            </li>
            <li>
              <ActiveLink to="/jobs" className="font-semibold text-slate-600">
                Applied Jobs
              </ActiveLink>
            </li>
            <li>
              <ActiveLink to="/blogs" className="font-semibold text-slate-600">
                Blogs
              </ActiveLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn capitalize invisible max-w-sm lg:visible  bg-gradient-to-r from-indigo-400 via-indigo-500 to-indigo-500 border-0">
            Start Applying
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
