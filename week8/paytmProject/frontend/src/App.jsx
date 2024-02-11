import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Signin } from './pages/Signin';
import { Signup } from './pages/Signup';
import { Dashboard } from './pages/Dashboard';
import { SendMoney } from './pages/SendMoney';


function App() {
  return (
    <>
      <div className="flex justify-center bg-slate-200 min-h-screen">
        {/* <div className="my-12 p-4"> */}
          <BrowserRouter>
            <Routes>
              <Route path="/" index element={<Signup />} />
              {/* <Route path="/signup" index element={<Signup />} /> */}
              <Route path="/signin" element={<Signin />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/sendmoney" element={<SendMoney />} />
            </Routes>
          </BrowserRouter>
        </div>
    </>
  )
}

export default App
