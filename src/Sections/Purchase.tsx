import Cards from "@/Components/Cards";
import React from "react";
import images1 from "/public/images/single.png";
import img2 from "/public/images/double.png";
import img3 from "/public/images/triple.png";
const Purchase = () => {
  return (
    <div className="bg-white text-[#000] py-7 ">
      <div className="max-w-7xl mx-auto">
        <div className="w-full flex flex-col items-center">
          <h1 className="text-center text-3xl font-extrabold py-2">Purcahse</h1>
          <span className=" w-24 h-1 bg-[#00df9a] rounded-lg "></span>
        </div>
        <div className="flex flex-col items-center gap-10 py-20 md:flex-row md:flex-wrap md:justify-around flex-wrap">
          <Cards image={images1} user="single" />
          <Cards image={img3} user="triple" />
          <Cards image={img2} user="double" />
        </div>
      </div>
    </div>
  );
};

export default Purchase;
