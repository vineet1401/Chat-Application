import Login from "./Pages/signin/Login.jsx"
import Signup from "./Pages/signup/Signup.jsx"
import Home from "./Pages/home/Home.jsx"

import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <div className="p-1 flex flex-col items-center justify-center">
        <BrowserRouter>
          <Routes>

            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/home/:id" element={<Home/>}/>

          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}
