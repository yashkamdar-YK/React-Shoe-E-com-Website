import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { NavLink } from "react-router-dom";
import UserProfile from "../UserProfile";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const handleLinkClick = ()=>{
    setIsOpen(false)
  }

  return (
    <section className="relative">
      {/* Mobile and Tablet View */}
      <div className="md:hidden flex justify-between items-center py-1 px-2">
        <img
          src="../logo.png"
          width="59px"
          height="59px"
          alt="Logo"
          className="mr-auto"
        />
        <IoMenu
          onClick={() => setIsOpen(true)}
          size={32}
          className="cursor-pointer"
        />
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col">
          <div className="flex justify-between items-center p-4">
            <img src="../logo.png" width="59px" height="59px" alt="Logo" />
            <RxCross1
              onClick={() => setIsOpen(false)}
              size={32}
              className="cursor-pointer"
            />
          </div>
          <ul className="flex flex-col items-center text-2xl gap-4 mt-8">
            <li>
              <NavLink
                to="/"
                className="font-bold tracking-[2px] uppercase text-[17px]"
                onClick={handleLinkClick}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/products"
                className="tracking-[2px] uppercase text-[17px]"
                onClick={handleLinkClick}
              >
                Shoes
              </NavLink>
            </li>
            <li>
              <a href="#" className="tracking-[2px] uppercase text-[17px]">
                Sneakers
              </a>
            </li>
            <li>
              <a href="#" className="tracking-[2px] uppercase text-[17px]">
                Sports
              </a>
            </li>
            <li>
              <NavLink
                to="/outlet"
                className="tracking-[2px] uppercase text-[17px]"
                onClick={handleLinkClick}
              >
                Outlet
              </NavLink>
            </li>
          </ul>
          <div className="mt-4 p-4 ">
            <div className="search-product ml-[25%] w-1/2 relative flex items-center mb-4">
              <input
                type="text"
                placeholder="Search"
                className="border-none bg-gray-200 text-black outline-none text-[13px] leading-[1.5] px-[16px] py-[6px] rounded-[5px]"
              />
              <i className="fa-solid fa-magnifying-glass absolute right-[15px] text-black"></i>
            </div>
            <div className="flex justify-center items-center">
              <i className="fa-regular fa-user w-11 h-12 flex justify-center items-center text-lg font-semibold"></i>
              <i className="fa-regular fa-heart w-11 h-12 flex justify-center items-center text-lg font-semibold"></i>
              <i className="fa-regular fa-bag-shopping w-11 h-12 flex justify-center items-center text-lg font-semibold"></i>
            </div>
          </div>
        </div>
      )}

      {/* Desktop View */}
      <div className="w-full h-16 bg-white hidden md:flex justify-between  items-center px-10 mt-[4px] gap-5">
        <div className="flex justify-center items-center">
          <img src="../logo.png" width="59px" height="59px" alt="Logo" />
        </div>
        <div className="flex justify-center ml-40 items-center flex-1">
          <ul className="flex justify-center items-center gap-7">
            <li>
              <NavLink
                to="/"
                className="font-bold tracking-[2px] uppercase text-[17px]"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/products"
                className="tracking-[2px] uppercase text-[17px]"
              >
                Shoes
              </NavLink>
            </li>
            <li>
              <a href="#" className="tracking-[2px] uppercase text-[17px]">
                Sneakers
              </a>
            </li>
            <li>
              <a href="#" className="tracking-[2px] uppercase text-[17px]">
                Sports
              </a>
            </li>
            <li>
              <NavLink
                to="/outlet"
                className="tracking-[2px] uppercase text-[17px]"
              >
                Outlet
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="nav_option flex justify-center items-center">
          <div className="search leading-0 mr-4">
            <div className="search-product relative flex items-center">
              <input
                type="text"
                placeholder="Search"
                className="border-none bg-gray-200 text-black outline-none text-[13px] leading-[1.5] px-[16px] py-[6px] rounded-[5px]"
              />
              <i className="fa-solid fa-magnifying-glass absolute right-[11px] text-black"></i>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <UserProfile/>
            <NavLink to="/cart">
            <i className="fa-regular fa-bag-shopping w-11 h-12 flex justify-center items-center text-lg font-semibold"></i>
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Navbar;
