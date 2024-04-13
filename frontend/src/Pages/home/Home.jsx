import { useEffect, useState } from "react";
// import useHomeRender fom "../../Hooks/useHomeRender.js";
import Navbar from "./Navbar.jsx";
import Loading from './Loading.jsx';
import Sidebar from "./Sidebar.jsx";
import ChatSection from "./ChatSection.jsx";
import StarterChat from "./StarterChat.jsx";
import { useAuthContext } from "../../Context/AuthContext.jsx";

const Home = () => {
  useEffect(() => {
    // Simulate loading for 2 seconds
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  const [isLoading, setIsLoading] = useState(true);
  const {selectedUser} = useAuthContext();
  const chatSelected = selectedUser._id ? true : false;


  return (
    <>
      
        {isLoading ? (
          <Loading />
        ) : (
          <>
            <Navbar></Navbar>
            <div className="drawer h-[90vh] sm:drawer-open">
              <input
                id="my-drawer-2"
                type="checkbox"
                className="drawer-toggle"
              />

              <div className="drawer-content flex flex-col">
                {chatSelected ? <ChatSection /> : <StarterChat />}
              </div>
              <Sidebar />
            </div>
          </>
        )}
      
    </>
  );
};

export default Home;
