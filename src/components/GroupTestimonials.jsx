import { useEffect, useState } from "react";
import TestimonialsCarousel from "./TestimonialsCards";
import { Link } from "react-router-dom";
import axios from "axios";
import TrainerCard from "./TrainerCard";
import { Button } from "@mui/material";
import { useCookies } from 'react-cookie';

const FrameComponent1 = () => {
  const [cookies] = useCookies(['role']); 
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
        <Link to="/trainers">
          {cookies["role"] === "Customer" ? (
            <Button
              className="w-[10.5rem] h-[2.5rem] cursor-pointer"
              disableElevation={true}
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#000",
                fontSize: "20",
                background: "#fff",
                borderRadius: "10px",
                "&:hover": { background: "#fff" },
                width: 168,
                height: 40,
              }}
            >
              More Trainers
            </Button> )  : null }
        </Link>
      </div>
      <TestimonialsCarousel />
    </div>
  );
};

export default FrameComponent1;