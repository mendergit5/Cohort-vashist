import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// useEffect
// useEffect( , ) - first argument what should be happend, second argument is dependecy array as when should happen like under which condition useEffect should execute 

function App() {

  const [todos, setTodos] = useState([]);
  
  useEffect(() => {
    setInterval(() => {
      fetch("https://sum-server.100xdevs.com/todos")
      .then(async function(res){
        const json = await res.json();
        setTodos(json.todos);
      })
    }, 1000);
   },[])

  return (
    <>
      <div>
      {todos.map(todo => <Todo key ={todo.id} title={todo.title} description={todo.description}/>)};
      </div>
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
