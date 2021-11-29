import react, { useState } from "react";
const UseStateDemo = () => {
  const [brand, setBrand] = useState("Ford");
  const [model, setModel] = useState("abc");
  const [year, setYear] = useState("1964");
  const [color, setColor] = useState("red");
  const SetModelCar = (e: any) => {
    const newtext = model;
    setModel(e.target.value);
  };
  console.log("i'm rendering");
  return (
    <>
      <h1>My {brand}</h1>
      <p>
        It is a {color} {model} from {year}.
      </p>

      <input type="text" onChange={(e) => setBrand(e.target.value)} />
      <input type="tetx" value={model} onChange={SetModelCar} />
    </>
  );
};
export default UseStateDemo;
