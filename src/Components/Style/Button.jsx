import React from "react";

const Button = (props) => {
  return (
    <button
      className={`px-[20px] py-[9px] text-[1.2rem] border-none text-white cursor-pointer
      bg-black bg-opacity-90 font-bold
      shadow-[2px_2px_0_0_#FFFFFF,4px_4px_0_0_black] 
      transition duration-200 ease-in-out
      hover:shadow-[3px_3px_white,6px_6px_0_0_black]
      hover:-translate-x-0.5 hover:-translate-y-0.5
      active:shadow-[1px_1px_white,2px_2px_0_0_black]
      active:translate-x-0.5 active:translate-y-0.5
      flex items-center justify-center gap-2 `}
    >
      <span>{props.title}</span>
       {props.children}
    </button>
  );
};

export default Button;
