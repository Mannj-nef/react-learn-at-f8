import React from "react";

const Btn = ({ props, className }) => {
  return (
    <>
      <button className={className}>{props}</button>
    </>
  );
};

export default Btn;
