import { Route, Routes } from "react-router-dom";
import Signup from "./components/auth/Signup";
import Login from "./components/auth/Login";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Trainers from "./components/Trainers";

export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/trainers" element={<Trainers />} />
      </Routes>
    </div>
  );
}
