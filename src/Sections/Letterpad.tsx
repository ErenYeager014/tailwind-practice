import Button from "@/Components/Button";
import React from "react";

const Letterpad = () => {
  return (
    <div className="">
      <div className="flex flex-col max-h-[500px] items-center xl:flex-row px-4 gap-6 my-16 max-w-7xl mx-auto">
        <div className="xl:flex-1 self-center ">
          <h1 className="text-xl font-extrabold tracking-normal xl:text-3xl">
            want tips & tricks to optimize your flow?
          </h1>
          <p className="capitalize text-sm py-2">
            sign up to your newsletter and stay up to date{" "}
          </p>
        </div>
        <div>
          <div className="flex flex-col md:flex-row gap-4 md:gap-2 items-center h-full flex-nowrap">
            <input
              type="text"
              placeholder="Enter Email"
              className="w-full px-2 py-2 rounded-md flex-wrap  focus:outline-none  text-black"
            />
            <Button
              data="Notify me "
              color="bg-[#00df9a] text-black self-center w-[300px] md:self-center md:px-4 md:py-2"
            />
          </div>
          <p className="text-sm pt-2 align-bottom md:flex-grow-0 md:block">
            we care about the protection of the data Read our{" "}
            <span className="text-[#00df9a]">Privacy policy</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Letterpad;
