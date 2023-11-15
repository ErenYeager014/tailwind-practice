import Button from "@/Components/Button";
import React from "react";

const Hero = () => {
  return (
    <>
      <div className="grid place-content-center h-[calc(100vh-3.5rem)] leading-8 text-center tracking-widest">
        <h4 className="text-[15px] text-[#00df9a] uppercase font-semibold md:text-xl">
          growing with data analytics
        </h4>
        <h1 className="text-center text-3xl capitalize font-extrabold py-3 md:text-4xl">
          grow with data.
        </h1>
        <h3 className="text-xl py-2 md:text-2xl">
          Fast,flexible financing for{" "}
          <span className="text-gray-500">sass</span>
        </h3>
        <p className="text-gray-500 font-bold px-4 py-2 md:text-xl">
          Monitor your data analytics to increase revenue for{" "}
          <span className="uppercase">btb,btc & sass</span> platforms
        </p>
        <Button color={"bg-[#00df9a] mx-auto mt-3"} data={"get started"} />
      </div>
    </>
  );
};

export default Hero;
