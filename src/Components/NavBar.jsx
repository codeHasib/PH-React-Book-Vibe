import React from "react";
import { NavLink } from "react-router";

const NavBar = () => {
  const links = (
    <>
      <li>
        {" "}
        <NavLink
          className={({ isActive }) => (isActive ? "btn btn-success" : "")}
          to={"/"}
        >
          Home
        </NavLink>{" "}
      </li>
      <li>
        {" "}
        <NavLink
          className={({ isActive }) => (isActive ? "btn btn-success" : "")}
          to={"/listedBooks"}
        >
          Listed Books
        </NavLink>{" "}
      </li>
      <li>
        {" "}
        <NavLink
          className={({ isActive }) => (isActive ? "btn btn-success" : "")}
          to={"/pagesToRead"}
        >
          Pages to Read
        </NavLink>{" "}
      </li>
    </>
  );

  return (
    <nav className="bg-base-100 shadow-sm sticky top-0 lef-0 z-50">
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <a className="text-xl font-bold">Book Vibe</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          <button className="btn btn-accent text-white font-semibold">
            {" "}
            Sign-in{" "}
          </button>
          <button className="ml-4 btn btn-success text-white font-semibold">
            {" "}
            Sign-up{" "}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
