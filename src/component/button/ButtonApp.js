import React from "react";
import GlobalStyle from "../globalStyle/GlobalStyle";
import Btn from "./Btn";
import "./style.scss";

const ButtonApp = () => {
  return (
    <GlobalStyle>
      <Btn props={`button-1`} className={"btn"} />
      <Btn props={"button-2"} />
    </GlobalStyle>
  );
};

export default ButtonApp;
