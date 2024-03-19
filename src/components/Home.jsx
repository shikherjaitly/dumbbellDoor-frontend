import React, { useEffect } from "react";
import Navbar from "./Navbar";
import backgroundImage from "../assets/homeBackground.png";
import HeaderFrame from "./pages/HeaderFrame";
import { Link } from "react-router-dom";
import { useUserContext } from "../utils/UserContext";

const Home = () => {
  const { loginUser, user } = useUserContext();

  useEffect(() => {
    // Call the loginUser function when the component mounts
    loginUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Empty dependency array ensures this effect runs only once

  return (
    <div className=" w-full overflow-hidden">
      <div
        className=" w-screen h-screen"
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
        <div className="flex flex-row items-center justify-center pr-3 -mt-72 text-white">
          <h1 className="m-0 relative text-inherit [text-decoration:underline] font-medium font-inherit text-2xl">
            Join 500+ people in the journey
          </h1>
        </div>
        <div className="absolute bottom-0 left-0 right-0 flex justify-center mb-8">
        <div className="pt-6 flex">
          <Link
            to={user ? "/trainers" : "/login"}
            className="flex items-center justify-center px-28 mb-3 py-4 text-xl text-center text-black font-lato bg-sky-400 hover:bg-sky-500 transition-all rounded-full"
          >
            {user ? "Find Trainers" : "Login"}
          </Link>
        </div>
        </div>
      </div>
      <HeaderFrame />
    </div>
  );
};

export default Home;
