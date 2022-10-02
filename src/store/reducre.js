const initState = {
  todoInput: "",
  todos: [],
  index: 0,
  valueBtn: "ADD",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_INPUT":
      return {
        ...state,
        todoInput: action.payload,
      };
    case "ADD_TODO":
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case "DELETE_TODO":
      const newTodo = [...state.todos];
      newTodo.splice(action.payload, 1);
      return {
        ...state,
        todos: newTodo,
      };

    case "SET_TODO":
      return {
        ...state,
        todoInput: action.payload,
      };
    case "UPDATE_BTN":
      return {
        ...state,
        valueBtn: action.payload,
      };
    case "SET_INDEX":
      return {
        ...state,
        index: action.payload,
      };
    case "UPDATE_TODO": {
      const newUpdateTodo = [...state.todos];
      newUpdateTodo.splice(action.index, 1, action.payload);
      return {
        ...state,
        todos: newUpdateTodo,
      };
    }

    default:
      throw new Error("err");
  }
};
export { initState };
export default reducer;
