import { useEffect, useState } from "react";
import Data from "./Data";

const arrApi = ["posts", "comments", "albums", "photos", "todos", "users"];

const UseEffect = () => {
  const [value, setValue] = useState("");
  const [listValue, setListValue] = useState([]);
  const [data, setData] = useState("posts");
  const [scrollTop, setScrollTop] = useState(false);

  useEffect(() => {
    async function getData() {
      const apiData = await fetch(
        `https://jsonplaceholder.typicode.com/${data}`
      );

      const dataJson = await apiData.json();
      setListValue(dataJson);
    }
    getData();
  }, [data]);

  useEffect(() => {
    const handleScroll = () => {
      const sTop = window.scrollY;
      setScrollTop(sTop >= 500);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    console.log(window.pageYOffset);
    window.scroll(0, 0);
  };

  return (
    <div>
      <div>
        {arrApi.map((item, index) => (
          <button key={index} onClick={() => setData(item)}>
            {item}
          </button>
        ))}
      </div>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <Data value={listValue}></Data>

      {scrollTop && (
        <button
          style={{
            position: "fixed",
            bottom: 20,
            right: 20,
            cursor: "pointer",
          }}
          onClick={handleScroll}
        >
          Go to top
        </button>
      )}
    </div>
  );
};

export default UseEffect;
