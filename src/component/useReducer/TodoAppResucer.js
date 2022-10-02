import React, { useReducer, useRef } from "react";
import { setJob, addJob, deleteJob } from "./action";
import reducer, { initState } from "./reducer";

const TodoAppResucer = () => {
  const [state, dispatch] = useReducer(reducer, initState);
  const { job, listJob } = state;

  const inputRef = useRef();

  const handleAddJob = () => {
    dispatch(addJob(job));
    dispatch(setJob(""));

    inputRef.current.focus();
  };

  return (
    <div>
      <h1>TODO</h1>
      <input
        type="text"
        ref={inputRef}
        value={job}
        onChange={(e) => dispatch(setJob(e.target.value))}
      />
      <button onClick={handleAddJob}>Add</button>

      <ul>
        {listJob.map((job, index) => (
          <li key={index}>
            {job}
            <span
              style={{ cursor: "pointer" }}
              onClick={() => dispatch(deleteJob(index))}
            >
              {" "}
              &times;
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoAppResucer;
