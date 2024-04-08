import { useState } from "react";
import toast from "react-hot-toast";
import {useNavigate} from  "react-router-dom";


const useLogin = () => {
  const [isloading,setLoading] = useState();
  const navigate = useNavigate();

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
        console.log(data);
        const response = await res.json();
        if(parseInt(data/100)== 2){
            toast.success("Login successful");
            navigate(`/home/${response.id}`, {replace: true});
        }else{
            toast.error("Login Failed" + ", " +  response.error);
            // navigate("/home");
        }
        console.log(response);
    } catch (error) {
        // navigate("/home");
        toast.error("Login Failed",error.message);
    }finally{
        setLoading(false);
    }
  }
  return {isloading, login}
}

export default useLogin
