import { useState } from "react";
import ReactDOM from "react-dom";
import Component2 from "../useContextExample/component2";
function Component1() {
  const [user, setUser] = useState("This is Function one Use state");

  return (
    <>
      <h1>{`Hello ${user}!`}</h1>
      <Component2 user={user} />
    </>
  );
}
export default Component1;
