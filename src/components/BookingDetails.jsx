import { useState } from "react";
import tickmark from "../assets/tickmark.png";

const BookingDetails = ({ trainer }) => {
  const [bookingInfo, setBookingInfo] = useState({
    modeOfTraining: "",
    workoutType: "",
    date: "",
    startTime: "",
    endTime: "",
  });

  const handleChange = (e) => {
    setBookingInfo({ ...bookingInfo, [e.target.name]: e.target.value });
    console.log(bookingInfo);
  };

  return (
    <div className=" w-[40%] border-2 border-gray-600 py-8 rounded-xl text-white">
      <div className=" w-[85%] flex flex-col gap-5 m-auto">
        <div className=" w-full flex justify-between items-center ">
          <img
            src={trainer.profilePicture}
            className=" w-[8rem] h-[8rem] rounded-full"
            alt=""
          />
          <div className=" flex justify-center items-center gap-2">
            <h1 className="m-0 text-[1.6rem] font-semibold font-inherit mq450:text-[1.5rem] mq750:text-[2rem]">
              {trainer.name}
            </h1>

            <img
              className=" relative top-1 w-[1.5rem] h-[1.5rem] rounded-mini object-cover"
              loading="lazy"
              alt=""
              src={tickmark}
            />
          </div>
        </div>
        <div className=" w-full flex justify-between items-center">
          <div className=" border-2 border-gray-600 px-4 py-2 rounded-lg text-xl w-[11rem] flex justify-center items-center">
            <label className=" ">
              <input
                type="radio"
                name="modeOfTraining"
                id="in-person"
                className=" w-4 h-4 mr-4"
                onChange={handleChange}
              />
              In-person
            </label>
          </div>
          <div className=" border-2 border-gray-600 px-4 py-2 rounded-lg text-xl w-[11rem] flex justify-center items-center">
            <label className=" ">
              <input
                type="radio"
                name="modeOfTraining"
                id="online"
                className=" w-4 h-4 mr-4"
                onChange={handleChange}
              />
              Online
            </label>
          </div>
        </div>
        <div className=" w-full text-lg">
          <div className=" w-full flex justify-between items-center ">
            <p>Workout Type</p>
            <select
              name="workoutType"
              id="workoutType"
              className=" w-[50%] text-white bg-transparent outline-none border border-gray-600 border-t-0 border-l-0 border-r-0 rounded-lg pb-3 px-3"
              onChange={handleChange}
            >
              <option value="muscleTraining" className=" text-black">
                Muscle Building
              </option>
              <option value="nutritionTraining" className=" text-black">
                Nutrition Training
              </option>
              <option value="weightLoss" className=" text-black">
                Weight Loss
              </option>
              <option value="functionalTraining" className=" text-black">
                Functional Training
              </option>
            </select>
          </div>
        </div>
        <div className=" w-full text-lg">
          <div className=" w-full flex justify-between items-center ">
            <p>Date</p>
            <input
              className=" w-[50%] outline-none bg-transparent border border-gray-600 border-t-0 border-l-0 border-r-0 rounded-lg pb-3 px-3"
              type="date"
              name="date"
              id="date"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className=" w-full text-lg">
          <div className=" w-full flex justify-between items-center ">
            <p>Start Time</p>
            <select
              className=" w-[50%] text-white bg-transparent outline-none border border-gray-600 border-t-0 border-l-0 border-r-0 rounded-lg pb-3 px-3"
              name="startTime"
              id="startTime"
              onChange={handleChange}
            >
              <option value="0600" className=" text-black">
                06:00
              </option>
              <option value="0700" className=" text-black">
                07:00
              </option>
              <option value="0800" className=" text-black">
                08:00
              </option>
              <option value="0900" className=" text-black">
                09:00
              </option>
              <option value="1000" className=" text-black">
                10:00
              </option>
              <option value="1100" className=" text-black">
                11:00
              </option>
              <option value="1200" className=" text-black">
                12:00
              </option>
              <option value="1300" className=" text-black">
                13:00
              </option>
              <option value="1400" className=" text-black">
                14:00
              </option>
              <option value="1500" className=" text-black">
                15:00
              </option>
              <option value="1600" className=" text-black">
                16:00
              </option>
              <option value="1700" className=" text-black">
                17:00
              </option>
              <option value="1800" className=" text-black">
                18:00
              </option>
              <option value="1900" className=" text-black">
                19:00
              </option>
              <option value="2000" className=" text-black">
                20:00
              </option>
              <option value="2100" className=" text-black">
                21:00
              </option>
            </select>
          </div>
        </div>
        <div className=" w-full text-lg">
          <div className=" w-full flex justify-between items-center ">
            <p>End Time</p>
            <select
              className=" w-[50%] text-white bg-transparent outline-none border border-gray-600 border-t-0 border-l-0 border-r-0 rounded-lg pb-3 px-3"
              name="endTime"
              id="endTime"
              onChange={handleChange}
            >
              <option value="0700" className=" text-black">
                07:00
              </option>
              <option value="0800" className=" text-black">
                08:00
              </option>
              <option value="0900" className=" text-black">
                09:00
              </option>
              <option value="1000" className=" text-black">
                10:00
              </option>
              <option value="1100" className=" text-black">
                11:00
              </option>
              <option value="1200" className=" text-black">
                12:00
              </option>
              <option value="1300" className=" text-black">
                13:00
              </option>
              <option value="1400" className=" text-black">
                14:00
              </option>
              <option value="1500" className=" text-black">
                15:00
              </option>
              <option value="1600" className=" text-black">
                16:00
              </option>
              <option value="1700" className=" text-black">
                17:00
              </option>
              <option value="1800" className=" text-black">
                18:00
              </option>
              <option value="1900" className=" text-black">
                19:00
              </option>
              <option value="2000" className=" text-black">
                20:00
              </option>
              <option value="2100" className=" text-black">
                21:00
              </option>
              <option value="2200" className=" text-black">
                22:00
              </option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingDetails;
