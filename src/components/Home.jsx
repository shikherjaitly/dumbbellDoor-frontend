import React from "react";
import Navbar from "./Navbar";
import backgroundImage from "../assets/homeBackground.png"
import HeaderFrame from "./pages/HeaderFrame";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div
        className="bg-cover bg-center w-screen h-screen"
        style={{ 
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        >
        
        <Navbar />
        <div className="flex flex-row items-center justify-center h-screen">
          <p className="m-0 h-1 relative text-white font-normal font-saira-stencil text-6xl -mt-180">
            Unleash Your Potential, HERE!
          </p>
        </div>
        <div className="flex flex-row items-center justify-center pr-3 -mt-64 text-white">
            <h1 className="m-0 relative text-inherit [text-decoration:underline] font-medium font-inherit text-xl">
              Join 500+ people in the journey
            </h1>
        </div>
        <div className="absolute bottom-0 left-0 right-0 flex justify-center mb-8">
        <div className="pt-6 flex">
          <Link
            to="/signup"
            className="flex items-center justify-center block px-20 mb-3 py-4 text-sm text-center font-semibold leading-none bg-lime-400 hover:bg-lime-500 transition-all rounded-xl mr-4"
          >
            Sign Up
          </Link>
          <Link
            to="/login"
            className="flex items-center justify-center block px-20 mb-3 py-4 text-sm text-center text-black font-semibold bg-sky-400 hover:bg-sky-500 transition-all rounded-xl"
          >
            Login
          </Link>
        </div>
        </div>
      </div>
      <HeaderFrame />

      </div>
  );
};

export default Home;
