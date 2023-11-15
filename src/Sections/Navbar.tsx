"use client";

import React, { createRef, useRef, useState } from "react";
import { close, menu } from "@/SVG/Images";
const Navbar = () => {
  const [toogle, settoogle] = useState<boolean>(false);
  const nav = useRef<HTMLDivElement>(null);
  const handleToogle = () => {
    if (!toogle) {
      nav.current?.classList.remove("ml-[-60%]");
    } else {
      nav.current?.classList.add("ml-[-60%]");
    }
    settoogle(!toogle);
  };
  return (
    <>
      <div className="text-white flex flex-rown px-4 h-14 justify-between items-center mx-auto max-w-7xl">
        <h1 className="text-3xl text-[#00df9a] font-bold uppercase w-full">
          React.
        </h1>
        <ul className="hidden md:flex font-bold">
          <li className="p-4">Home</li>
          <li className="p-4">About</li>
          <li className="p-4">Company</li>
          <li className="p-4">resourse</li>
          <li className="p-4">Contact</li>
        </ul>
        <div
          className="cursor-pointer text-3xl md:hidden p-4"
          onClick={handleToogle}
        >
          {toogle ? close : menu}
        </div>
        <div
          className="absolute top-0 left-0 h-full w-[60%] ml-[-60%] bg-[#000300] border-r-gray-400 transition-margin ease-in-out duration-100 md:hidden"
          ref={nav}
        >
          <h1 className="p-5 text-3xl text-[#00df9a] font-bold uppercase w-full">
            React.
          </h1>
          <ul className="flex flex-col items-left px-2">
            <li className="p-4 border-b border-gray-600 ">Home</li>
            <li className="p-4  border-b border-gray-600">About</li>
            <li className="p-4  border-b border-gray-600"> Company</li>
            <li className="p-4  border-b border-gray-600">Resourse</li>
            <li className="p-4">Contact</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
