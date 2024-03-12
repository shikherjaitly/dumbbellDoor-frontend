import React, { createContext, useState, useContext } from "react";
import axios from "axios";

export const UserContext = createContext();

const ContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

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
    const userDetails = await fetchUserDetails(userId, userRole);
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

  const value = {
    user,
    loginUser,
    // fetchUserDetails,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export const useUserContext = () => useContext(UserContext);
export default ContextProvider;
