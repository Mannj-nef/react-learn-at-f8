export const initState = {
  job: "",
  listJob: [],
};

const reducer = (state, action) => {
  let newState;
  switch (action.type) {
    case "SET_JOB":
      newState = {
        ...state,
        job: action.payload,
      };
      break;
    case "ADD_JOB":
      //   console.log(state);
      newState = {
        ...state,
        listJob: [...state.listJob, action.payload],
      };
      break;

    case "DELETE_JOB":
      const newJob = [...state.listJob];
      newJob.splice(action.payload, 1);
      newState = {
        ...state,
        listJob: newJob,
      };
      break;

    default:
      throw new Error("invalid action");
  }
  return newState;
};

export default reducer;
