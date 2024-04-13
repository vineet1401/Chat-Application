import { useSocketContext } from '../Context/SocketContext'
import { useAuthContext } from '../Context/AuthContext';
import { useEffect } from 'react';

const useListenMessage = () => {
  const {onlineUser, socket} = useSocketContext();
  const {userChats, setUserChats} = useAuthContext();
  
  useEffect(() => {
    socket?.on("newMessage", (newMessage)=>{
        setUserChats([...userChats, newMessage])
    })

    return () => socket?.off("newMessage");
  }, [socket, setUserChats, userChats]);
}

export default useListenMessage;
