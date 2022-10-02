import React, { useEffect, useLayoutEffect, useRef, useState } from "react";

const UseRefCount = () => {
  const [number, setNumber] = useState(60);

  const timer = useRef();
  const preTime = useRef();

  useEffect(() => {
    preTime.current = number;
  }, [number]);

  const handleStartCount = (check) => {
    timer.current = setInterval(() => {
      setNumber((number) => number - 1);
    }, 1000);
  };

  const stopCount = (check) => {
    clearInterval(timer.current);
  };

  console.log(preTime.current, number);
  return (
    <div>
      <h1>{number}</h1>
      <button onClick={handleStartCount}>Start</button>
      <button onClick={stopCount}>Stop</button>
    </div>
  );
};

export default UseRefCount;
