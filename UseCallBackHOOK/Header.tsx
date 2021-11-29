import react from "react";
function Header(Props) {
  console.log(Props.type + "header ---");
  return (
    <>
      <p>{Props.nameHome}</p>
    </>
  );
}
export default Header;
