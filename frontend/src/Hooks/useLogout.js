import {useState} from 'react';
import { useAuthContext } from '../Context/AuthContext';
import Loading from '../Pages/home/Loading';
import toast from "react-hot-toast"
import {useNavigate} from "react-router-dom"

const useLogout = ()=> {
    const [isLoading, setLoading] = useState(false);
    const {setUserList, setSelectedUser, setUserChats, setAuthUser} = useAuthContext();
    const navigate = useNavigate();

    const logout = async() => {
        setLoading(true);
        try{
            const res = await fetch("/api/auth/logout", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
            });
            const data = await res.json();
            if(data.error){
                throw new Error(data.error);
            }

            localStorage.removeItem("chat-user");
            setAuthUser(null);
            setUserList([]);
            setSelectedUser({});
            setUserChats([])
            
            navigate("/");

            
        }catch(e){
            toast.error(e.message);
        }finally{
            setLoading(false);
        }
    }
    return {Loading, logout};
}

export default useLogout;