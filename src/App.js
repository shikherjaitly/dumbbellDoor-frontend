import { Route, Routes } from "react-router-dom";
import Signup from "./components/auth/Signup";
import Login from "./components/auth/Login";
import Home from "./components/Home";
import FindTrainers from "./components/pages/FindTrainers";
import TrainerProfile from "./components/TrainerProfile";
import TrainerRegistration from "./components/pages/TrainerRegistration";
import TrainerBookings from "./components/pages/TrainerBooking.jsx";
import ForgotPassword from "./components/auth/ForgotPassword";
import ResetPassword from "./components/auth/ResetPassword";
import BookingPage from "./components/pages/BookingPage";
import EditBooking from "./components/pages/EditBooking";
import CustomerProfile from "./components/pages/CustomerProfile";
import CustomerBookings from "./components/pages/CustomerBookings";
import CustomerRegistration from "./components/pages/CustomerRegistration";
import Context from "./utils/Context.js";

export default function App() {
  return (
    <Context>
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
            path="/customer/your-details"
            element={<CustomerRegistration />}
          />
          <Route
            path="/trainer/:trainerName/:trainerID"
            element={<TrainerProfile />}
          />
          <Route path="/customer" element={<CustomerProfile />} />
          <Route
            path="/trainer/:trainerName/:trainerID/book-session"
            element={<BookingPage />}
          />
          <Route path="/edit-booking" element={<EditBooking />} />
          <Route path="/my-bookings" element={<CustomerBookings />} />
          <Route path="/trainer/my-bookings" element={<TrainerBookings />} />
        </Routes>
      </div>
    </Context>
  );
}
