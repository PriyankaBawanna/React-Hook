import react, { useState } from "react";
const ObjectUsesstate = () => {
  const [name, setname] = useState({
    name: "Priyanka",
    city: "indore ",
    year: "2021",
    color: "pink",
  });
  const updateColor = () => {
    setname((p) => {
      return { ...p, city: "Shimla" };
    });
  };
  const ChangeColor = () => {
    setname((p) => {
      return { ...p, color: "white" };
    });
  };
  return (
    <>
      <h1>
        hello my name is {name.name} and my city is {name.city} and year is{" "}
        {name.year} and i like {name.color} color
      </h1>
      <button type="button" onClick={updateColor}>
        Dream city
      </button>
      <button onClick={ChangeColor}>color</button>
    </>
  );
};
export default ObjectUsesstate;
