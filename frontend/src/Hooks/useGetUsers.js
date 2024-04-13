import { useEffect } from 'react'
import { useAuthContext } from '../Context/AuthContext';
import toast from "react-hot-toast"

const useGetUsers = () => {
  const {userList,setUserList} = useAuthContext();

  useEffect(()=>{
    const getUser = async ()=>{
        try{
            const res = await fetch("/api/user/");
            const data = await res.json();
            if(data.error){
                throw new Error(data.error);
            }
            setUserList(data);
        }
        catch(error){
            toast.error(error.message);
        }
    };

    getUser();
  }, [setUserList])

  return {userList, setUserList};

}

export default useGetUsers;
