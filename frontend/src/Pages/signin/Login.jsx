// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {Toaster} from "react-hot-toast";
import useLogin from "../../Hooks/useLogin";


const Login = () => {

  const [inputs, setInputs] = useState({
    userName: "",
    password: ""
  });

  const { login } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(inputs);
  };

  return (
    <div className="h-[100vh]  items-center flex justify-center px-5 lg:px-0">
      <div className="max-w-screen bg-white border shadow sm:rounded-lg flex justify-center md: w-[80vw]">
        <div
          className="flex-1 text-center hidden bg-contain bg-center bg-no-repeat md:flex"
          style={{
            backgroundImage: `url(https://img.freepik.com/free-vector/cloud-computing-security-abstract-concept-illustration_335657-2105.jpg?w=740)`,
          }}
        >
        </div>
        <div className="flex-1 lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
          <div className=" flex flex-col items-center">
            <div className="text-center">
              <h1 className="text-2xl xl:text-4xl font-extrabold text-blue-900">
                Login to ChatApp
              </h1>
              <p className="text-[12px] mt-4 text-gray-500">
                Hey enter your details to login your account
              </p>
            </div>
            <div className="w-full flex-1 mt-8">
              <form action="">
                <div className="mx-auto max-w-xs flex flex-col gap-4">
                  <input
                    className="w-full px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-black text-sm focus:outline-none focus:border-black focus:bg-white"
                    type="text"
                    placeholder="Enter your Username"
                    value={inputs.userName}
                    onChange={(e) => {
                      setInputs({ ...inputs, userName: e.target.value });
                    }}
                  />

                  <input
                    className="w-full px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-black text-sm focus:outline-none focus:border-black focus:bg-white"
                    type="password"
                    placeholder="Password"
                    value={inputs.password}
                    onChange={(e) => {
                      setInputs({ ...inputs, password: e.target.value });
                    }}
                  />
                  <button
                    type="submit"
                    onClick={handleSubmit}
                    className="mt-5 tracking-wide font-semibold bg-blue-900 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                  >
                    <svg
                      className="w-6 h-6 -ml-2"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                      <circle cx="8.5" cy="7" r="4" />
                      <path d="M20 8v6M23 11h-6" />
                    </svg>
                    <span className="ml-3">Login</span>
                  </button>
                  <p className="mt-6 text-s text-gray-600 text-center">
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    Don't have an account?{" "}
                    <Link to="/signup">
                      <span className="text-blue-900 font-semibold">
                        Sign Up
                      </span>
                    </Link>
                  </p>
                </div>
              </form>
              <div><Toaster/></div> 
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
