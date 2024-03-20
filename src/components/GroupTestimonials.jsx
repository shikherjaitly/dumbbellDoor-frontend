import { useEffect, useState } from "react";
import TestimonialsCarousel from "./TestimonialsCards";
import { Link } from "react-router-dom";
import axios from "axios";
import TrainerCard from "./TrainerCard";

const FrameComponent1 = () => {
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

  return (
    <div className="flex-1 flex flex-col items-center justify-start gap-[3.5rem_0rem] max-w-full text-left text-[2.813rem] text-white font-alata mq800:gap-[3.5rem_0rem]">
      <div className="flex flex-row items-start justify-start py-[0rem] pr-[1.688rem] pl-[0rem] mq450:max-w-[calc(100%_-_27px)]">
        <h1 className="m-0 relative text-inherit font-normal font-inherit mq450:text-[1.688rem] mq800:text-[2.25rem]">
          Star Trainers
        </h1>
      </div>
      <div className="self-stretch flex flex-col flex-wrap items-center justify-center pt-[0rem] px-[0rem] pb-[1.188rem] gap-[0rem_1.188rem] text-[0.938rem] text-black">
        <TrainerCard trainers={trainers.slice(0, 4)} />
        <Link
          className="flex mt-8 justify-end bg-white relative right-[-27rem] rounded-lg px-8 py-2 text-xl text-black cursor-pointer"
          to="/trainers"
        >
          More Trainers
        </Link>
      </div>
      <TestimonialsCarousel />
    </div>
  );
};

export default FrameComponent1;
