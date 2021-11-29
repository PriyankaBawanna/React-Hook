import react from "react";
function Button(Props) {
  console.log("button ...." + Props.children);
  return (
    <>
      <button onclick={Props.clickHanlder}>{Props.children}</button>
    </>
  );
}
export default Button;
