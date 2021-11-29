import react, { useEffect } from "react";
import { useState } from "react/cjs/react.development";
const PropsandState = () => {
  const [no, setno] = useState(0);
  const [calculation, setCalculation] = useState(0);
  const [newno, setnewno] = useState(1);
  const [Message, setMessage] = useState(0);
  const IncreaseNo = () => {
    const add = no + 1;
    setno(add);
  };
  const TwotimeIncrease = () => {
    const Multiplication = newno * 10;
    setnewno(Multiplication);
  };
  useEffect(() => {
    setCalculation(() => no * 2);
    setMessage(() => Message + 1);
  }, [no, newno]);

  return (
    <>
      <p> no :{no} </p>
      <button onClick={IncreaseNo}>Increment</button>
      <p>Dependent : {calculation}</p>

      <p> newno :{newno} </p>
      <button onClick={TwotimeIncrease}>TentimeIncrease</button>
      <p> Click :{Message}</p>
    </>
  );
};
export default PropsandState;
