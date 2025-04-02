import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";

import icon from "../assets/frontend_assets/search_icon.png";
import profile from "../assets/frontend_assets/profile_icon.png";
import cart from "../assets/frontend_assets/cart_icon.png";
import menu from "../assets/frontend_assets/menu_icon.png";
import dropdown from "../assets/frontend_assets/dropdown_icon.png";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [mobileDropdownVisible, setMobileDropdownVisible] = useState(false);
  const [profileDropdown, setProfileDropdown] = useState(false);

  // Close dropdown on outside click
  useEffect(() => {
    const closeDropdown = (e) => {
      if (!e.target.closest(".profile-dropdown")) {
        setProfileDropdown(false);
      }
    };
    document.addEventListener("click", closeDropdown);
    return () => document.removeEventListener("click", closeDropdown);
  }, []);

  return (
    <div className="flex items-center justify-between py-5 font-medium">
      {/* Logo */}
      <h1 className="text-xl font-bold text-gray-900 tracking-wide uppercase">
        PHOTO PARK
      </h1>

      {/* Navbar Links */}
      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        <NavLink to="/" className="flex flex-col items-center gap-1">
          <p>HOME</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-800 hidden" />
        </NavLink>

        {/* Collection with Dropdown */}
        <li
          className="relative flex flex-col items-center gap-1 cursor-pointer"
          onMouseEnter={() => setDropdownVisible(true)}
          onMouseLeave={() => setDropdownVisible(false)}
        >
          <p>SHOP</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-800 hidden" />
          {dropdownVisible && (
            <div className="absolute top-full left-0 mt-0 w-50  bg-white shadow-md rounded-md border border-gray-200">
              <NavLink
                to="/collection/acrylic"  
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Acrylic
              </NavLink>
              <hr className="w-full border-none h-[1px] bg-gray-300 hidden" />
              <NavLink
                to="/collection/canvas"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Canvas
              </NavLink>
              <hr className="w-full border-none h-[1px] bg-gray-300 hidden" />
              <NavLink
                to="/collection/wooden-cutouts"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Wooden Cutouts
              </NavLink>
              <hr className="w-full border-none h-[1px] bg-gray-300 hidden" />
              <NavLink
                to="/collection/backlight-frames"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Backlight Photo Frames
              </NavLink>
            </div>
          )}
        </li>

        <NavLink to="/frames" className="flex flex-col items-center gap-1">
          <p>FRAMES</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-800 hidden" />
        </NavLink>

        <NavLink to="/about" className="flex flex-col items-center gap-1">
          <p>ABOUT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-800 hidden" />
        </NavLink>

        <NavLink to="/contact" className="flex flex-col items-center gap-1">
          <p>CONTACT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-800 hidden" />
        </NavLink>
      </ul>

      {/* Icons Section */}
      <div className="flex items-center gap-6">
        <img src={icon} className="w-5 cursor-pointer" alt="Search" />
        {/* Profile Dropdown */}
        <Link to="/login">
          <div
            className="relative profile-dropdown"
            onMouseEnter={() => setProfileDropdown(true)}
            onMouseLeave={() => setProfileDropdown(false)}
          >
            <img src={profile} className="w-5 cursor-pointer" alt="Profile" />

            {profileDropdown && (
              <div className="absolute right-0 mt-2 w-40 bg-white shadow-md rounded-md border border-gray-200">
                <p className="block px-4 py-2 text-gray-700 cursor-pointer hover:bg-gray-100">
                  My Profile
                </p>
                <p className="block px-4 py-2 text-gray-700 cursor-pointer hover:bg-gray-100">
                  Orders
                </p>
                <p className="block px-4 py-2 text-gray-700 cursor-pointer hover:bg-gray-100">
                  Logout
                </p>
              </div>
            )}
          </div>
        </Link>
        {/* Cart */}
        <Link to="/cart" className="relative">
          <img src={cart} className="w-5 min-w-5" alt="Cart" />
          <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-gray-900 text-white aspect-square rounded-2xl text-[8px]">
            12
          </p>
        </Link>

        {/* Mobile Menu Button */}
        <img
          onClick={() => setVisible(true)}
          src={menu}
          className="w-5 cursor-pointer sm:hidden"
          alt="Menu"
        />
      </div>

      {/* Mobile Sidebar Menu */}
      <div
        className={`absolute top-0 right-0 bottom-0 bg-white transition-all ${
          visible ? "w-full p-4" : "w-0"
        }`}
      >
        <div className="flex flex-col text-gray-700">
          <div
            onClick={() => setVisible(false)}
            className="flex items-center gap-4 p-3 cursor-pointer"
          >
            <img src={dropdown} className="h-4 rotate-180" alt="Back" />
            <p>Back</p>
          </div>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 border-b border-gray-300"
            to="/"
          >
            HOME
          </NavLink>

          {/* Mobile Collection Dropdown */}
          <div
            className="py-2 border-b border-gray-300 flex justify-between items-center cursor-pointer"
            onClick={() => setMobileDropdownVisible(!mobileDropdownVisible)}
          >
            <p>COLLECTION</p>
            <span className="text-lg">{mobileDropdownVisible ? "-" : "+"}</span>
          </div>
          {mobileDropdownVisible && (
            <div className="pl-6 flex flex-col bg-gray-100 rounded-md py-2">
              <NavLink
                onClick={() => setVisible(false)}
                className="py-2"
                to="/collection/acrylic"
              >
                Acrylic
              </NavLink>
              <NavLink
                onClick={() => setVisible(false)}
                className="py-2"
                to="/collection/canvas"
              >
                Canvas
              </NavLink>
              <NavLink
                onClick={() => setVisible(false)}
                className="py-2"
                to="/collection/wooden-cutouts"
              >
                Wooden Cutouts
              </NavLink>
              <NavLink
                onClick={() => setVisible(false)}
                className="py-2"
                to="/collection/backlight-frames"
              >
                Backlight Photo Frames
              </NavLink>
            </div>
          )}

          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 border-b border-gray-300"
            to="/about"
          >
            ABOUT
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 border-b border-gray-300"
            to="/contact"
          >
            CONTACT
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
