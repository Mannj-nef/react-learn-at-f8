import React, { useEffect, useState } from "react";

const Image = () => {
  const [avata, setAvata] = useState();

  useEffect(() => {
    return () => {
      console.log(avata);
      URL.revokeObjectURL(avata);
    };
  }, [avata]);

  const handleAvata = (e) => {
    const file = e.target.files[0];
    file.link = URL.createObjectURL(file);
    setAvata(file.link);

    console.log(file.link);
    console.log(file);
  };
  return (
    <div>
      <input type="file" onChange={handleAvata} />

      <div>{avata && <img src={avata} style={{ width: 500 }} />}</div>
    </div>
  );
};

export default Image;
