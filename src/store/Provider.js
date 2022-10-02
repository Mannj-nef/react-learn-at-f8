import React, { useReducer } from "react";
import Context from "./Context";
import reducer, { initState } from "./reducre";

const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initState);

  return (
    <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
  );
};

export default Provider;
