import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import TrainerInfo from "./TrainerInfo.jsx";
import TrainerRating from "./TrainerRating.jsx";
import Navbar from "./Navbar";
import { useUserContext } from "../utils/UserContext.js";
import { useCookies } from 'react-cookie';


const TrainerProfile = () => {
  const [cookies] = useCookies(['id', 'role']); 

  const { trainerID } = useParams();

  const [trainer, setTrainer] = useState({});

  const { user, loginUser } = useUserContext();

  useEffect(() => {
    // Call the loginUser function when the component mounts
    user && loginUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Empty dependency array ensures this effect runs only once

  useEffect(() => {
    const fetchTrainerDetails = async () => {
      try {
        const trainerData = await axios.get(
          `https://dumbbelldoor-backned.onrender.com/api/trainer/fetchTrainerDetails/${trainerID}`
        );
        setTrainer(trainerData.data.message);
      } catch (error) {
        console.log(error);
      }
    };
    fetchTrainerDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="w-full relative [background:linear-gradient(108.87deg,_#00101c,_#00101c,_#29000f)] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] overflow-hidden flex flex-col items-center justify-start pt-[3.813rem] pb-[3.875rem] pr-[3.438rem] pl-[1.25rem] box-border gap-[2.688rem_0rem] tracking-[normal] mq750:gap-[2.688rem_0rem] mq1275:pr-[1.688rem] mq1275:box-border">
      <div style={{ marginTop: "-3.5rem" }}>
        <Navbar />
      </div>
      <section className="self-stretch flex flex-col items-end justify-start gap-[4.625rem_0rem] mt-[-2rem] max-w-full mq450:gap-[4.625rem_0rem] mq750:gap-[4.625rem_0rem]">
        <TrainerInfo user={user} trainer={trainer} />
      </section>
      {cookies["id"] ? (
        cookies["role"] === "Trainer" ? null : (
          <div className=" w-full flex flex-row items-start justify-start py-[0rem] px-[0.75rem] box-border max-w-full">
            <div className="flex-1 flex flex-row items-start justify-between gap-[1.25rem] max-w-full">
              <TrainerRating />
            </div>
          </div>
        )
      ) : null}
    </div>
  );
};

export default TrainerProfile;
