import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./Context/AuthContext.jsx";
import { SocketContextProvider } from "./Context/SocketContext.jsx";

// window.onbeforeunload = function() {
//   localStorage.removeItem("chat-user");
//   return '';
// };
function clearStorage() {

  let session = sessionStorage.getItem('register');

  if (session == null) {
  
      localStorage.removeItem('remove');

  }
  sessionStorage.setItem('register', 1);
}
window.addEventListener('load', clearStorage);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      <SocketContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </SocketContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
