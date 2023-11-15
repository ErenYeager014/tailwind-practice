import React from "react";
import Image from "next/image";
import laptop from "/public/images/laptop.jpg";
import Button from "@/Components/Button";
const Analytics = () => {
  return (
    <div className="bg-white text-black  ">
      <div className="px-3 py-8 flex flex-col gap-4 md:flex-row md:max-h-[500px] max-w-7xl mx-auto">
        <div className="md:max-w-[30%] md:max-h-full self-center ">
          <Image
            src={laptop}
            alt="analytics image"
            fill={false}
            className="h-[100%] w-[100%]"
          />
        </div>
        <div className="flex flex-col gap-4 md:self-center xl:flex-grow-0">
          <h4 className="uppercase font-semibold tracking-wide text-[#00df9a]">
            data analytics dashboard
          </h4>
          <h3 className=" capitalize text-2xl font-extrabold tracking-tight ">
            manage data analytics centrally
          </h3>
          <p className="font-semibold text-justify  leading-relaxed ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ullam
            quasi labore blanditiis voluptates ab laudantium, a quisquam vitae!
            Perspiciatis laudantium iste veniam ab eveniet.
          </p>
          <Button
            color={
              "text-[#fff] bg-black py-3 px-[50px] self-center xl:self-start"
            }
            data={"get started"}
          />
        </div>
      </div>
    </div>
  );
};

export default Analytics;
