import { Route, Routes } from "react-router-dom";
import Signup from "./components/auth/Signup";
import Login from "./components/auth/Login";
import Home from "./components/Home";
import FindTrainers from "./components/FindTrainers";
import TrainerProfile from "./components/TrainerProfile";
import TrainerRegistration from "./components/TrainerRegistration";
import ForgotPassword from "./components/auth/ForgotPassword";
import ResetPassword from "./components/auth/ResetPassword";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/trainers" element={<FindTrainers />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />
        <Route
          path="/trainer/build-your-profile"
          element={<TrainerRegistration />}
        />
        <Route
          path="/trainer/:trainerName/:trainerID"
          element={<TrainerProfile />}
        />
      </Routes>
    </div>
  );
}
