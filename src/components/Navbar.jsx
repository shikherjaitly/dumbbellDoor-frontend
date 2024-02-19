import React from "react";
import dumbbelldoorLogo from "../assets/dumbbelldoorLogo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className=" bg-black flex justify-around items-center gap-80 pt-4 pb-4">
      <Link to="/">
        {" "}
        <img className="cursor-pointer" src={dumbbelldoorLogo} alt="" />
      </Link>

      <section>
        <ul className="text-white flex justify-between items-center gap-10">
          <Link
            to="/trainers"
            className=" cursor-pointer hover:text-gray-400 transition-all"
          >
            Find Trainers
          </Link>
          <Link className=" cursor-pointer hover:text-gray-400 transition-all">
            Testimonials
          </Link>
          <Link className=" cursor-pointer hover:text-gray-400 transition-all">
            Contact Us
          </Link>
          <Link
            to="/login"
            className=" cursor-pointer hover:text-gray-400 transition-all"
          >
            Login/Signup
          </Link>
        </ul>
      </section>
    </div>
  );
};

export default Navbar;
