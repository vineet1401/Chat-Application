import  { useEffect } from 'react'
import {useAuthContext} from "../Context/AuthContext.jsx"
import toast from "react-hot-toast"

const useGetMessages = () => {

    const { selectedUser, userChats, setUserChats } = useAuthContext();
    // useListenMessage(); 

    useEffect(()=>{
        const getMessage = async() => {
            const userId = selectedUser._id;
            setUserChats([])
            try {
                const res = await fetch(`/api/message/${userId}`);
                // console.log(res.json());
                const data = await res.json();
                if(!data.length) {
                    throw new Error("No Chats Found");
                }
                setUserChats([...data]);
            } catch (error) {
                toast.error(error.message);
            }
        };
        if (selectedUser?._id) getMessage();
    }, [selectedUser?._id, setUserChats])

    return {userChats};
}

export default useGetMessages
