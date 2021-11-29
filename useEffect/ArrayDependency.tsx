import react, { useEffect, useState } from "react";
const ArrayDependency = () => {
  const [welcome, setwelcome] = useState("");
  const [no, setno] = useState(1);
  useEffect(() => {
    const WelcomeString = "Welcome to Your City";
    /*  setTimeout(() => {
      setno((no) => {
        no + 1;
      });
    }, 1000);*/
    //setwelcome(WelcomeString);
    console.log("i'm useEffect with blank dependency");
  }, []);

  useEffect(() => {
    console.log("No Dependency");
  });
  useEffect(() => {
    console.log("with No dependency", no);
    return () => {
      
    };
  }, [no]);

  return (
    <>
      <h1>
        {welcome} {no}
      </h1>
      <button onClick={() => setno(no + 1)}>Click Me</button>
    </>
  );
};
export default ArrayDependency;
