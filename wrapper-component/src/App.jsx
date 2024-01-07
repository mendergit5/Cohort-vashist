// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <div>
      <CardWrapper>
        Hi There
      </CardWrapper>
      <CardWrapper>
        <TextComponent></TextComponent>
      </CardWrapper>
    </div>
  )
}

function CardWrapper({children}) {
  return <div style={{ border: "2px solid black", padding:10,margin:10}}>{children}</div>
}

function TextComponent(){
  return <div>
    Hi from Text Component
  </div>
}
export default App
