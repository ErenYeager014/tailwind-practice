import React from "react";
type props = {
  color: string;
  data: string;
};
const Button = ({ color, data }: props) => {
  return (
    <button
      className={`${color} font-extrabold text-[18px] capitalize justify-center rounded-md px-20 py-2`}
    >
      {data.toLocaleLowerCase()}
    </button>
  );
};

export default Button;
