import { useEffect, useState } from "react";
import TestimonialsCarousel from "./TestimonialsCards";
import { Link } from "react-router-dom";
import axios from "axios";
import { Button } from "@mui/material";
import { useCookies } from "react-cookie";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const FrameComponent1 = () => {
  const [cookies] = useCookies(["role"]);
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
            </Button>
          ) : null}
        </Link>
        <div className="grid grid-cols-4 gap-14 ">
          {trainers &&
            trainers.slice(0, 4).map((trainer) => (
              <div
                key={trainer._id}
                className="w-[12.5rem] shrink-0 flex flex-col items-center justify-start "
              >
                <img
                  className="w-[8.125rem] h-[8.125rem] relative rounded-[50%] object-cover z-[1]"
                  loading="eager"
                  alt=""
                  src={trainer.profilePicture}
                />
                <div className="self-stretch [background:linear-gradient(180deg,_rgba(236,_236,_236,_0),_#ececec)] flex flex-col items-center justify-start pt-[7.5rem] px-[0.813rem] pb-[1.25rem] gap-[0.875rem_0rem] mt-[-5.875rem] rounded-lg">
                  <div className="w-[12.438rem] h-[14.875rem] relative rounded-3xs [background:linear-gradient(180deg,_rgba(236,_236,_236,_0),_#ececec)] hidden" />
                  <div className="self-stretch flex flex-col items-start justify-start py-[0rem] px-[0.063rem] gap-[0.375rem_0rem]">
                    <div className="self-stretch flex flex-row items-start justify-between gap-[1.25rem]">
                      <div className="relative font-medium z-[1]">
                        {trainer.name}
                      </div>
                      <div className="relative font-medium z-[1]">
                        {trainer.rating} ⭐
                      </div>
                    </div>
                    <img
                      className="self-stretch h-[0.063rem] relative max-w-full overflow-hidden shrink-0 object-contain z-[1]"
                      alt=""
                      src="/line-1.svg"
                    />
                    <div className="flex flex-col items-start justify-start text-[0.625rem]">
                      <div className="relative leading-[145%] capitalize z-[1] font-medium">
                        Specializations :
                      </div>
                      <div className=" flex gap-2">
                        {trainer.specializations.map(
                          (specialization, index) => (
                            <p
                              key={index}
                              className="relative leading-[145%] capitalize z-[1]"
                            >
                              {specialization}
                            </p>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start gap-[0rem_1.25rem] text-[0.625rem]">
                    <span className=" text-2xl cursor-pointer">
                      <FaFacebook />
                    </span>
                    <span className=" text-2xl cursor-pointer">
                      <FaInstagram />
                    </span>

                    <Link
                      to={`/trainer/${trainer._id}`}
                      className=" bg-white flex flex-row items-center justify-center pt-[0.188rem] pb-[0.25rem] pr-[0.813rem] pl-[0.75rem] whitespace-nowrap z-[1] cursor-pointer rounded-xl font-normal hover:bg-black hover:text-white transition-all"
                    >
                      Check profile
                    </Link>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
      <TestimonialsCarousel />
    </div>
  );
};

export default FrameComponent1;
