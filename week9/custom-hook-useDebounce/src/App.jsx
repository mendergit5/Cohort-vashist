import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function useDebounce(inputValue, delay) {
  const [debounceValue, setDebounceValue] = useState(inputValue);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounceValue(inputValue);
    }, delay)

    return () =>
      clearTimeout(handler);
      
  }, [inputValue, delay])

  return debounceValue;
};

function App() {

  const [inputValue, setInputValue] = useState('');
  const debouncedValue = useDebounce(inputValue, 500); // 500 milliseconds debounce delay

  // Use the debouncedValue in your component logic, e.g., trigger a search API call via a useEffect


  return (
    <>
      <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="Search..."/>
    </>
  )
}

export default App
