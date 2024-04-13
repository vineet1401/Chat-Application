import { useSocketContext } from '../Context/SocketContext'
import { useAuthContext } from '../Context/AuthContext';
import { useEffect } from 'react';

const useListenMessage = () => {
  const { socket} = useSocketContext();
  const {userChats, setUserChats} = useAuthContext();
  
  useEffect(() => {
    socket?.on("newMessage", (newMessage)=>{
      console.log("New Message")
        setUserChats([...userChats, newMessage])
    })

    return () => socket?.off("newMessage");
  }, [socket, setUserChats, userChats]);
}

export default useListenMessage;
