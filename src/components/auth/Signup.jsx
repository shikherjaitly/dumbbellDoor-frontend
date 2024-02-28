/* TODO 
  make responsive for mobile devices
  remove navbar
 */
import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
// import signup from "../../assets/signup_page.png";
import { FcGoogle } from "react-icons/fc";
import dumbbelldoorLogo from "../../assets/dumbbelldoorLogo.png";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
// import Navbar from "../Navbar.jsx";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://dumbbelldoor-backned.onrender.com/api/auth/signup",
        { email, password, role }
      );
      console.log(response.data.message);
      toast.success(response.data.message);
    } catch (error) {
      console.log(error.response.data.message);
      toast.error(error.response.data.message);
    }
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  // const handleRoleChange = (e) => {
  //   setRole(e.target.value);
  // };

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
              Sign Up
            </h1>
            <div className="mb-2 flex justify-center py-2">
              <button
                type="submit"
                className="px-10 py-1 my-4 flex items-center justify-center text-white bg-blue-600 rounded-full focus:bg-blue-700 focus:outline-none"
                // onClick={handleGoogleLogin}
              >
                <FcGoogle className="mr-5" />
                Signup with Google
              </button>
            </div>
          </div>

          <hr className=" w-[90%] m-auto h-[0.05rem] bg-gray-500 border-0" />

          <div className="m-7">
            {/* Main input Form */}

            <form onSubmit={handleSubmit}>
              {/* Radio button Input */}
              <div className="w-[85%] mt-4 gap-4 flex justify-center m-auto items-center text-white font-style: Rubrik; ">
                <div className=" flex justify-center items-center gap-2 grow px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-xl focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-transparent dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500 ">
                  <input
                    type="radio"
                    id="Trainee"
                    value={role}
                    name="role"
                    onChange={() => setRole("customer")}
                    placeholder="Role"
                    className="w-[1rem] h-[1rem]"
                  />

                  <label htmlFor="Trainee">Trainee</label>
                </div>
                <div className="flex justify-center items-center gap-2 grow px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-xl focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-transparent dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500">
                  <input
                    type="radio"
                    id="Trainer"
                    name="role"
                    value={role}
                    onChange={() => setRole("trainer")}
                    placeholder="Role"
                    className="w-[1rem] h-[1rem]"
                  />
                  <label htmlFor="Trainer">Trainer</label>{" "}
                </div>
              </div>

              {/* email and password */}
              <div className="mb-6 mt-6">
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
                  required
                  onChange={handleEmailChange}
                  placeholder="you@company.com"
                  className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-xl focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-transparent dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
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
                  required
                  onChange={handlePasswordChange}
                  placeholder="Your Password"
                  className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-xl focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-transparent dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                />
              </div>
              <div className="mb-2">
                <button
                  type="submit"
                  className="w-full px-3 py-4 text-white bg-violet-600 rounded-xl focus:bg-violet-800 focus:outline-none"
                >
                  Register
                </button>
              </div>

              <p className="text-sm text-center text-gray-400">
                Already have an account?{" "}
                <a
                  href="https://dumbbelldoor.netlify.app/login"
                  className="text-indigo-400 focus:outline-none focus:underline focus:text-indigo-500 dark:focus:border-indigo-800"
                >
                  Log in
                </a>
                .
              </p>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Signup;
