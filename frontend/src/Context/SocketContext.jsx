import { createContext, useContext, useEffect, useState } from "react";
import { useAuthContext } from "./AuthContext";
import io from "socket.io-client";


const SocketContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useSocketContext = () =>{
    return useContext(SocketContext); 
}

// eslint-disable-next-line react/prop-types
export const SocketContextProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);
  const [onlineUser, setOnlineUser] = useState([]);
  const { authUser } = useAuthContext();

  useEffect(() => {
    if (authUser) {
      // const socket = io("http://localhost:8080/", {
      //   query : {
      //       userId : authUser._id
      //   }
      // });
      const socket = io("https://wechat-fpps.onrender.com/", {
        query : {
            userId : authUser._id
        }
      });
      setSocket(socket);

      socket.on("getOnlineUser", (user) =>{
        setOnlineUser(user);
      })

      // return () => socket.close();
    } else {
      if (socket) {
        socket.close();
        setSocket(null);
      }
    }
  }, [authUser]);

  return (
    <SocketContext.Provider value={{ socket, onlineUser }}>
      {children}
    </SocketContext.Provider>
  );
};
