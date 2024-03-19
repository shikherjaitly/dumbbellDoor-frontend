import { useCallback } from "react";
import { Link } from "react-router-dom";
import tickmark from "../assets/tickmark.png";
import badge from "../assets/badge.png";
import services from "../assets/services.png";
import specialization from "../assets/specialization.png";
import calendar from "../assets/calendar.png";
import location from "../assets/location.png";
import one from "../assets/1.jpeg";
import two from "../assets/2.jpeg";
import three from "../assets/3.jpeg";
import t1 from "../assets/t1.jpg";
import t2 from "../assets/t2.jpg";
import t3 from "../assets/t3.jpg";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareWhatsapp } from "react-icons/fa6";

const LineSeparator = ({ trainer, user }) => {
  const onGroupButtonClick = useCallback(() => {
    // Please sync "Booking Page" to the project
  }, []);

  return (
    <div className="w-[73.25rem] flex flex-row items-start justify-start py-[0rem] px-[0.688rem] box-border max-w-full text-left text-[2.5rem] text-white font-alata">
      <div className="flex-1 flex flex-col items-end justify-start gap-[11.938rem_0rem] max-w-full mq450:gap-[11.938rem_0rem] mq750:gap-[11.938rem_0rem] mq1250:gap-[11.938rem_0rem]">
        <div className="self-stretch flex flex-row items-start justify-start max-w-full">
          <div className="flex flex-row items-start justify-start ml-[-5rem] gap-[0rem_2.5rem] max-w-full mq750:gap-[0rem_2.5rem] mq1250:flex-wrap">
            <div className="w-[19.063rem] flex flex-col items-start justify-start pt-[2.438rem] px-[0rem] pb-[0rem] box-border">
              <div className="self-stretch flex flex-col items-center justify-center gap-[0.875rem_0rem]">
                <img
                  className="w-[15.313rem] h-[15.313rem] relative rounded-[50%] object-cover"
                  loading="lazy"
                  alt=""
                  src={trainer.profilePicture}
                />
                <div className="self-stretch flex flex-col items-center justify-center gap-[1.438rem_0rem]">
                  <div className="self-stretch flex flex-col items-center justify-center gap-[0.938rem_0rem]">
                    <div className="flex flex-row items-start justify-start py-[0rem] px-[0.375rem]">
                      <div className="flex flex-row items-end justify-start gap-[0rem_1.063rem]">
                        <h1 className="m-0 relative text-[1.8rem] font-normal font-inherit mq450:text-[1.5rem] mq750:text-[2rem]">
                          {trainer.name}
                        </h1>
                        <div className="flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.5rem]">
                          <img
                            className="w-[1.875rem] h-[1.875rem] relative rounded-mini object-cover"
                            loading="lazy"
                            alt=""
                            src={tickmark}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="relative text-[1.125rem] leading-[110%] font-medium font-inter text-center">
                      {trainer.yearsOfExperience} years of professional
                      experience
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start pt-[0rem] pb-[1.313rem] pr-[0.938rem] pl-[1.188rem] text-[1.25rem] font-rubik">
                    <div className=" w-full flex-1 flex flex-col items-center justify-start gap-[0.688rem_0rem]">
                      <div className="flex flex-row items-start justify-start py-[0rem] pr-[0.188rem] pl-[0rem]">
                        <div className="relative mq450:text-[1rem]">{`Contact me at: `}</div>
                      </div>
                      <div className="self-stretch flex flex-col items-start justify-start gap-[1.188rem_0rem]">
                        <div className="self-stretch rounded-8x flex flex-col items-center justify-start py-[0.875rem] pr-[1.75rem] pl-[1.313rem] gap-[0.688rem] border-[1px] border-solid border-darkgray-100 rounded-lg">
                          <div className="w-[16.938rem] h-[5.438rem] relative rounded-8xs bg-gray-400 box-border hidden border-[1px] border-solid border-darkgray-100" />
                          <div className="relative whitespace-nowrap z-[1] mq450:text-[1rem] text-[1rem]">
                            {trainer.email}
                          </div>
                          <div className="relative whitespace-nowrap z-[1] mq450:text-[1rem] text-[1rem]">
                            {trainer.phoneNumber}
                          </div>
                        </div>
                        {user && user.role === "Trainer" ? (
                          ""
                        ) : (
                          <button
                            className="cursor-pointer [border:none] pt-2 pb-2 bg-yellowgreen self-stretch rounded-8xs flex flex-row items-center justify-center whitespace-nowrap hover:bg-forestgreen rounded-lg"
                            onClick={onGroupButtonClick}
                          >
                            <Link
                              to={`/trainer/${trainer.name}/${trainer._id}/book-session`}
                              className="flex-1 relative text-[1.875rem] font-medium font-rubik text-black text-center z-[1]"
                            >
                              Book a session
                            </Link>
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="w-[13.438rem] flex flex-row items-center justify-center py-[0rem] pr-[0rem] pl-[0.938rem] box-border">
                    <div className="flex-1 flex flex-row items-center justify-center gap-[1.25rem]">
                      <FaFacebookSquare className=" text-5xl cursor-pointer" />
                      <FaSquareInstagram className=" text-5xl cursor-pointer" />
                      <FaSquareWhatsapp className=" text-5xl cursor-pointer" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[46rem] w-[0.063rem] relative object-contain" />
            <div className="w-[40.813rem] flex flex-col items-start justify-start pt-[2.625rem] px-[0rem] pb-[0rem] box-border max-w-full text-center text-[0.938rem] text-gray-200 font-rubik mq750:pt-[1.688rem] mq750:box-border">
              {" "}
              {user && user.role === "Trainer" ? (
                <section className=" w-full flex gap-4 justify-end mb-8">
                <button className=" px-6 py-2 border rounded-lg">
                  View Bookings
                </button>
                <button className=" px-6 py-2 border rounded-lg">
                  Edit Profile
                </button>
              </section>  ) : ( "" 
              )}
              <div className="self-stretch flex flex-col items-start justify-start gap-[2.5rem_0rem] max-w-full mq750:gap-[2.5rem_0rem]">
                <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[0rem] pl-[0.25rem] box-border max-w-full text-justify text-[1.125rem] text-white">
                  <div className="flex-1 relative leading-[1.875rem] font-light inline-block max-w-full">
                    {trainer.description}
                  </div>
                </div>
                <div className=" w-full flex flex-col gap-10 items-start justify-start pt-[0rem] px-[0rem] pb-[0.813rem] box-border max-w-full mq750:flex-wrap">
                  <div className=" flex gap-4 justify-center items-center">
                    <img
                      className="h-[3.75rem] w-[3.75rem] mr-4 relative object-cover"
                      loading="lazy"
                      alt=""
                      src={badge}
                    />
                    <div className=" flex flex-col gap-2 items-start">
                      <p>C E R T I F I C A T I O N S</p>
                      <div>
                        <div className="w-full flex-1 flex flex-row items-start justify-start gap-[0rem_0.875rem]">
                          {trainer &&
                            trainer.certifications &&
                            trainer.certifications.map((certificate, index) => (
                              <p
                                key={index}
                                className="  border-[0.05rem] border-gray-500 pt-1 pb-1 pr-4 pl-4 rounded-md"
                              >
                                {certificate}
                              </p>
                            ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className=" flex gap-4 justify-center items-center">
                    <img
                      className="w-[3.75rem] h-[3.75rem] mr-4 relative object-cover"
                      loading="lazy"
                      alt=""
                      src={specialization}
                    />
                    <div className=" flex flex-col gap-2 items-start">
                      <p>S P E C I A L I Z A T I O N</p>
                      <div>
                        <div className="w-full flex-1 flex flex-row items-start justify-start gap-[0rem_0.875rem]">
                          {trainer &&
                            trainer.specializations &&
                            trainer.specializations.map(
                              (specialization, index) => (
                                <p
                                  key={index}
                                  className="  border-[0.05rem] border-gray-500 pt-1 pb-1 pr-4 pl-4 rounded-md"
                                >
                                  {specialization}
                                </p>
                              )
                            )}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className=" flex gap-4 justify-center items-center">
                    <img
                      className="w-[3.75rem] h-[3.75rem] mr-4 relative"
                      loading="lazy"
                      alt=""
                      src={services}
                    />
                    <div className=" flex flex-col gap-2 items-start">
                      <p>S E R V I C E S</p>
                      <div>
                        <div className="w-full flex-1 flex flex-row items-start justify-start gap-[0rem_0.875rem]">
                          {trainer &&
                            trainer.typesOfServices &&
                            trainer.typesOfServices.map((service, index) => (
                              <p
                                key={index}
                                className="  border-[0.05rem] border-gray-500 pt-1 pb-1 pr-4 pl-4 rounded-md"
                              >
                                {service}
                              </p>
                            ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className=" flex gap-4 justify-center items-center">
                    <img
                      className="w-[3.75rem] h-[3.75rem] mr-4 relative object-cover"
                      loading="lazy"
                      alt=""
                      src={calendar}
                    />
                    <div className=" flex flex-col gap-2 items-start">
                      <p>A V A I L A B I L I T Y </p>
                      <div>
                        <div className="w-full flex-1 flex flex-row items-start justify-start gap-[0rem_0.875rem]">
                          {trainer &&
                            trainer.typesOfServices &&
                            trainer.typesOfServices.map((service, index) => (
                              <p
                                key={index}
                                className="  border-[0.05rem] border-gray-500 pt-1 pb-1 pr-4 pl-4 rounded-md"
                              >
                                {service}
                              </p>
                            ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className=" flex gap-4 justify-center items-center">
                    <img
                      className="w-[3.75rem] h-[3.75rem] mr-4 relative object-cover"
                      loading="lazy"
                      alt=""
                      src={location}
                    />
                    <div className=" flex flex-col gap-2 items-start">
                      <p>L O C A T I O N</p>
                      <div>
                        <div className="w-full flex-1 flex flex-row items-start justify-start gap-[0rem_0.875rem]">
                          {trainer.location}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[50.5rem] flex flex-row items-start justify-between gap-[1.25rem] max-w-full text-center text-[0.938rem] text-gray-200 font-rubik">
          <div className="w-[43.875rem] flex flex-col items-start justify-start gap-[4.188rem_0rem] max-w-[calc(100%_-_21px)] mq450:gap-[4.188rem_0rem] mq750:gap-[4.188rem_0rem] ml-[-2rem] mt-[-6rem]">
            <div className="self-stretch h-[19.563rem] relative ">
              <div className="absolute h-full w-full top-[0rem] right-[0rem] bottom-[0rem] left-[0rem]">
                <img
                  className="absolute top-[3.219rem] left-[0rem] w-[11.688rem] h-[13.131rem] object-cover"
                  alt=""
                  src={one}
                />
                <img
                  className="absolute top-[3.219rem] left-[32.25rem] w-[11.625rem] h-[13.075rem] object-cover"
                  loading="lazy"
                  alt=""
                  src={two}
                />
                <img
                  className="absolute h-full top-[0rem] bottom-[0rem] left-[6.938rem] max-h-full w-[31.125rem] object-cover z-[1]"
                  alt=""
                  src={three}
                />
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[3.313rem_0rem] mq750:gap-[3.313rem_0rem] ">
              <div className="relative">T E S T I M O N I A L S</div>
              <div className="self-stretch flex flex-row items-start justify-between gap-[1.25rem] text-left text-[1.388rem] text-gray-300 font-manrope mq750:flex-wrap mq750:justify-center">
                <div className="w-[16.563rem] rounded-xl bg-white shadow-[0px_12px_12px_rgba(0,_0,_0,_0.16)] flex flex-col items-center justify-start pt-[1rem] px-[0.938rem] pb-[0.938rem] box-border gap-[1.125rem_0rem]">
                  <img
                    className="w-[3.125rem] h-[3.125rem] relative rounded-[50%] object-cover"
                    loading="lazy"
                    alt=""
                    src={t1}
                  />
                  <div className="flex flex-row items-center justify-start py-[0rem] pr-[0.063rem] pl-[0rem] gap-[0rem_0.25rem]">
                    <div className="relative leading-[1.388rem] font-extrabold mq450:text-[1.125rem] mq450:leading-[1.125rem] text-black">
                      ⭐ 5.0
                    </div>
                  </div>
                  <h2 className="m-0 relative text-[1.5rem] leading-[1.875rem] font-bold font-inherit text-gray-500 mq450:text-[1.188rem] mq450:leading-[1.5rem]">
                    Elias Watsica
                  </h2>
                  <div className="self-stretch relative text-[1.125rem] leading-[1.688rem] text-gray-400 text-center">
                    Super recommended product. You have to try!
                  </div>
                </div>
                <div className="w-[16.563rem] rounded-xl bg-white shadow-[0px_12px_12px_rgba(0,_0,_0,_0.16)] flex flex-col items-center justify-start pt-[1rem] px-[0.938rem] pb-[0.938rem] box-border relative gap-[1.125rem_0rem]">
                  <img
                    className="w-[3.125rem] h-[3.125rem] relative rounded-[50%] object-cover"
                    alt=""
                    src={t2}
                  />
                  <div className="flex flex-row items-center justify-start py-[0rem] pr-[0.063rem] pl-[0rem] gap-[0rem_0.25rem]">
                    <div className="relative leading-[1.388rem] font-extrabold mq450:text-[1.125rem] mq450:leading-[1.125rem] text-black">
                      ⭐ 4.95
                    </div>
                  </div>
                  <h2 className="m-0 relative text-[1.5rem] leading-[1.875rem] font-bold font-inherit text-gray-500  mq450:text-[1.188rem] mq450:leading-[1.5rem]">
                    Nicole Champlin
                  </h2>
                  <div className="self-stretch relative text-[1.125rem] leading-[1.688rem] text-gray-400 text-center">{`Couldn’t agree more to this product! `}</div>
                  <div className="w-[21.188rem] h-[20.063rem] my-0 mx-[!important] absolute top-[-2.25rem] left-[-15.937rem] rounded-xl bg-white shadow-[0px_12px_12px_rgba(0,_0,_0,_0.16)] flex flex-col items-center justify-start pt-[1.438rem] px-[1.375rem] pb-[1.375rem] box-border gap-[1.125rem_0rem] z-[1]">
                    <img
                      className="w-[7.25rem] h-[6.25rem] flex-1 relative rounded-[50%] max-h-full object-cover"
                      alt=""
                      src={t3}
                    />
                    <div className="flex flex-row items-center justify-start py-[0rem] pr-[0.063rem] pl-[0rem] gap-[0rem_0.25rem]">
                      <div className="relative leading-[1.388rem] font-extrabold mq450:text-[1.125rem] mq450:leading-[1.125rem] text-black">
                        ⭐ 4.75
                      </div>
                    </div>
                    <h2 className="m-0 relative text-[1.5rem] leading-[1.875rem] font-bold font-inherit text-gray-500  mq450:text-[1.188rem] mq450:leading-[1.5rem]">
                      Wade Warren
                    </h2>
                    <div className="w-[14.438rem] relative text-[1.125rem] leading-[1.688rem] text-gray-400 text-center inline-block">
                      Awesome website and funnel for your business
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LineSeparator;
