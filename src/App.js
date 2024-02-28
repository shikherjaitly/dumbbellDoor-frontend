import { Route, Routes } from "react-router-dom";
import Signup from "./components/auth/Signup";
import Login from "./components/auth/Login";
import Home from "./components/Home";
import FindTrainers from "./components/FindTrainers";
import TrainerProfile from "./components/TrainerProfile";
import TrainerRegistration from "./components/TrainerRegistration";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/trainers" element={<FindTrainers />} />
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
