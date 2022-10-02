import React, { memo } from "react";

const Content = ({ onNumber }) => {
  console.log("re-render");

  return (
    <div>
      <button onClick={onNumber}>click</button>
      <h1>hello anh em !</h1>
    </div>
  );
};

export default memo(Content);
