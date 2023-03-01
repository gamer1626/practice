import React, { useState } from "react";
import {
  FaBars,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaGooglePlusG,
} from "react-icons/fa";

const Navigation = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="w-full min-h-[50px] bg-black/60 text-gray-100 flex justify-between items-center z-10 absolute">
      <ul className="hidden sm:flex px-4">
        <li>
          {" "}
          <a href="/">Home</a>
        </li>
        <li>
          {" "}
          <a href="#gallery">Gallery</a>
        </li>
        <li>
          {" "}
          <a href="#deals">Deals</a>
        </li>
        <li>
          {" "}
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="flex items-center space-x-6 px-4 py-4">
        <a href="https://facebook.com">
          <FaFacebookF size={20}></FaFacebookF>
        </a>
        <a href="https://twitter.com">
          <FaTwitter size={20}></FaTwitter>
        </a>
        <a href="https://googlePlus.com">
          <FaGooglePlusG size={20}></FaGooglePlusG>
        </a>
        <a href="https://instagram.com">
          <FaInstagram size={20}></FaInstagram>
        </a>
      </div>
      <div onClick={handleNav} className="sm:hidden z-10 mr-4">
        <FaBars size={20}></FaBars>
      </div>
      <div
        onClick={handleNav}
        className={
          nav
            ? "overflow-y-hidden sm:hidden ease-in duration-300 text-gray-300 absolute top-0 left-0 h-screen w-full bg-black flex flex-col"
            : "absolute top-0 h-screen left-[-100%] ease-in-out duration-500"
        }
      >
        <ul className="mt-20 flex flex-col text-center spce-y-6">
          <li className="text-2xl font-bold hover:text-gray-400">
            {" "}
            <a href="/">Home</a>
          </li>
          <li className="text-2xl font-bold hover:text-gray-400">
            {" "}
            <a href="#gallery">Gallery</a>
          </li>
          <li className="text-2xl font-bold hover:text-gray-400">
            {" "}
            <a href="#deals">Deals</a>
          </li>
          <li className="text-2xl font-bold hover:text-gray-400">
            {" "}
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Navigation;
