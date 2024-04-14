import Login from "./Pages/signin/Login.jsx";
import Signup from "./Pages/signup/Signup.jsx";
import Home from "./Pages/home/Home.jsx";

import { Navigate } from "react-router-dom";

import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useAuthContext } from "./Context/AuthContext.jsx";

export default function App() {
  var hours = 1; // to clear the localStorage after 1 hour
  // (if someone want to clear after 8hrs simply change hours=8)
  var now = new Date().getTime();
  var setupTime = localStorage.getItem("chat-user");
  if (now - setupTime > hours * 60 * 60 * 1000) {
    localStorage.clear();
  }
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
            element={authUser ? <Home /> : <Navigate to="/login" />}
          />
        </Routes>
        <Toaster />
      </div>
    </>
  );
}
