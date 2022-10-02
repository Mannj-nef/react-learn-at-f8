import React from "react";
import { useState } from "react";

const TodoList = () => {
  const [job, setJob] = useState("");
  const [jobs, setJobs] = useState(handleStorgate() ?? []);

  function handleStorgate() {
    const locaJobs = JSON.parse(localStorage.getItem("jobs"));
    return locaJobs;
  }

  const handleGetJobs = (e) => {
    const newJob = e.target.value;
    setJob(newJob);
  };

  const handleSubmit = () => {
    setJobs(() => {
      const newJobs = [...jobs, job];
      const jsonJobs = JSON.stringify(newJobs);
      localStorage.setItem("jobs", jsonJobs);

      return newJobs;
    });
    setJob("");
  };

  const removeJob = (index) => {
    const jobCoppy = [...jobs];
    jobCoppy.splice(index, 1);

    const jsonNewJobs = JSON.stringify(jobCoppy);
    localStorage.setItem("jobs", jsonNewJobs);

    setJobs(jobCoppy);
  };

  return (
    <div>
      <input
        style={{ width: 200, padding: 8 }}
        value={job}
        type="text"
        onChange={(e) => handleGetJobs(e)}
      />
      <button style={{ marginTop: 10 }} onClick={handleSubmit}>
        Submit
      </button>

      <ul>
        {jobs.map((item, index) => (
          <li key={index}>
            <span>{item}</span>
            <span
              onClick={() => removeJob(index)}
              style={{ marginLeft: 30, cursor: "pointer" }}
            >
              X
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
