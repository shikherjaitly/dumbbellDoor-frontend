import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import dumbbelldoorLogo from "../assets/dumbbelldoorLogo.png";
import { useUserContext } from "../utils/UserContext";
// import { useUserContext } from "../utils/UserContext";

const Navbar = () => {
  // const { user } = useUserContext();
  const { user, loginUser } = useUserContext();

  useEffect(() => {
    // Call the loginUser function when the component mounts
    loginUser();
  }, []); // Empty dependency array ensures this effect runs only once

  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="relative px-14 py-4 flex justify-between items-center bg-transparent">
        <Link className="mr-auto text-3xl font-bold leading-none" to="/">
          <img
            className="mt-4 pl-0 md:pl-4 pr-4 h-12 md:h-16 lg:mr-72"
            src={dumbbelldoorLogo}
            alt="logo"
          />
        </Link>

        <div className="lg:hidden">
          <button
            className="navbar-burger flex items-center text-blue-400 p-3 mt-4"
            onClick={toggleSidebar}
          >
            <svg
              className="block h-8 w-8"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              style={{ fill: "#36b6ff" }}
            >
              <title>Mobile menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </button>
        </div>
        <ul className="hidden lg:flex lg:mx-auto lg:items-center lg:w-auto lg:space-x-10 mt-5">
          <li>
            <Link
              className="text-lg text-gray-400 hover:text-gray-500 transition-all"
              to="/trainers"
            >
              Find Trainers
            </Link>
          </li>
          <li>
            <Link className="text-lg text-gray-400 hover:text-gray-500 transition-all">
              Testimonials
            </Link>
          </li>
          <li>
            <Link className="text-lg text-gray-400 hover:text-gray-500 transition-all">
              Contact Us
            </Link>
          </li>
          {/* if (req.cookies.accessToken) render dynamically*/}
          <li>
            <Link
              className="text-lg text-gray-400 hover:text-gray-500 transition-all"
              to={`${
                user
                  ? user.role === "Trainer"
                    ? `/trainer/${user.name}/${user._id}`
                    : `/customer/${user.name}/${user._id}`
                  : "/login"
              }`}
            >
              {user ? "My Profile" : "Login/Signup"}
            </Link>
          </li>
        </ul>
      </nav>

      <div className={isOpen ? "navbar-menu block" : "navbar-menu hidden"}>
        <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
        <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-neutral-700 border-r overflow-y-auto">
          <div className="flex items-center mb-8">
            <Link className="mr-auto text-3xl font-bold leading-none" to="/">
              <img className="h-12" src={dumbbelldoorLogo} alt="logo" />
            </Link>
            <button className="navbar-close" onClick={toggleSidebar}>
              <svg
                className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>
          <div>
            <ul>
              <li className="mb-1">
                <Link
                  className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="mb-1">
                <Link
                  className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
                  to="/trainers"
                >
                  Find Trainers
                </Link>
              </li>
              <li className="mb-1">
                <Link
                  className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
                  to="/"
                >
                  Our Services
                </Link>
              </li>
              <li className="mb-1">
                <Link
                  className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
                  to="/"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="mt-auto">
            <div className="pt-6">
              <Link
                to="/login"
                className="block px-4 py-3 mb-3 text-xs text-center font-semibold leading-none bg-gray-50 hover:bg-gray-100 rounded-xl"
              >
                Sign in
              </Link>
              <Link
                to="/signup"
                className="block px-4 py-3 mb-2 leading-loose text-xs text-center text-white font-semibold bg-blue-600 hover:bg-blue-700 rounded-xl"
              >
                Sign Up
              </Link>
            </div>
            <p className="my-4 text-xs text-center text-gray-400">
              <span>Copyright © 2021</span>
            </p>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
