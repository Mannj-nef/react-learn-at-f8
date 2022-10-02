import React, { useEffect, useState } from "react";

const Countdown = () => {
  const [number, setNumber] = useState(180);

  useEffect(() => {
    setInterval(() => {
      const time = setNumber(function (pry) {
        return pry - 1;
      });
      console.log(0);

      return () => clearInterval(time);
    }, 1000);
  }, []);

  return (
    <div>
      <h1>{number}</h1>
    </div>
  );
};

export default Countdown;
