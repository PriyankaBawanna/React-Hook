import React, { useMemo, useState } from "react";
const UseMemo = () => {
  const [count, setCount] = useState(0);
  const [item, setitem] = useState(10);
  const calculation = useMemo(
    function multicount() {
      console.log("MultiCount");
      return count * 5;
    },
    [count]
  );
  return (
    <>
      <h1>Example of Use MeMo </h1>
      <h2>Count : {count}</h2>

      <button onClick={() => setCount(count + 1)}>Update Count</button>
      <h2>multicount{calculation}</h2>
      <h2>Multiplication : {item}</h2>
      <button onClick={() => setitem(item * 10)}>Multiply count </button>
    </>
  );
};
export default UseMemo;
