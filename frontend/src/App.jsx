import Login from "./Pages/signin/Login.jsx";
import Signup from "./Pages/signup/Signup.jsx";
import Home from "./Pages/home/Home.jsx";

import { Navigate } from "react-router-dom";

import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useAuthContext } from "./Context/AuthContext.jsx";

export default function App() {
  const { authUser } = useAuthContext();

  return (
    <>
      <div className="p-1 flex flex-col items-center justify-center">
        <Routes>
          <Route
            path="/login"
            element={authUser ? <Navigate to="/" /> : <Login />}
          />
          <Route
            path="/signup"
            element={authUser ? <Navigate to="/" /> : <Signup />}
          />
          <Route
            path="/"
            element={
              authUser ? (
                <Navigate to={`/home/${authUser.id}`} />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route
            path="/home/:id"
            element={
              authUser ? (
                <Home />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
        </Routes>
        <Toaster />
      </div>
    </>
  );
}
