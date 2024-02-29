//contains the frontend for login page

import React, { useState } from "react";
import dumbbelldoorLogo from "../../assets/dumbbelldoorLogo.png";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useParams } from "react-router"; 
import { toast } from "react-toastify";

const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const {token} = useParams();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `http://localhost:8000/api/auth/reset-password/${token}`,
        { newPassword }
      );
      console.log(response.data.message);
      toast.success(response.data.message);
    } catch (error) {
      console.log(error.response.data.message);
      toast.error(error.response.data.message);
    }
  };
  return (
    <div
      className="relative w-screen h-screen flex flex-col justify-center items-center"
      style={{
        background: "linear-gradient(to right, #29000F, #00101C)",
      }}
    >
      <img
        src={dumbbelldoorLogo}
        alt="Logo"
        className="absolute top-0 left-0 m-4 max-w-full h-auto w-24  md:w-44 lg:w-48 xl:w-64"
      />
      <div className="container mx-auto w-96 border-2 border-gray-500 rounded-xl">
        <div className="max-w-md mx-auto my-10">
          <div className="text-center">
            <h1 className="my-3 text-3xl font-semibold text-gray-700 dark:text-gray-200">
              Create New Password
            </h1>
          </div>

          <hr className=" w-[90%] m-auto h-[0.05rem] bg-gray-500 border-0" />

          <div className="m-7">
            {/* Main input Form */}

            <form onSubmit={handleSubmit}>
              {/* email and password */}

              <div className="mb-4">
                <div className="flex justify-between mb-2">
                  <label
                    for="password"
                    className="text-sm text-gray-600 dark:text-gray-400"
                  >
                    New Password
                  </label>
                </div>
                <input
                  type="password"
                  id="password"
                  value={newPassword}
                  required
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder="Your Password"
                  className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-xl focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-transparent dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                />
              </div>
              <div className="mb-4">
                <div className="flex justify-between mb-2">
                  <label
                    for="password"
                    className="text-sm text-gray-600 dark:text-gray-400"
                  >
                    Confirm Password
                  </label>
                </div>
                <input
                  type="password"
                  id="Confirm_password"
                  value={confirmPassword}
                  required
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Your Password"
                  className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-xl focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-transparent dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                />
              </div>
              <div className="mb-2">
                <button
                  type="submit"
                  className="w-full px-3 py-4 text-white bg-violet-600 rounded-xl focus:bg-violet-800 focus:outline-none"
                >
                  Confirm
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ResetPassword;
