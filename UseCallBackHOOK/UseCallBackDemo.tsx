import react from "react";
import { useState } from "react/cjs/react.development";
import Button from "./Button";
import Header from "./Header";
function UseCallBackDemo() {
  const [nameHome, setName] = useState("Home Page");
  const [nameAbout, setAbout] = useState("Demo page");
  const HomeHeader = () => {
    setName("home page update");
  };
  /*const AboutHeader = () => {
    setAbout("About Page upadate ");
  };*/
  return (
    <>
      <Header type="home" name={nameHome} />
      <Button clickHanlder={HomeHeader}>update home Header</Button>
    </>
  );
}
export default UseCallBackDemo;
