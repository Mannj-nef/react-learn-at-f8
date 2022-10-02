import React, { useReducer } from "react";

const initState = 0;

const reducer = (state, action) => {
  switch (action) {
    case "DOWN_ACTION":
      return state - 1;
    case "UP_ACTION":
      return state + 1;

    default:
      break;
  }
};

const CountDown = () => {
  const [count, dispatch] = useReducer(reducer, initState);

  const handlebtn = (dir) => {
    if (dir === 1) {
      dispatch("DOWN_ACTION");
    }
    if (dir === 2) {
      dispatch("UP_ACTION");
    }
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => handlebtn(1)}>Down</button>
      <button onClick={() => handlebtn(2)}>Up</button>
    </div>
  );
};

export default CountDown;
