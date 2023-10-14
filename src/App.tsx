import React from "react";
import { Addition } from "./addition";
import { useState } from "react";
import { ThemeContext, ThemeContextType } from "./context";

function App() {
  const [theme, setTheme] = useState<ThemeContextType>("red");
  const changeColor = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const num = Math.floor(Math.random() * 10);
    if (num % 2 === 0) {
      setTheme("green");
    } else {
      setTheme("red");
    }
  };
  return (
    <div className="App">
      <ThemeContext.Provider value={theme}>
        <Addition />
      </ThemeContext.Provider>
      <button onClick={changeColor}> Random color </button>
    </div>
  );
}

export default App;
