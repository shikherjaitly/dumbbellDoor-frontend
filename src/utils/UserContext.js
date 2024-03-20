import React, { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";

export const UserContext = createContext();

const ContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const [trainers, setTrainers] = useState([]);

  const getTrainers = async () => {
    try {
      await axios
        .get(
          "https://dumbbelldoor-backned.onrender.com/api/trainer/getTrainers"
        )
        .then((data) => setTrainers(data.data.message));
    } catch (error) {
      console.log(error.response.data.message);
    }
  };

  useEffect(() => {
    getTrainers();
  }, []);

  const loginUser = async () => {
    // Get all cookies
    const cookies = document.cookie;

    // Parse cookies into an object
    const cookieObj = cookies.split(";").reduce((acc, cookie) => {
      const [name, value] = cookie.trim().split("=");
      acc[name] = value;
      return acc;
    }, {});

    // Access specific cookie
    // const userEmail = cookieObj["email"];
    // const userAccessToken = cookieObj["token"];
    const userId = cookieObj["id"];
    const userRole = cookieObj["role"];
    // const userData = { userEmail, userRole, userId, userAccessToken };
    // fetchUserDetails(userId, userRole);
    // return userData;
    const userDetails =
      userId !== "" &&
      userRole !== "" &&
      (await fetchUserDetails(userId, userRole));
    setUser(userDetails);
  };

  const fetchUserDetails = async (userId, role) => {
    try {
      const endpoint =
        role === "Customer"
          ? `https://dumbbelldoor-backned.onrender.com/api/customer/fetchCustomerDetails/${userId}`
          : `https://dumbbelldoor-backned.onrender.com/api/trainer/fetchTrainerDetails/${userId}`;

      const response = await axios.get(endpoint);
      return response.data.message;
    } catch (error) {
      console.error("Error fetching user details:", error);
      throw new Error("Failed to fetch user details");
    }
  };

  const getCustomerBookings = async (email) => {
    try {
      const endpoint = `https://dumbbelldoor-backned.onrender.com/api/bookings/customer/${email}`;

      const response = await axios.get(endpoint);

      return response.data.message;
    } catch (error) {
      console.error("Error fetching booking details:", error);
      throw new Error("Failed to fetch user details");
    }
  };

  const getTrainerBookings = async (email) => {
    try {
      const endpoint = `http://localhost:8000/api/bookings/trainer/${email}`;

      const response = await axios.get(endpoint);

      return response.data.message;
    } catch (error) {
      console.error("Error fetching booking details:", error);
      throw new Error("Failed to fetch user details");
    }
  };

  const value = {
    user,
    setUser,
    trainers,
    loginUser,
    // fetchUserDetails,
    getCustomerBookings,
    getTrainerBookings,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export const useUserContext = () => useContext(UserContext);
export default ContextProvider;
