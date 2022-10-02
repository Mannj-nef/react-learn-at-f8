import React, { useContext } from "react";
import { ThemeCtx } from "../../ThemeContext";

const Paragraph = () => {
  const context = useContext(ThemeCtx);

  return (
    <div>
      <p className={`text-dark-moon ${context.theme}`}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero nostrum
        natus quia ratione magni iusto molestias ad omnis, iste ut sapiente quos
        commodi adipisci optio eaque veniam perferendis provident voluptatum.
      </p>
    </div>
  );
};

export default Paragraph;
