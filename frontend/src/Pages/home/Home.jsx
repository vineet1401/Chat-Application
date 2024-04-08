import { useEffect, useState } from "react";
import useHomeRender from "../../Hooks/useHomeRender.js";
import Navbar from "./Navbar.jsx";
import { useParams } from "react-router-dom";
import Sidebar from "./Sidebar.jsx";
import ChatSection from "./ChatSection.jsx";
import StarterChat from "./StarterChat.jsx";

const Home = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="drawer h-[90vh] lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

        <div className="drawer-content flex flex-col">
        {/* <ChatSection/> */}
          <StarterChat />
        </div>
        <Sidebar />
      </div>
    </>
  );
};

export default Home;
