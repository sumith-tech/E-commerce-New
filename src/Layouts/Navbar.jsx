import React, { useState } from "react";
import LogoutButton from "./LogoutButton";
import "./Navbar.css";
import CartButton from "./CartButton";
const Navbar = () => {
  let links = [
    { name: "Home", link: "./#home" },
    { name: "Categories", link: "./#Categories" },
    { name: "About us", link: "./#about" },
    { name: "Contact us", link: "./#contact" },
  ];

  const [open, setopen] = useState(false);

  return (
    <div className="shadow-md w-full fixed top-0 left-0 z-30">
      <div className="md:flex items-center justify-between bg-black py-4 md:px-10 px-7">
        <div className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800">
          <span className="text-3xl text-indigo-600 mr-1 pt-2">
            <ion-icon name="logo-web-component"></ion-icon>
          </span>
          <span className="monk">MonkStore</span>
        </div>
        <div
          className="text-3xl text-blue-100  absolute right-8 cursor-pointer top-6 md:hidden"
          onClick={() => setopen(!open)}
        >
          <ion-icon name={open ? "close" : "menu"}></ion-icon>{" "}
        </div>
        <div className="text-3xl text-blue-100 absolute right-20 cursor-pointer top-6 md:hidden">
          <CartButton />
        </div>

        <ul
          className={`md:flex items-center md:pb-0 pb-12 absolute
         md:static bg-black md:z-auto z-[-1] left-0 w-full md:w-auto 
         md:pl-0 pl-9 transition-all duration-500 ease-in ${
           open ? "top-20 opacity-100" : "top-[-490px]" //opens list when mobile view
         } md:opacity-100 `}
        >
          {links.map((link) => (
            <li
              key={link.name}
              className="md:ml-8 text-xl md:my-0 my-7 no-underline"
            >
              <a
                href={link.link}
                className="text-blue-100 hover:text-gray-400 duration-500 no-underline"
              >
                {link.name}
              </a>
            </li>
          ))}
          <div className="max-md:hidden">
            <CartButton />
          </div>
          <LogoutButton>Logout</LogoutButton>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
