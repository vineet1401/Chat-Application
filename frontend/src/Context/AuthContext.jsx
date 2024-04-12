import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export const useAuthContext = () =>{
    return useContext(AuthContext); 
}

export const AuthContextProvider = ({ children }) => {

    const [authUser, setAuthUser] = useState(JSON.parse(localStorage.getItem('chat-user'))  || null);
    const [userList, setUserList] = useState([]);
    const [selectedUser, setSelectedUser] = useState({});
    const [userChats, setUserChats] = useState([]);

  return <AuthContext.Provider value={{authUser, setAuthUser, userList, setUserList, selectedUser, setSelectedUser, userChats, setUserChats}}>
    {children}
    </AuthContext.Provider>;
};
