import React, { useState } from "react";
import Navbar from "../Navbar";
import Button from "@mui/material/Button";

const CustomerRegistration = () => {
    const [customerInfo, setCustomerInfo] = useState({
        name: "",
        gender: "",
        profilePicture: "",
        location: null,
        preferredLanguage: null,
        age: "",
        weight: "",
        height: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCustomerInfo((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    // List of metro city locations in India
    const metroCities = ["Bangalore", "Mumbai", "Hyderabad", "Pune", "Delhi"];

     //     Lnaguages
    const preferredlanguages = ["English", "Marathi", "Hindi", "Kannada"];


    // Handler for file change
    const handleFileChange = (e) => {
        const file = e.target.files[0]; // Get the selected file
        setCustomerInfo({
        ...customerInfo,
        profilePicture: file // Update the profilePicture in state
        });
    };

    return (
        <div className="w-full min-h-[100vh] relative [background:linear-gradient(108.87deg,_#00101c,_#00101c,_#29000f)] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] overflow-hidden flex flex-col items-center justify-start pt-[3.813rem] pb-[3.875rem] pr-[3.438rem] pl-[1.25rem] box-border gap-[2.688rem_0rem] tracking-[normal] mq750:gap-[2.688rem_0rem] mq1275:pr-[1.688rem] mq1275:box-border text-white">
          <div className=" -mt-16 mb-2">
            <Navbar />
          </div>
          <h1 className="font-lato text-4xl -mb-6 -mt-14 mr-2">Your Details</h1>
          <div className=" w-[50%] border border-gray-500 px-10 py-10 rounded-xl">
            <div className="m-auto flex flex-col justify-center items-center gap-4">
                <input
                type="text"
                className=" w-full p-4 bg-transparent border border-gray-500 rounded-md outline-none"
                autoComplete="off"
                placeholder="Name"
                name="name"
                onChange={handleChange}
                value={customerInfo.name}
                />
                <select
                className="w-full p-4 bg-transparent border border-gray-500 rounded-md outline-none"
                name="gender"
                id="gender"
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
                    className="w-full p-4 bg-transparent border border-gray-500 rounded-md outline-none"
                    name="profilePicture"
                    onChange={handleFileChange}
                />
                <select 
                    className="w-full p-4 bg-transparent border border-gray-500 rounded-md outline-none "
                    autoComplete="off"
                    placeholder="Location"
                    name="location"
                    onChange={handleChange}
                    value={customerInfo.location} >
                      {metroCities.map((city, index) => (
                        <option key={index} value={city}>
                          {city}
                        </option>
                      ))}
                </select>
                <select 
                    type="text"
                    className=" w-full p-4 bg-transparent border border-gray-500 rounded-md outline-none "
                    placeholder="Language"
                    name="preferredLanguage"
                    onChange={handleChange}
                    value={customerInfo.preferredLanguage} >
                      {preferredlanguages.map((lang, index) => (
                        <option key={index} value={lang}>
                          {lang}
                        </option>
                      ))}
                </select>
                <input
                    type="number"
                    className=" w-full p-4 bg-transparent border border-gray-500 rounded-md outline-none "
                    autoComplete="off"
                    placeholder="Age"
                    name="age"
                    onChange={handleChange}
                    value={customerInfo.age}
                />
                <input
                    type="number"
                    className=" w-full p-4 bg-transparent border border-gray-500 rounded-md outline-none "
                    placeholder="Weight in Kg"
                    name="weight"
                    onChange={handleChange}
                    value={customerInfo.weight}
                />
                <input
                    type="number"
                    className=" w-full p-4 bg-transparent border border-gray-500 rounded-md outline-none "
                    placeholder="Height in cm"
                    name="height"
                    onChange={handleChange}
                    value={customerInfo.height}
                />
                <div className=" -mb-7 ml-auto">
                    <Button>
                        Submit
                    </Button>
                </div>
            </div>
          </div>
        </div>
    );
};



export default CustomerRegistration;
