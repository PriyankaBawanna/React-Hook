import react from "react";
import Component4 from "../useContextExample/component4";
function Component3({ user }) {
  return (
    <>
      <h1>Component 3</h1>
      <Component4 user={user} />
    </>
  );
}
export default Component3;
