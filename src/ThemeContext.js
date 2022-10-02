import React, { createContext, useState } from "react";

const ThemeCtx = createContext();

const ThemeContext = ({ children }) => {
  const [theme, setTheme] = useState("dark");

  const handleToggleTheme = () => [
    setTheme(theme === "dark" ? "light" : "dark"),
  ];

  const context = {
    theme,
    handleToggleTheme,
  };
  return (
    <>
      <ThemeCtx.Provider value={context}>{children}</ThemeCtx.Provider>
    </>
  );
};

export { ThemeContext, ThemeCtx };
