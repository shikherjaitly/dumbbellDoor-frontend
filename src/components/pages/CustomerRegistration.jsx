import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import axios from "axios";
import { useUserContext } from "../../utils/UserContext";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

const CustomerRegistration = () => {
  const navigate = useNavigate();
  const { user, loginUser } = useUserContext();

  useEffect(() => {
    // Call the loginUser function when the component mounts
    loginUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Empty dependency array ensures this effect runs only once
  const [customerInfo, setCustomerInfo] = useState({
    name: "",
    gender: "",
    profilePicture: "",
    location: "",
    language: "",
    age: "",
    weight: "",
    height: "",
    phoneNumber: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // update the state with the new value
    setCustomerInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Function to handle file change with validation
  const handleFileChange = (e) => {
    const file = e.target.files[0]; // Get the selected file
    const allowedFormats = ["image/jpeg", "image/jpg", "image/png"];
    // Check if the selected file format is allowed
    if (file && allowedFormats.includes(file.type)) {
      setCustomerInfo({
        ...customerInfo,
        profilePicture: file, // Update the profilePicture in state
      });
    } else {
      toast.error("Please select a valid image file (JPEG, JPG, or PNG).");
      // Clear the file input
      e.target.value = null;
    }
  };

  // List of metro city locations in India
  const metroCities = [
    "Select location",
    "Bangalore",
    "Mumbai",
    "Hyderabad",
    "Pune",
    "Delhi",
  ];

  //     Lnaguages
  const preferredlanguages = [
    "Select language",
    "English",
    "Hindi",
    "Marathi",
    "Kannada",
  ];

  // Handler for file change
  //   const handleFileChange = (e) => {
  //     const file = e.target.files[0]; // Get the selected file
  //     setCustomerInfo({
  //       ...customerInfo,
  //       profilePicture: file, // Update the profilePicture in state
  //     });
  //   };

  const handleSubmit = async (e) => {

    e.preventDefault();

    // name Validation 
    const isValidName = /^[a-zA-Z\s]*$/.test(customerInfo.name) && customerInfo.name.length <= 30;
    // Show error message for invalid name
    if (!isValidName) {
      toast.error("Name should contain only letters and be less than 30 characters");
      return;
    } 
    
    // age validator
   
      // Check if the value is a positive integer and within the range of 1 to 100
      const isValidAge = /^\d+$/.test(customerInfo.age) && parseInt(customerInfo.age) > 18 && parseInt(customerInfo.age) <= 70;
      if (!isValidAge) {
        toast.error("Age should be a positive integer between 18 and 70.");
        return; // Exit the function without updating state if age is invalid
      }
   

    // phone number validator
    
      // Ensure that only the first input field is handled here
      
        // Check if the value matches the format of "+91" followed by 10 digits
        const isValidPhoneNumber = customerInfo.phoneNumber.length === 10;
        if (!isValidPhoneNumber) {
          toast.error("Please enter a valid phone number with 10 digits!");
          return; // Exit the function without updating state if phone number is invalid
        }
  


     // Validation for weight and height fields
   
      // Check if the value is a positive number and within the range of 0 to 200 kg
      const isValidWeight = /^[0-9]*\.?[0-9]+$/.test(customerInfo.weight) && parseFloat(customerInfo.weight) > 0 && parseFloat(customerInfo.weight) <= 200;
      if (!isValidWeight) {
        toast.error("Please enter a valid weight in kg (0 to 200).");
        return; // Exit the function without updating state if the value is invalid
      }
    
      // Check if the value is a positive number and within the range of 0 to 300 cm
      const isValidHeight = /^[0-9]*\.?[0-9]+$/.test(customerInfo.height) && parseFloat(customerInfo.height) > 0 && parseFloat(customerInfo.height) <= 300;
      if (!isValidHeight) {
        toast.error("Please enter a valid height in cm (0 to 300).");
        return; // Exit the function without updating state if the value is invalid
      }



    const formData = new FormData();
    formData.append("name", customerInfo.name);
    formData.append("email", user.email);
    formData.append("gender", customerInfo.gender);
    formData.append("profilePicture", e.target.profilePicture.files[0]);
    formData.append("location", customerInfo.location);
    formData.append("language", customerInfo.language);
    formData.append("age", customerInfo.age);
    formData.append("phoneNumber", customerInfo.phoneNumber);
    formData.append("weight", customerInfo.weight);
    formData.append("height", customerInfo.height);
    try {
      const response = await axios.patch(
        "https://dumbbelldoor-backned.onrender.com/api/customer/build-your-profile",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      document.cookie = `profileStatus=complete; path=/`;
      toast.success(response.data.message);
      navigate(`/customer/${user.id}`);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <div className="w-full min-h-[100vh] relative [background:linear-gradient(108.87deg,_#00101c,_#00101c,_#29000f)] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] overflow-hidden flex flex-col items-center justify-start pt-[3.813rem] pb-[3.875rem] pr-[3.438rem] pl-[1.25rem] box-border gap-[2.688rem_0rem] tracking-[normal] mq750:gap-[2.688rem_0rem] mq1275:pr-[1.688rem] mq1275:box-border text-white">
      <div style={{ marginTop: "-3.5rem" }}>
        <Navbar />
      </div>
      <h1 className=" font-semibold text-[36px]">Your Details</h1>
      <div className=" w-[50%] border border-gray-500 px-10 py-10 rounded-xl">
        <form
          onSubmit={handleSubmit}
          className="m-auto flex flex-col justify-center items-center gap-4"
        >
          <input
            type="text"
            className=" w-full p-4 bg-transparent border border-gray-500 rounded-md outline-none"
            autoComplete="off"
            placeholder="Name"
            name="name"
            required
            onChange={handleChange}
            value={customerInfo.name}
          />
          <select
            className="w-full p-4 bg-transparent border border-gray-500 rounded-md outline-none"
            name="gender"
            id="gender"
            required
            onChange={handleChange}
            value={customerInfo.gender}
          >
            <option className=" text-black" value="">
              Gender
            </option>
            <option className=" text-black" value="Male">
              Male
            </option>
            <option className=" text-black" value="Female">
              Female
            </option>
          </select>
          <input
            type="file"
            required
            accept=".jpg, .jpeg, .png"
            className="w-full p-4 bg-transparent border border-gray-500 rounded-md outline-none"
            name="profilePicture"
            onChange={handleFileChange}
          />
          <select
            className="w-full p-4 bg-transparent border border-gray-500 rounded-md outline-none "
            autoComplete="off"
            placeholder="Location"
            required
            name="location"
            onChange={handleChange}
            value={customerInfo.location}
          >
            {metroCities.map((city, index) => (
              <option key={index} value={city} className=" text-black">
                {city}
              </option>
            ))}
          </select>
          <select
            type="text"
            className=" w-full p-4 bg-transparent border border-gray-500 rounded-md outline-none "
            placeholder="Language"
            name="language"
            required
            onChange={handleChange}
            value={customerInfo.language}
          >
            {preferredlanguages.map((lang, index) => (
              <option key={index} value={lang} className=" text-black">
                {lang}
              </option>
            ))}
          </select>
          <input
            type="number"
            className="w-full p-4 bg-transparent border border-gray-500 rounded-md outline-none"
            placeholder="Age"
            name="age"
            required
            onChange={handleChange}
            value={customerInfo.age}
            min="1"
            max="100"
          />
          {/* Second input field */}
          <input
            type="tel"
            className="w-full p-4 bg-transparent border border-gray-500 rounded-md outline-none"
            autoComplete="off"
            required
            placeholder="Phone Number"
            name="phoneNumber"
            onChange={handleChange}
            value={customerInfo.phoneNumber}
          />
          <input
            type="number"
            className=" w-full p-4 bg-transparent border border-gray-500 rounded-md outline-none "
            placeholder="Weight in Kg"
            name="weight"
            required
            onChange={handleChange}
            value={customerInfo.weight}
          />
          <input
            type="number"
            className=" w-full p-4 bg-transparent border border-gray-500 rounded-md outline-none "
            placeholder="Height in cm"
            name="height"
            required
            onChange={handleChange}
            value={customerInfo.height}
          />
          {/* <div className=" -mb-7 ml-auto"> */}
          <button
            type="submit"
            className=" flex justify-end items-end text-lg font-semibold text-purple-500 mb-[-1.5rem] text-right"
          >
            Submit
          </button>
          {/* </div> */}
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default CustomerRegistration;
