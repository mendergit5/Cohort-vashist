import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <CardWrapper>
          <TextComponent>
            Vashist
          </TextComponent>
        </CardWrapper>
      </div>
    </>
  )
}

function CardWrapper({children}) {
  return <div style={{ border: "2px solid black", padding:10,margin:10}}>{children}</div>
}

function TextComponent({children}){
  return <div>
    {children}
  </div>
}


export default App
