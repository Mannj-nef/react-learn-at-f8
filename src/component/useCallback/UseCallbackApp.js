import React, { useCallback, useState } from "react";
import Content from "./Content";

const UseCallbackApp = () => {
  const [number, setNumber] = useState(0);

  const handlenumber = useCallback(() => {
    setNumber((number) => number + 1);
  }, []);

  return (
    <div>
      <Content onNumber={handlenumber} />
      <h1>{number}</h1>
    </div>
  );
};

export default UseCallbackApp;
