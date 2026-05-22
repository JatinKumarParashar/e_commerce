import React from "react";
import img from "../assets/footerImage.webp";
import logo from "../assets/discord.png";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      {/* <img src={img}></img> */}
      <div className="w-full border flex bg-[#2C5EAD] gap-4 p-20">
        <div className=" w=1/2 flex items-center size-auto">
          <img src={logo} className="size-[50px] border-none"></img>
          <h1 className="font-bold text-3xl text-[#4BB8FA]">LA COLLECTION</h1>
        </div>
        <div className="w-1/4 pl-10 items-center">
          <ul className="text-2xl text-[#4BB8FA] font-semibold ml-auto">
            Company
          </ul>

          <li className="text-[#C4E2F5] text-lg list-none ">
            <NavLink to="/products" className="hover:font-bold">Produts</NavLink>
          </li>
          <li className="text-[#C4E2F5] text-lg list-none ">
            <NavLink to="/contact" className="hover:font-bold">Contact Us</NavLink></li>
          <li className="text-[#C4E2F5] text-lg list-none hover:font-bold">About Us</li>
        </div>
        <div></div>
        <div className="w-1/4">
          <ul className="text-2xl text-[#4BB8FA] font-semibold list-none">
            Customer
          </ul>
          <li className="text-[#C4E2F5] text-lg list-none hover:font-bold">Login</li>
          <li className="text-[#C4E2F5] text-lg list-none hover:font-bold ">Register</li>
          <li className="text-[#C4E2F5] text-lg list-none hover:font-bold ">
            <NavLink to="/cart" className="hover:font-bold">Cart</NavLink>
          </li>
        </div>
      </div>
    </>
  );
};

export default Footer;
