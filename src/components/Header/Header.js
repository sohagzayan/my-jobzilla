import React from "react";
import { NavLink } from "react-router-dom";
import logoIcon from "../../assets/image/digipplus-logo-70x70.38a25d5cef0d.png";

/*  Active navigation style */

const Header = () => {
  return (
    <div className="container mx-auto">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
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
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/my_job">My Jobs</NavLink>
              </li>
              <li>
                <NavLink to="/my_payment">My Payment</NavLink>
              </li>
              <li>
                <NavLink to="/my_offerletter">My Offerletter</NavLink>
              </li>
              <li>
                <NavLink to="/my_certificate">My Certificate</NavLink>
              </li>
            </ul>
          </div>
          <NavLink
            to="/"
            className="flex items-center text-2xl uppercase font-semibold text-[#EF6439]"
          >
            <img src={logoIcon} alt="" className="w-[40px] " />
            <span className="text-[#EEA84C]">Digi</span> pplus
          </NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex items-center gap-5 font-semibold p-0">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#EF6439] relative after:absolute after:w-[100%] after:h-[2px] after:bg-[#EF6439] after:bottom-0 after:left-0 py-3 px-2 transition-all ease-in after:transition-all after:ease-out after:delay-300"
                    : "py-3 px-2 transition-all ease-in after:w-[0%]  "
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/my_job"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#EF6439] relative after:absolute after:w-[100%] after:h-[2px] after:bg-[#EF6439] after:bottom-0 after:left-0 py-3 px-2 transition-all ease-in after:transition-all after:ease-out after:delay-300"
                    : "py-3 px-2 transition-all ease-in after:w-[0%]  "
                }
              >
                My Jobs
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/my_payment"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#EF6439] relative after:absolute after:w-[100%] after:h-[2px] after:bg-[#EF6439] after:bottom-0 after:left-0 py-3 px-2 transition-all ease-in after:transition-all after:ease-out after:delay-300"
                    : "py-3 px-2 transition-all ease-in after:w-[0%]  "
                }
              >
                My Payment
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/my_offerletter"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#EF6439] relative after:absolute after:w-[100%] after:h-[2px] after:bg-[#EF6439] after:bottom-0 after:left-0 py-3 px-2 transition-all ease-in after:transition-all after:ease-out after:delay-300"
                    : "py-3 px-2 transition-all ease-in after:w-[0%]  "
                }
              >
                My Offerletter
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/my_certificate"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#EF6439] relative after:absolute after:w-[100%] after:h-[2px] after:bg-[#EF6439] after:bottom-0 after:left-0 py-3 px-2 transition-all ease-in after:transition-all after:ease-out after:delay-300"
                    : "py-3 px-2 transition-all ease-in after:w-[0%]  mx-auto"
                }
              >
                My Certificate
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="https://placeimg.com/80/80/people" alt="imagess" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a href="/fgf" className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a href="/fgf">Settings</a>
              </li>
              <li>
                <a href="/fgf">Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
