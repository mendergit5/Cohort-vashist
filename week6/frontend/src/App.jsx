// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { Fragment, useState } from 'react'
import React from 'react';

function App() {
  const [title, setTitle] = useState("my name is vyas");

  return (
    <div>
      <button onClick={function updateTitle() {
        setTitle("my name is " + Math.random());
      }}>Update the title</button>
      <Header title={title}></Header>
      <Header title="new text"></Header>
    </div>
  )
}

const Header = React.memo(function Header({ title }) {
  return <div>
    {title}
  </div>
})

export default App
