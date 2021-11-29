import React, { useEffect, useState, memo } from "react";
import Home from "./OtherMemo";

export default function MemoExample() {
  const [count2, setCount2] = useState(0);

  const incrementtwo = () => {
    const countResult = count2 + 1;
    console.log("increment is calling ");
    setCount2(countResult);
  };

  return (
    <div>
      <h1> This is parent Component </h1>

      <h2>Increment 2 : {count2}</h2>
      <button onClick={incrementtwo}>click</button>
      <Home />
    </div>
  );
}
