import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const UserContext = createContext();

const Context = ({ children }) => {
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

  const value = {
    trainers,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default Context;
