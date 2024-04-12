import { useState } from "react";
import toast from "react-hot-toast";
import {useNavigate} from  "react-router-dom";
import { useAuthContext } from "../Context/AuthContext";


const useLogin = () => {
  const [isloading,setLoading] = useState();
  const navigate = useNavigate();
  const {setAuthUser} = useAuthContext();

  const login = async({userName, password})=>{
    if(!userName || !password){
       toast.error("Please enter all required fields");
       return
    }
    setLoading(true);
    try {
        const res = await fetch("/api/auth/login", {
            method: "POST",
            headers : {"Content-Type": "application/json"},
            body: JSON.stringify({userName, password})
        })
        const data = await res.status;

        const response = await res.json();

        if(parseInt(data/100)== 2){
            
            //Local Storage
            localStorage.setItem("chat-user", JSON.stringify(response));
            // auth Context
            setAuthUser(response);

            toast.success("Login successful");
            navigate(`/home/${response.id}`);
        }else{

            throw new Error(response.error);
        }
    } catch (error) {
        toast.error("Login Failed" + "," + error.message);
    }finally{
        setLoading(false);
    }
  }
  return {isloading, login}
}

export default useLogin;
