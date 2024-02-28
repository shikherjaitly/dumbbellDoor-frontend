import { useMemo, useState } from "react";
import axios from "axios";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const FrameGroupInstaFbCheckPro = ({ propWidth, propGap }) => {
  const frameGroupInstaFbCheckProStyle = useMemo(() => {
    return {
      width: propWidth,
      gap: propGap,
    };
  }, [propWidth, propGap]);

  const [trainers, setTrainers] = useState([]);
  const getTrainers = async () => {
    try {
      await axios
        .get("http://localhost:8000/api/trainer/getTrainers")
        .then((data) => setTrainers(data.data.message));
    } catch (error) {
      console.log(error.response.data.message);
    }
  };

  useState(() => {
    getTrainers();
  }, []);

  return (
    <div
      className="grid grid-cols-3 gap-14 "
      style={frameGroupInstaFbCheckProStyle}
    >
      {trainers &&
        trainers.map((trainer) => (
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
            <div className="self-stretch rounded-3xs [background:linear-gradient(180deg,_rgba(236,_236,_236,_0),_#ececec)] flex flex-col items-center justify-start pt-[7.5rem] px-[0.813rem] pb-[1.25rem] gap-[0.875rem_0rem] mt-[-5.875rem] rounded-lg">
              <div className="w-[12.438rem] h-[14.875rem] relative rounded-3xs [background:linear-gradient(180deg,_rgba(236,_236,_236,_0),_#ececec)] hidden" />
              <div className="self-stretch flex flex-col items-start justify-start py-[0rem] px-[0.063rem] gap-[0.375rem_0rem]">
                <div className="self-stretch flex flex-row items-start justify-between gap-[1.25rem]">
                  <div className="relative font-medium z-[1]">
                    {trainer.name}
                  </div>
                  <div className="relative font-medium z-[1]">5 ⭐</div>
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
                    {trainer.specializations.map((specialization, index) => (
                      <p
                        key={index}
                        className="relative leading-[145%] capitalize z-[1]"
                      >
                        {specialization}
                      </p>
                    ))}
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
                  to={`/trainer/${trainer.name}/${trainer._id}`}
                  className="rounded-3xs bg-white flex flex-row items-center justify-center pt-[0.188rem] pb-[0.25rem] pr-[0.813rem] pl-[0.75rem] whitespace-nowrap z-[1] cursor-pointer rounded-xl font-semibold hover:bg-black hover:text-white transition-all"
                >
                  Check profile
                </Link>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default FrameGroupInstaFbCheckPro;
