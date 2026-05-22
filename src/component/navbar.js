import React from "react";
import image from "../assets/discord.png";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
   const state = useSelector((state) => state.handleCart);
  return (
      <header className="" >
      <nav className="w-full flex flex-row  gap-2 bg-[#2C5EAD]">
        <div className="flex w-1/3">
          <div className="flex flex-col-2 ml-17 h-23 items-center">
            <img src={image} width="64px" height="64px" />
            <a
              href="www.google.com"
              className="flex justify-center font-bold items-center text-2xl ml-2 text-[#C4E2F5]"
            >
              LA COLLECTIONS
            </a>
          </div>
        </div>
        <div className="w-1/3 flex flex-row gap-5 justify-center items-center">
          <div className="">
            <NavLink href="#" className="font-bold transition hover:font-bold text-[#C4E2F5]" to="/">Home</NavLink>
          </div>
          <div>
            <NavLink href="/product" className=" font-semibold transition hover:font-bold text-[#C4E2F5]" to="/products">Product</NavLink>
          </div>
          <div>
            <NavLink href="/contact" className="font-semibold transition hover:font-bold text-[#C4E2F5]" to="/contact">Contact Us</NavLink>
          </div>
        </div>
        <div className="flex w-1/3 justify-end gap-5  mr-10">
          <button to="/login" className="border border-[#C4E2F5] m my-auto w-auto px-2 text-2xl rounded transition delay-75 text-[#C4E2F5] hover:bg-[#C4E2F5] hover:text-[#2C5EAD]">
            Login
          </button>
          <button to="/register" className="border border-[#C4E2F5] m my-auto w-auto px-2 text-2xl rounded transition delay-75 text-[#C4E2F5] hover:bg-[#C4E2F5] hover:text-[#2C5EAD]">
            Register
          </button>
          <Link  to="/cart" className="mr-5 border border-[#C4E2F5] m my-auto w-auto px-2  text-2xl rounded transition delay-75 text-[#C4E2F5] hover:bg-[#C4E2F5] hover:text-[#2C5EAD]">
            Cart({state.length}) 
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
