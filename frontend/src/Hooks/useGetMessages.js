import React, { useEffect } from 'react'
import {useAuthContext} from "../Context/AuthContext.jsx"
import toast from "react-hot-toast"

const useGetMessages = () => {

    const { selectedUser, userChats, setUserChats } = useAuthContext()

    useEffect(()=>{
        const getMessage = async() => {
            const userId = selectedUser._id;
            setUserChats([])
            console.log(userId)
            try {
                const res = await fetch(`/api/message/${userId}`);
                // console.log(res.json());
                const data = await res.json();
                if(!data.length) {
                    console.log("less") 
                    throw new Error("No Chats Found");
                }
                setUserChats([...data]);
            } catch (error) {
                toast.error(error.message);
            }
            console.log("---")
        }
        getMessage();
    }, [selectedUser, setUserChats])

    return {userChats};
}

export default useGetMessages
