import { useContext, useState } from "react"
import { CountContext } from "./context";
import { Navigate } from "react-router-dom";
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { countAtom, evenSelector } from "./store/atoms/count";


function App() {
  // wrap anyone that wants to use the teleported value inside a provider
  // recoil, redux, Themes in mUI
  return (
    <div>
      <RecoilRoot>
        <Count/>
      </RecoilRoot>
    </div>
  )
}

function Count() {
  return <div>
    <CountRenderer />
    <Buttons/>
  </div>
}

function CountRenderer() {
  const count = useRecoilValue(countAtom);
  return(
  <div>
    <b>
    {count}
    </b>
    <EvenCountRerenderer />
  </div>)
}

function EvenCountRerenderer(){
  const isEven = useRecoilValue(evenSelector);
  return <div>
     {isEven ? "It is even" : null}
  </div>
}

// this button component rerender countRenderer when using useRecoilState, so we can use useSetRecoilState

// function Buttons() {
//   const [count,setCount] = useRecoilState(countAtom);
//   console.log("rerendered");
//   return <div>
//     <button onClick={() => {
//       setCount(count + 1)
//     }}>Increase</button>

//     <button onClick={() => {
//       setCount(count - 1)
//     }}>Decrease</button>
//   </div>
// }

function Buttons() {
  const setCount = useSetRecoilState(countAtom);
  console.log("rerendered");
  return <div>
    <button onClick={() => {
      setCount(count => count + 1);
    }}>Increase</button>
    <button onClick={() => {
      setCount(count => count - 1);
    }}>Decrease</button>
  </div>
}

export default App
