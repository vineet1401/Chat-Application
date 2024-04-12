import React from "react";
import useGetUsers from "../../Hooks/useGetUsers";
import { useAuthContext } from "../../Context/AuthContext";



const Sidebar = () => {
  const { userList } = useGetUsers();
  const {selectedUser, setSelectedUser} = useAuthContext(); 

  return (
    <div className="drawer-side h-[90vh] overflow-y-scroll  bg-gray-200">
      <label
        htmlFor="my-drawer-2"
        aria-label="close sidebar"
        className="drawer-overlay"
      ></label>
      <div className="flex flex-col w-full">
        <div className="grid h-20 card bg-base-100 rounded-box place-items-center">
          <label className="input input-bordered flex items-center gap-2">
            <input type="text" className="grow" placeholder="Search" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </label>
        </div>
        <div className="grid card bg-base-100 rounded-box place-items-center">
          <ul className="menu divide-gray-100 divide-y p-1 mx-5 min-h-full bg-base-200 text-base-content">
            {userList.map((person) => (
              
              // {const isSelected = selectedUser._id === person.id }
              <li
                key={person._id}
                
                className= {`flex justify-between gap-x-6 w-full py-1 hover:bg-slate-400 rounded ${selectedUser._id == person._id ? "bg-slate-400" : ""}`}
              >
                <div onClick={()=>{setSelectedUser(person)}} className="flex min-w-0 gap-x-4" >
                  <div className="avatar offline">
                    <div className="h-12 w-12  rounded-full">
                      <img src={person.profilePic} />
                    </div>
                  </div>
                  <div className="min-w-0 flex-auto">
                    <p className="text-xl font-semibold leading-6 text-gray-900">
                      {person.fullName}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
