import { Route, Routes } from "react-router-dom";
import Signup from "./components/auth/Signup";
import Login from "./components/auth/Login";
import Home from "./components/Home";
// import Trainers from "./components/Trainers";
import Navbar from "./components/Navbar";
import FindTrainers from "./components/FindTrainers";
import ImageContainer from "./components/ImageContainer";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/trainers" element={<FindTrainers />} />
      </Routes>
    </div>
  );
}
