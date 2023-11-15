import Finfo from "@/Components/Finfo";
import { github, insta, linkedin, stack, youtube } from "@/SVG/Images";
import React from "react";

const Footer = () => {
  const data = [
    {
      head: "solutions",
      comp: ["analytics", "marketing", "commerece", "insight"],
    },
    {
      head: "support",
      comp: ["pricing", "documentations", "guides", "api status"],
    },
    {
      head: "company",
      comp: ["about", "blog", "jobs", "careers"],
    },
  ];
  return (
    <div className="max-w-7xl mx-auto max-h-[500px] my-16">
      <div className="grid grid-cols-2 gap-5 w-full place-content-center text-justify px-4 md:grid-cols-5 md:gap-16">
        <div id="company" className="flex flex-col justify-center col-span-2">
          <h4 className="text-[#00df9a] uppercase font-bold text-3xl ">
            react.
          </h4>
          <p className="text-md py-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos debitis
            harum, consequatur beatae perferendis iste minus. Deleniti impedit
            dolor iste.
          </p>
          <div className="flex flex-row justify-between gap-0">
            <i>{insta}</i>
            <i>{youtube}</i>
            <i>{linkedin}</i>
            <i>{stack}</i>
            <i>{github}</i>
          </div>
        </div>
        {data.map((item, index) => (
          <Finfo data={item} key={index} />
        ))}
        {/* <Finfo data={data[0]} />
        {/* <Finfo />
        <Finfo /> */}
      </div>
    </div>
  );
};

export default Footer;
