import React from "react";

const Button = (props) => {
  return (
    <button
      className={
        props.className === undefined
          ? "rounded-full bg-upwork text-white text-center py-2 hover:bg-upwork1 tracking-wide px-7"
          : `${props.className}`
      }
    >
      {props.children}
    </button>
  );
};

export default Button;
