import { useState } from 'react'
import './App.css'
import { useEffect } from 'react';

function useIsOnline(){
  const [isOnline, setIsonline] = useState(window.navigator.onLine);
  useEffect(() => {
    window.addEventListener('online', () => setIsonline(true));
    window.addEventListener('offline', () => setIsonline(false));
  },[])
  return isOnline;
}
function App() {
  const isOnline = useIsOnline()

  return (
    <>
      {isOnline ? "You are online yay!" : "You are not online"}
    </>
  )
}

export default App
