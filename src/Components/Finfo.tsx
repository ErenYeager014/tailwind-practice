import React from "react";
interface data {
  head: string;
  comp: String[];
}
const Finfo = ({ data }: { data: data }) => {
  return (
    <>
      <div className="flex flex-col justify-between capitalize mx-5">
        <h4 className="text-[#423f3f] font-bold text-xl py-5">{data.head}</h4>
        {data.comp.map((item, index) => (
          <a href="#" key={index}>
            {item}
          </a>
        ))}
      </div>
    </>
  );
};

export default Finfo;
