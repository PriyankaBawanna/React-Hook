import React from "react";
const Home = () => {
  console.log("i'm Child Component ");

  return (
    <>
      <h1>I'm home componenet </h1>
    </>
  );
};
export default React.memo(Home);
