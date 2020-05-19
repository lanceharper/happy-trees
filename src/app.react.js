import React, { useState } from "react";
import AdaptedPug from "./pug.react";

export default function ReactifiedApp() {
  const message = "App Ready";
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(() => count + 1);
  };

  return (
    <div>
      <h4>{message}</h4>
      <div>{count}</div>
      <button onClick={increment}>click me</button>
      {count < 5 && <AdaptedPug />}
    </div>
  );
}
