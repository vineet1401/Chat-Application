import { useState } from 'react'
import toast from "react-hot-toast"
import {useNavigate} from  "react-router-dom";

const useSignup = () => {
    const [isloading, setLoading] = useState(false)
    const navigate = useNavigate();

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
            toast.success("Success")
            navigate(`/home/${data.id}`);
            console.log(data)
        } catch (error) {
            toast.error("Failed to Sign Up", error)
        }finally{
            setLoading(false);
        }
    }

    return {isloading, signup};
}

export default useSignup
