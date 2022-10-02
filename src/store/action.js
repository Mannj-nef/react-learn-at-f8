export const setInputTodo = (payload) => {
  return {
    type: "SET_INPUT",
    payload,
  };
};

export const addTodo = (payload) => {
  return {
    type: "ADD_TODO",
    payload,
  };
};

export const deleteTodo = (payload) => {
  return {
    type: "DELETE_TODO",
    payload,
  };
};

export const setTodo = (payload) => {
  return {
    type: "SET_TODO",
    payload,
  };
};

export const updateTodo = (index, payload) => {
  return {
    type: "UPDATE_TODO",
    payload,
    index,
  };
};

export const setIndex = (payload) => {
  return {
    type: "SET_INDEX",
    payload,
  };
};

export const updateBtn = (payload) => {
  return {
    type: "UPDATE_BTN",
    payload,
  };
};
