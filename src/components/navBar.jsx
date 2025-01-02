/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="fixed inline-flex items-center justify-between w-full bg-white h-14 lg:px-26 xl:px-26 sm:px-8 md:px-20 px-8 z-50">
      <div className="inline-flex">
        <h1 className=" font-extrabold text-blue-950 text-[18px] sm:text-[20px] md:text-[26px] lg:text-[32px] font-poppins">
          Easy{" "}
          <span
            className="font-extrabold text-white text-[18px] sm:text-[20px] md:text-[28px] lg:text-[34px] font-ReggaeOne"
            style={{
              WebkitTextStroke: "1px black",
              color: "white", // Needed for WebkitTextStroke to work
            }}
          >
            L
          </span>
          ibro
        </h1>
      </div>

      {/* Navigation for larger screens */}
      <nav className="hidden lg:flex text-[16px]">
        <ul className="inline-flex space-x-10 font-medium text-blue-950">
          <li>DashBoard</li>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "underline underline-offset-4 " : ""
              }
            >
              Books
            </NavLink>
          </li>
          <li>Requests</li>
          <li>Reservations</li>
          <li>Notifications</li>
        </ul>
      </nav>

      {/* Navigation icons */}
      <nav className="items-end">
        <ul className="inline-flex space-x-8 font-extrabold xl:text-[16px] lg:text-[16px] md:text-[14px] sm:text-[12px] text-[12px] items-center text-blue-950">
          <li>
            <i className="fas fa-search"></i>
          </li>
          <li>
            <i className="fas fa-heart"></i>
          </li>
          <li>
            <i className="fas fa-cog"></i>
          </li>
          <li>
            <i className="fas fa-user"></i>
          </li>
        </ul>
      </nav>

      {/* Mobile menu button */}
      <button className="block lg:hidden z-50 ml-4" onClick={toggleMenu}>
        <i className="fas fa-bars"></i>
      </button>

      {/* Mobile navigation menu */}
      {isMenuOpen && (
        <nav className="absolute left-0 w-full bg-white top-14 lg:hidden z-40">
          <ul className="flex flex-col items-center font-medium text-[14px] space-y-2 text-blue-950">
            <li>Home</li>
            <li>
              <Link to="/searchbooks">Shop</Link>
            </li>
            <li>Customize</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      )}
    </div>
  );
}

export default NavBar;
