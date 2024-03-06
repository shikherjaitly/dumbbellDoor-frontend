import React from "react";
import Navbar from "./Navbar";
import backgroundImage from "../assets/homeBackground.png"

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
      </div>
    </div>
  );
};

export default Home;
