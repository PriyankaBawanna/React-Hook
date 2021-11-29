import react, { useEffect, useState } from "react";
const NodependencyUseEffect = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 5000);
  });
  return (
    <>
      <h1>time is passing {count}</h1>
    </>
  );
};
export default NodependencyUseEffect;
