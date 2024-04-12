import toast from "react-hot-toast";
import { useAuthContext } from "../Context/AuthContext";

const useSendMessage = () => {
    const {userChats, setUserChats} = useAuthContext();

    const sendMessage = async(message, recieverId) => {
        try {
            const res = await fetch(`/api/message/send/${recieverId}`, {
                method: 'POST',
                headers: { "Content-type": "application/json" },
                body: JSON.stringify({message:message})
            });
            const data = await res.json();
            if(data.error){
                toast.error("Error sending message");
            }
            setUserChats([...userChats, data]);
        }catch(error){
            toast.error(error.message);
        }
        
    }
    return {sendMessage};
  
}

export default useSendMessage;
