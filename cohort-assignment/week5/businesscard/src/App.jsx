import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div class="flex-container">
          <TextComponent classname="heading">Vashist</TextComponent>
          <TextComponent classname="caption weight-normal grey">A Student in the 100xDevs Cohort 2.0</TextComponent>
          <TextComponent classname="sub-heading weight-bold">Interests</TextComponent>
          <TextComponent classname="sub-text weight-normal grey">Ionic</TextComponent>
          <TextComponent classname="sub-text weight-normal grey">Open Source</TextComponent>
          <TextComponent classname="sub-text weight-normal grey">App Dev</TextComponent>
          <div class='button-container'>
          <ButtonComponent classname="button blue">LinkedIn</ButtonComponent>
          <ButtonComponent classname="button blue margin-left">Twitter</ButtonComponent>
          </div>
      </div>
    </>
  )
}

// function CardWrapper({children}) {
//   return <div class="">{children}</div>
// }

function TextComponent({classname, children}){
  return <div class = {classname}>
    {children}
  </div>
}

function ButtonComponent({classname, children}){
  return <button class = {classname}>
    {children}
  </button>
}


export default App
