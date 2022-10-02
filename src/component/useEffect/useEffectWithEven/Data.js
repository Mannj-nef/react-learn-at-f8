import React from "react";
const Data = ({ value }) => {
  return (
    <>
      <ul>
        {value.map((item) => (
          <li key={item.id}>{item.title || item.name}</li>
        ))}
      </ul>
    </>
  );
};

export default Data;
