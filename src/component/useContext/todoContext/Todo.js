import React, { useContext, useRef } from "react";
import { StoreContext, action } from "../../../store";

const Todo = () => {
  const [state, dispatch] = useContext(StoreContext);
  const { todoInput, todos, index, valueBtn } = state;

  const inputRef = useRef();
  const btnRef = useRef();

  const handleSubmit = () => {
    dispatch(action.addTodo(todoInput));

    resetInput();
    handleFocus();
  };

  const inputUpdate = (item, index) => {
    dispatch(action.setInputTodo(item));
    dispatch(action.setIndex(index));
    dispatch(action.updateBtn("UPDATE"));

    handleFocus();
  };

  const handleUpdate = () => {
    dispatch(action.updateTodo(index, todoInput));
    dispatch(action.updateBtn("ADD"));

    resetInput();
    handleFocus();
  };

  const handleFocus = () => {
    inputRef.current.focus();
  };

  const resetInput = () => {
    dispatch(action.setInputTodo(""));
  };

  return (
    <>
      <div className="todo-wrapp">
        <input
          className="todo-input"
          ref={inputRef}
          type="text"
          value={todoInput}
          onChange={(e) => dispatch(action.setInputTodo(e.target.value))}
        />
        <button
          ref={btnRef}
          className="todo-btn"
          onClick={valueBtn === "ADD" ? handleSubmit : handleUpdate}
        >
          {valueBtn}
        </button>
      </div>
      <ul>
        {todos.map((item, index) => (
          <li className="todo-list" key={index}>
            <span
              className="todo-item"
              onClick={() => inputUpdate(item, index)}
            >
              {item}
            </span>
            <span
              className="todo-remove"
              onClick={() => dispatch(action.deleteTodo(index))}
            >
              &times;
            </span>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Todo;
