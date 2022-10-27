import React, { useState } from "react";
import classes from "./Counter.module.scss";

const Counter = () => {
  const [count, setCount] = useState(0);

  const plusCount = (n) => {
    setCount(count + n);
  };

  return (
    <div className={classes.counter}>
      <h2>Счетчик</h2>
      <h1>{count}</h1>
      <button onClick={() => plusCount(-1)} className={classes.minus_btn}>
        - Минус
      </button>
      <button onClick={() => plusCount(1)} className={classes.plus_btn}>
        Плюс +
      </button>
    </div>
  );
};

export default Counter;
