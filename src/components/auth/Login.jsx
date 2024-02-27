//contains the frontend for login page

import React, { useState } from "react";
import dumbbelldoorLogo from "../../assets/dumbbelldoorLogo.png";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://dumbbelldoor-backned.onrender.com/api/auth/login",
        { email, password }
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const handleGoogleLogin = () => {
    //window.location.href = "https://dumbbelldoor-backned.onrender.com/auth/google";
    window.open("https://dumbbelldoor-backned.onrender.com/auth/google", "_blank", "noreferrer");
  };

  return (
    <div
      className="relative w-screen h-screen flex justify-center items-center"
      style={{
        background: "linear-gradient(to right, #29000F, #00101C)",
      }}
    >
      <img
        src={dumbbelldoorLogo}
        alt="Logo"
        className="absolute top-0 left-0 m-4 max-w-full h-auto w-24  md:w-44 lg:w-48 xl:w-64"
      />
      <div className="container mx-auto w-96 border-2 border-gray-500 rounded-md">
        <div className="max-w-md mx-auto my-10">
          <div className="text-center">
            <h1 className="my-3 text-3xl font-semibold text-gray-700 dark:text-gray-200">
              Login
            </h1>
            <p className="text-gray-500 dark:text-gray-400">
              Login to access your account
            </p>
          </div>
          <div className="m-7">
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label
                  for="email"
                  className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-transparent dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                />
              </div>
              <div className="mb-4">
                <div className="flex justify-between mb-2">
                  <label
                    for="password"
                    className="text-sm text-gray-600 dark:text-gray-400"
                  >
                    Password
                  </label>
                </div>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Your Password"
                  className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-transparent dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                />
                <div className="flex justify-between mb-2">
                  <a
                    href="#!"
                    className="text-sm text-gray-400 focus:outline-none focus:text-indigo-500 hover:text-indigo-500 dark:hover:text-indigo-300 py-1.5 ml-auto"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mb-2">
                <button
                  type="submit"
                  className="w-full px-3 py-4 text-white bg-violet-600 rounded-md focus:bg-violet-800 focus:outline-none"
                >
                  Login
                </button>
              </div>
              <div className="mb-2">
                <button
                  type="submit"
                  className="w-full px-3 py-4 text-white bg-violet-600 rounded-md focus:bg-violet-800 focus:outline-none"
                  onClick={handleGoogleLogin}
                >
                  Login with Google
                </button>
              </div>
              <p className="text-sm text-center text-gray-400">
                Don&#x27;t have an account yet?{" "}
                <a
                  href="#!"
                  className="text-indigo-400 focus:outline-none focus:underline focus:text-indigo-500 dark:focus:border-indigo-800"
                >
                  Sign up
                </a>
                .
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
