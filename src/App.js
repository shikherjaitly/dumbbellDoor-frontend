import "./App.css";
import { Route, Routes } from "react-router-dom";
import Signup from "./components/auth/Signup";
import Login from "./components/auth/Login";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<h1>Dumbbell Door</h1>} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}
