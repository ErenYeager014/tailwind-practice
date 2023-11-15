import Image from "next/image";
import React from "react";
import Button from "./Button";
const Cards = ({
  image,
  user,
}: {
  image: any;
  user: "single" | "double" | "triple";
}) => {
  return (
    <div
      className={`flex flex-col justify-around gap-2 items-center py-8 w-[400px] h-[450px] shadow-xl px-4 font-semibold rounded-lg hover:scale-100 transition-all duration-75 ${
        user === "triple" &&
        "scale-[1] bg-[#e7e6e6] shadow-2xl hover:scale-[1.05] transition-all duration-75"
      } scale-90`}
    >
      <Image
        src={image}
        fill={false}
        alt="single"
        height={100}
        width={100}
        className="md:absolute md:mt-[-115%]"
      />
      <h2 className="capitalize text-2xl font-black">{user} user</h2>
      <h1 className="capitalize text-[50px] font-black">$150</h1>
      <p className="capitalize ">500 GB stroage</p>
      <p className="capitalize ">1 user allowed </p>
      <p className="capitalize ">send up to 20 GB</p>
      <Button color="bg-[#00df9a] px-6" data="Purchase Now" />
    </div>
  );
};

export default Cards;
