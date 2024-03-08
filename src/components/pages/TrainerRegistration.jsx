import React, { useState } from "react";
import Navbar from "../Navbar";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const steps = [
  "Personal Details",
  "Professional Background",
  "Services & Availability",
  "Contact Details",
];

const TrainerRegistration = () => {
  const [activeStep, setActiveStep] = useState(0);

  const [trainerInfo, setTrainerInfo] = useState({
    name: "",
    gender: "",
    profileiPicture: "",
    description: "",
    yearsOfExperiemce: "",
    certifications: "",
    specialization: "",
    modeOfTraining: "",
    day: "",
    startTime: "",
    endTime: "",
    city: "",
    phoneNumber: "",
    instagramID: "",
    facebookID: "",
  });

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleChange = (e) => {
    const { name, value, checked } = e.target;

    if (name === "inPerson" || name === "online") {
      setTrainerInfo((prevState) => {
        let updatedModes = [...prevState.modeOfTraining];
        if (checked) {
          updatedModes.push(value);
        } else {
          updatedModes = updatedModes.filter((mode) => mode !== value);
        }
        return {
          ...prevState,
          modeOfTraining: updatedModes,
        };
      });
    } else {
      setTrainerInfo((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const personalDetails = () => {
    return (
      <div className=" w-[70%] m-auto flex flex-col justify-center items-center gap-4 mt-12">
        <input
          type="text"
          className=" w-full p-4 bg-transparent border border-gray-500 rounded-md outline-none"
          placeholder="Name"
          name="name"
          onChange={handleChange}
          value={trainerInfo.name}
        />
        <select
          className="w-full p-4 bg-transparent border border-gray-500 rounded-md outline-none"
          name="gender"
          id="gender"
          onChange={handleChange}
          value={trainerInfo.gender}
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
          className=" w-full p-4 bg-transparent border border-gray-500 rounded-md outline-none "
          placeholder="Profile Picture"
          name="profilePicture"
          onChange={handleChange}
          value={trainerInfo.profileiPicture}
        />
        <textarea
          className=" w-full p-4 bg-transparent border border-gray-500 rounded-md outline-none resize-none"
          placeholder="Description"
          name="description"
          onChange={handleChange}
          value={trainerInfo.description}
        />
      </div>
    );
  };

  const professionalBackground = () => {
    return (
      <div className=" w-[70%] m-auto flex flex-col justify-center items-center gap-4 mt-12">
        <input
          type="text"
          className=" w-full p-4 bg-transparent border border-gray-500 rounded-md  outline-none"
          placeholder="Years of Experience"
          name="yearsOfExperiemce"
          onChange={handleChange}
          value={trainerInfo.yearsOfExperiemce}
        />
        <input
          type="text"
          className=" w-full p-4 bg-transparent border border-gray-500 rounded-md outline-none"
          placeholder="Certifications"
          name="certifications"
          onChange={handleChange}
          value={trainerInfo.certifications}
        />
        <input
          type="text"
          className=" w-full p-4 bg-transparent border border-gray-500 rounded-md outline-none "
          placeholder="Specialization"
          name="specialization"
          onChange={handleChange}
          value={trainerInfo.specialization}
        />
      </div>
    );
  };

  const servicesAndAvailability = () => {
    return (
      <div className=" w-[70%] m-auto flex flex-col items-start gap-8 mt-12">
        <div className=" flex flex-col gap-4">
          <p className=" text-gray-400">Mode of Training</p>
          <div className=" flex gap-4">
            <label>
              <input
                className=" w-4 h-4"
                type="checkbox"
                name="inPerson"
                id="inPerson"
                value="In-person"
                onChange={handleChange}
              />{" "}
              In-person
            </label>
            <label>
              <input
                className=" w-4 h-4"
                type="checkbox"
                name="online"
                id="online"
                value="Online"
                onChange={handleChange}
              />{" "}
              Online
            </label>
          </div>
        </div>
        <hr className=" w-full h-px bg-gray-500 border-0" />
        <div className=" flex flex-col gap-4">
          <p className=" text-gray-400">Availability & Schedule</p>
          <div className=" flex gap-4">
            <div className=" flex gap-2">
              <label>Day</label>
              <select
                className=" rounded-md text-black"
                name="day"
                id="day"
                onChange={handleChange}
                value={trainerInfo.day}
              >
                <option value="">Select</option>
                <option value="monday">Monday</option>
                <option value="tuesday">Tuesday</option>
                <option value="wednesday">Wednesday</option>
                <option value="thursday">Thursday</option>
                <option value="friday">Friday</option>
                <option value="saturday">Saturday</option>
                <option value="sunday">Sunday</option>
              </select>
            </div>
            <div className=" flex gap-2">
              <label>Start Time</label>
              <select
                className=" rounded-md text-black"
                name="startTime"
                id="startTime"
                onChange={handleChange}
                value={trainerInfo.startTime}
              >
                <option value="">00:00</option>
                <option value="0600">06:00</option>
                <option value="0700">07:00</option>
                <option value="0800">08:00</option>
                <option value="0900">09:00</option>
                <option value="1000">10:00</option>
                <option value="1100">11:00</option>
                <option value="1200">12:00</option>
                <option value="1300">13:00</option>
                <option value="1400">14:00</option>
                <option value="1500">15:00</option>
                <option value="1600">16:00</option>
                <option value="1700">17:00</option>
                <option value="1800">18:00</option>
                <option value="1900">19:00</option>
                <option value="2000">20:00</option>
                <option value="2100">21:00</option>
              </select>
            </div>
            <div className=" flex gap-2">
              <label>End Time</label>
              <select
                className="rounded-md text-black"
                name="endTime"
                id="endTime"
                onChange={handleChange}
                value={trainerInfo.endTime}
              >
                <option value="">00:00</option>{" "}
                <option value="0700">07:00</option>
                <option value="0800">08:00</option>
                <option value="0900">09:00</option>
                <option value="1000">10:00</option>
                <option value="1100">11:00</option>
                <option value="1200">12:00</option>
                <option value="1300">13:00</option>
                <option value="1400">14:00</option>
                <option value="1500">15:00</option>
                <option value="1600">16:00</option>
                <option value="1700">17:00</option>
                <option value="1800">18:00</option>
                <option value="1900">19:00</option>
                <option value="2000">20:00</option>
                <option value="2100">21:00</option>
                <option value="2200">22:00</option>
              </select>
            </div>

            <button className=" bg-green-400 text-black px-3 font-bold rounded-md ">
              Add
            </button>
          </div>
        </div>
        <hr className=" w-full h-px bg-gray-500 border-0" />
        <input
          type="text"
          className=" w-full p-4 bg-transparent border border-gray-500 rounded-md outline-none "
          placeholder="City"
          name="city"
          onChange={handleChange}
          value={trainerInfo.city}
        />
      </div>
    );
  };

  const contactDetails = () => {
    return (
      <div className=" w-[70%] m-auto flex flex-col justify-center items-center gap-4 mt-12">
        <input
          type="text"
          className=" w-full p-4 bg-transparent border border-gray-500 rounded-md outline-none"
          placeholder="Phone Number"
          onChange={handleChange}
          name="phoneNumber"
          value={trainerInfo.phoneNumber}
        />
        <input
          type="text"
          className=" w-full p-4 bg-transparent border border-gray-500 rounded-md outline-none "
          placeholder="Instagram ID (optional)"
          onChange={handleChange}
          name="instagramID"
          value={trainerInfo.instagramID}
        />
        <input
          type="text"
          className=" w-full p-4 bg-transparent border border-gray-500 rounded-md outline-none "
          placeholder="Facebook ID (optional)"
          onChange={handleChange}
          name="facebookID"
          value={trainerInfo.facebookID}
        />
      </div>
    );
  };

  const StepComponents = [
    () => personalDetails(),
    () => professionalBackground(),
    () => servicesAndAvailability(),
    () => contactDetails(),
  ];

  return (
    <div className="w-full min-h-[100vh] relative [background:linear-gradient(108.87deg,_#00101c,_#00101c,_#29000f)] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] overflow-hidden flex flex-col items-center justify-start pt-[3.813rem] pb-[3.875rem] pr-[3.438rem] pl-[1.25rem] box-border gap-[2.688rem_0rem] tracking-[normal] mq750:gap-[2.688rem_0rem] mq1275:pr-[1.688rem] mq1275:box-border text-white">
      <div style={{ marginTop: "-3.5rem" }}>
        <Navbar />
      </div>
      <div className=" border border-gray-500 p-6 rounded-xl">
        <Box sx={{ width: "100%" }}>
          <Stepper activeStep={activeStep}>
            {steps.map((label, index) => {
              return (
                <Step key={label}>
                  <StepLabel>
                    <Typography color="white">{label}</Typography>
                  </StepLabel>
                </Step>
              );
            })}
          </Stepper>
          {activeStep === steps.length ? (
            <Typography sx={{ mt: 2, mb: 1, color: "white" }}>
              All steps completed - you&apos;re finished
            </Typography>
          ) : (
            <React.Fragment>
              <Typography sx={{ mt: 2, mb: 1, color: "white" }}>
                {StepComponents[activeStep] && StepComponents[activeStep]()}
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                <Button
                  color="inherit"
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  sx={{ mr: 1 }}
                >
                  Back
                </Button>
                <Box sx={{ flex: "1 1 auto" }} />
                <Button onClick={handleNext}>
                  {activeStep === steps.length - 1 ? "Finish" : "Next"}
                </Button>
              </Box>
            </React.Fragment>
          )}
        </Box>
      </div>
    </div>
  );
};

export default TrainerRegistration;
