import { useState } from 'react'
import toast from "react-hot-toast"
import {useNavigate} from  "react-router-dom";
import { useAuthContext } from '../Context/AuthContext';

const useSignup = () => {
    const [isloading, setLoading] = useState(false)
    const navigate = useNavigate();
    const {setAuthUser} = useAuthContext();

    const signup = async ({ fullName, userName, password, confirmPassword, gender }) => {

        if (!userName || !password || !confirmPassword || !gender || !fullName) {
            toast.error("please enter all required fields")
            return
        }

        if(password !== confirmPassword){
            toast.error("Passwords do not match")
            return
        }

        setLoading(true);
        try {
            const res = await fetch("/api/auth/signup", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({ fullName, userName, password, confirmPassword, gender })
            })

            const data  = await res.json();
            if(data.error) {
                throw new Error(data.error);
            }

            // Local Storage
            localStorage.setItem("chat-user", JSON.stringify({...data, expiry:8*60*60*1000}));

            // Context 
            setAuthUser(data);


            toast.success("Success")
            navigate(`/home/${data.id}`);
        } catch (error) {
            toast.error("Failed to Sign Up", error)
        }finally{
            setLoading(false);
        }
    }

    return {isloading, signup};
}

export default useSignup
