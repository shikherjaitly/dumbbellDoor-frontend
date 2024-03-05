import React from "react";
import Navbar from "./Navbar";
import backgroundImage from "../assets/homeBackground.png"

const Home = () => {
  return (
    <div>
        <div
        className="bg-cover bg-center w-screen h-screen"
        style={{ 
          backgroundImage: `url(${backgroundImage})`
        }}
        >
        <Navbar />
        </div>
    </div>
  );
};

export default Home;
