import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import MemoExample from "../MeMo/MeMoDemoOne/MeMoExample";

import Introhook from "../HookIntro/Introhook";
import UseStateDemo from "../useState/UseStateDemo";
/*import UseStateObject from "../useState/UseStateObject";
import ObjectUsesstate from "../useState/ObjectUsestate";
import NodependencyUseEffect from "../useEffect/NodependencyUseEffect ";
import ArrayDependency from "../useEffect/ArrayDependency";
import PropsandState from "../useEffect/PropsandState";
import UseMemo from "../useMemo/useMemo";
import UseMemoExample from "../useMemo/useMemeDemo";

import Component1 from "../useContextExample/functionone";*/
import ArrayDependency from "../useEffect/ArrayDependency";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <ArrayDependency />
    </div>
  );
}

export default App;
/*  <MemoParentComp />

  <Introhook />
    <UseStateDemo />
      <UseStateObject />
      <ObjectUsesstate />
      <NodependencyUseEffect />
      <ArrayDependency />
      <PropsandState />
      <UseMemo />
      <UseMemoExample />
      <UseCallBackDemo />
*/
