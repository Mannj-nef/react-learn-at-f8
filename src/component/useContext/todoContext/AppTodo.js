import React from "react";
import Provider from "../../../store/Provider";
import Todo from "./Todo";
import "./style.css";

const AppTodo = () => {
  return (
    <Provider>
      <Todo></Todo>
    </Provider>
  );
};

export default AppTodo;
