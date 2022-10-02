import React, { useContext } from "react";
import { ThemeCtx } from "../../ThemeContext";
import Content from "./Content";
import "./style.css";

const Main = () => {
  const context = useContext(ThemeCtx);
  return (
    <div>
      <Content></Content>
      <button onClick={context.handleToggleTheme}>Toggle theme</button>
    </div>
  );
};

export default Main;
