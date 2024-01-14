// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import {  BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import CardList from './components/cardLists'

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<CardList />} />
        {/* <Route path="/cards" element={<CardList/>} /> */}
    </Routes>
    </BrowserRouter>
    </>
  )
}
// function Home(){
//   return<div>
//     Hello
//   </div>
// }

export default App

