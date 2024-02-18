import React, { useState } from "react";
// import signup from "../../assets/signup_page.png";
import { FcGoogle } from "react-icons/fc";
import axios from "axios";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8000/api/auth/signup",
        { email, password, role }
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };

  return (
    <div
      className="relative w-screen h-screen flex justify-center items-center"
      style={{
        background:
          "linear-gradient(108.87deg, #00101C 0%, #00101C 0%, #29000F 100%)",
      }}
    >
      {/* Signup Image on the left */}
      {/* <img
        className="absolute inset-0 object-cover w-1/2 h-full"
        src={signup}
        alt="signup"
      /> */}

      {/* Signup Box on the right */}
      <div className="absolute right-0 w-1/2 h-full flex justify-center items-center">
        <div
          className="box-border border-solid border border-white rounded-lg p-10 text-center"
          style={{ width: "80%", height: "80%" }}
        >
          <h1 className="font-rubik font-normal font-400 text-5xl text-white leading-65 py-10">
            Sign Up
          </h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={role}
              onChange={handleRoleChange}
              placeholder="Role"
            />
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Email"
            />
            <input
              type="passowrd"
              value={password}
              onChange={handlePasswordChange}
              placeholder="Password"
            />
            <button>Sign up</button>
          </form>
        </div>
      </div>

      {/* Google icon (if needed) */}
      <FcGoogle />
    </div>
  );
};

export default Signup;
