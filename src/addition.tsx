import { useState, useEffect, useContext, useMemo, useCallback } from "react";
import { ThemeContext } from "./context";

export const Addition = () => {
  const theme = useContext(ThemeContext);
  const [num1, setNum1] = useState(1);
  const [num2, setNum2] = useState(2);
  const [response, setResponse] = useState("");
  const [score, setScore] = useState(0);
  const [answer, setAnswer] = useState(3);
  const sc = useMemo(() => {
    return score ** 2;
  }, [score]);
  const fn = (num1: number, num2: number) => setAnswer(num1 + num2);
  const Add = useCallback(fn, []);

  const updateResponse = (event: React.ChangeEvent<HTMLInputElement>) => {
    setResponse(event.target.value);
  };

  const inputKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      const answer = parseInt(response);
      if (num1 + num2 === answer) {
        setNum1(Math.ceil(Math.random() * 10));
        setNum2(Math.ceil(Math.random() * 10));

        setScore(score + 1);
        setResponse("");
      } else {
        setScore(score - 1);
        setResponse("");
      }
    }
  };
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `Your score is ${score}`;
  });

  if (score === 10) {
    return <div>You won!</div>;
  }

  return (
    <div>
      <div style={{ color: theme }}>
        {num1} + {num2}
      </div>
      <input
        autoFocus={true}
        onKeyDown={inputKeyPress}
        onChange={updateResponse}
        value={response}
      />
      <div>Score: {score} </div>
      <p>The current color is {theme}.</p>;
      <h1>The current score squared is {sc}.</h1> ;
      <h1 style={{ color: theme }}>
        {" "}
        "{num1} plus {num2} is:" {answer}.
      </h1>
      ;<div>{num1 + num2}</div>
    </div>
  );
};
