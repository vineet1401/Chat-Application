// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import useSignup from "../../Hooks/useSignup";
import { Link } from "react-router-dom";

const Signup = () => {
  const [inputs, setInputs] = useState({
    fullName: "",
    userName: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });
  const { isloading, signup } = useSignup();
  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(inputs);
  };

  return (
    <div className="h-[100vh]  items-center flex justify-center px-5 lg:px-0">
      <div className="max-w-screen bg-white border shadow sm:rounded-lg flex justify-center md: w-[80vw]">
        <div className="flex-1 lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
          <div className=" flex flex-col items-center">
            <div className="text-center">
              <h1 className="text-2xl xl:text-4xl font-extrabold text-blue-900">
                Signup to Chat Waves
              </h1>
              <p className="text-[12px] mt-2 text-gray-500">
                Hey enter your details to Signup your account
              </p>
            </div>
            <div className="w-full flex-1 mt-5">
              <form>
                <div className="mx-auto max-w-xs flex flex-col gap-4">
                  <input
                    className="w-full px-5 py-2 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-black text-sm focus:outline-none focus:border-black focus:bg-white"
                    type="text"
                    value={inputs.fullName}
                    onChange={(e) => {
                      setInputs({ ...inputs, fullName: e.target.value });
                    }}
                    placeholder="Enter your Full Name"
                  />
                  <input
                    className="w-full px-5 py-2 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-black text-sm focus:outline-none focus:border-black focus:bg-white"
                    type="text"
                    value={inputs.userName}
                    onChange={(e) => {
                      setInputs({ ...inputs, userName: e.target.value });
                    }}
                    placeholder="Enter your Username"
                  />

                  <input
                    className="w-full px-5 py-2 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-black text-sm focus:outline-none focus:border-black focus:bg-white"
                    type="password"
                    placeholder="Password"
                    value={inputs.password}
                    onChange={(e) => {
                      setInputs({ ...inputs, password: e.target.value });
                    }}
                  />
                  <input
                    className="w-full px-5 py-2 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-black text-sm focus:outline-none focus:border-black focus:bg-white"
                    type="password"
                    placeholder="Confirm Password"
                    value={inputs.confirmPassword}
                    onChange={(e) => {
                      setInputs({ ...inputs, confirmPassword: e.target.value });
                    }}
                  />
                  <label className="text-black font-semibold">
                    Select Gender
                  </label>
                  <div className="form-control flex flex-row justify-between">
                    <label className="label cursor-pointer flex gap-3">
                      <span className="label-text text-black">Male</span>
                      <input
                        type="radio"
                        name="radio-10"
                        className="radio border-black checked:bg-red-500"
                        onChange={() =>
                          setInputs({ ...inputs, gender: "male" })
                        }
                        checked={inputs.gender === "male"}
                      />
                    </label>
                    {/* </div>
                  <div className="form-control"> */}
                    <label className="label cursor-pointer flex gap-3">
                      <span className="label-text text-black">Female</span>
                      <input
                        type="radio"
                        name="radio-10"
                        onChange={() =>
                          setInputs({ ...inputs, gender: "female" })
                        }
                        className="radio border-black checked:bg-blue-500"
                        checked={inputs.gender === "female"}
                      />
                    </label>
                  </div>

                  <button
                    type="submit"
                    onClick={handleSubmit}
                    className="mt-5 tracking-wide font-semibold bg-blue-900 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                  >
                    {isloading ? (
                      <ThreeDots
                        visible={true}
                        height="40"
                        width="40"
                        color="#ffffff"
                        radius="9"
                        ariaLabel="three-dots-loading"
                        wrapperStyle={{}}
                        wrapperClass=""
                      />
                    ) : (
                      <>
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
                        <span className="ml-3">Signup</span>
                      </>
                    )}
                  </button>

                  <p className="mt-6 text-s text-gray-600 text-center">
                    Already have an account?{" "}
                    <Link to="/login">
                      <span className="text-blue-900 font-semibold">
                        Sign in
                      </span>
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div
          className="flex-1 text-center hidden bg-contain bg-center bg-no-repeat md:flex"
          style={{
            backgroundImage: `url(https://img.freepik.com/free-vector/global-data-security-personal-data-security-cyber-data-security-online-concept-illustration-internet-security-information-privacy-protection_1150-37336.jpg?w=740)`,
          }}
        ></div>
      </div>
    </div>
  );
};
export default Signup;
