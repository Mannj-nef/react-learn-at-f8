import React, { useMemo, useRef, useState } from "react";

//useMemo :

const UseMemo = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [courts, setCourts] = useState([]);

  const isfocus = useRef();

  const handleAdd = () => {
    setCourts([
      ...courts,
      {
        name,
        price: +price,
      },
    ]);
    setName("");
    setPrice("");
    isfocus.current.focus();
  };

  const total = useMemo(() => {
    const result = courts.reduce((a, b) => {
      console.log("tinh toan lai...");
      return a + b.price;
    }, 0);
    return result;
  }, [courts]);

  return (
    <>
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        <input
          type="text"
          ref={isfocus}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="text"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <button onClick={handleAdd}>Add</button>
      </div>
      <p>Total: {total}</p>
      <ul>
        {courts.map((court, index) => (
          <li key={index}>
            {court.name}: {court.price}
          </li>
        ))}
      </ul>
    </>
  );
};

export default UseMemo;
