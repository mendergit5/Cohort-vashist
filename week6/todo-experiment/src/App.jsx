import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
let counter = 4;
function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "go to gym",
      description: "go to gym today"
    },
    {
      id: 2,
      title: "go to food",
      description: "go to food"
    },
    {
      id: 3,
      title: "go to dinner",
      description: "go to dinner"
    }
  ])
  function addTodo(){
    setTodos([...todos, {
      id:counter++,
      title: Math.random(),
      description:Math.random()
    }])
  }

  return (
    <>
    <button onClick={addTodo}>Add todo</button>
    {todos.map(todo => <Todo key ={todo.id} title={todo.title} description={todo.description}/>)};
    </>
  )
}

function Todo({ title, description }) {
  return <div>
    <h1>
      {title}
    </h1>
    <h5>
      {description}
    </h5>
  </div>
}

export default App
