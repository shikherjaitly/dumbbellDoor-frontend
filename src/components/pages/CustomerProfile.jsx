import "react-toastify/dist/ReactToastify.css";
import Navbar from "../Navbar.jsx";
import { Link } from "react-router-dom";
import { useUserContext } from "../../utils/UserContext.js";
import { useEffect, useState } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import EditCustomerProfile from "./EditCustomerProfile.jsx";

const CustomerProfile = () => {
  const { user, loginUser } = useUserContext();

  useEffect(() => {
    // Call the loginUser function when the component mounts
    loginUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Empty dependency array ensures this effect runs only once

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // BMI calculator function
  const calculateBMI = () => {
    if (user.height && user.weight) {
      const heightInMeter = user.height / 100; // Convert height from cm to meters
      const bmi = user.weight / (heightInMeter * heightInMeter); // BMI formula: weight (kg) / (height (m))^2
      return bmi.toFixed(1); // Round BMI to one decimal place
    }
    return "";
  }; 


  return (
    <div className="w-full min-h-screen relative [background:linear-gradient(108.87deg,_#00101c,_#00101c,_#29000f)] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-col items-center justify-center pt-[3.813rem] pb-[3.875rem] pr-[3.438rem] pl-[1.25rem] box-border gap-[2.688rem_0rem] tracking-[normal] mq750:gap-[2.688rem_0rem] mq1275:pr-[1.688rem] mq1275:box-border">
      <div style={{ marginTop: "-3.5rem" }}>
        <Navbar />
      </div>
      {user && (
        <main className="w-[80%] m-auto mt-[-3rem] flex flex-row items-center justify-center py-5 px-6 box-border gap-[0px_4px] min-h-[808px] max-w-full text-left text-base text-gray-200 font-plus-jakarta-sans">
          <section className=" w-full flex-1 flex flex-col items-center justify-center pt-4 px-0 pb-0 box-border max-w-[calc(100%_-_311px)] text-left text-[36px] text-gray-200 font-plus-jakarta-sans mq825:max-w-full pl-8 ">
            <div className="self-stretch flex flex-col items-start justify-start gap-6 max-w-full">
              <div className=" w-full flex justify-between ">
                <h1 className=" font-semibold">Account Information</h1>
                <section className=" flex gap-4">
                  <Link
                    to={`/customer/${user._id}/my-bookings`}
                    className=" text-lg border rounded-lg px-6 py-2"
                  >
                    View Bookings
                  </Link>
                  {/* <Link
                    to="/customer/your-details"
                    className=" text-lg border rounded-lg px-6 py-2"
                  >
                    Edit Profile
                  </Link> */}
                  <button
                    className=" text-lg border rounded-lg px-6 py-2"
                    onClick={handleOpen}
                  >
                    Edit Profile
                  </button>
                </section>
              </div>

              <div className=" w-full self-stretch flex flex-col gap-6 items-start justify-start max-w-full text-3xl">
                <div className="self-stretch h-40 flex flex-row items-start justify-start p-4 box-border max-w-full">
                  <div className="self-stretch flex-1 flex flex-row items-center justify-between max-w-full gap-[16px]">
                    <div className=" w-full self-stretch flex flex-row items-start justify-start gap-[0px_16px]">
                      <div className="flex flex-col items-start justify-start">
                        <img
                          className="w-32 h-32 relative rounded-[64px] overflow-hidden shrink-0 object-cover"
                          loading="lazy"
                          alt=""
                          src={user.profilePicture}
                        />
                      </div>
                      <div className="self-stretch flex-1 flex flex-col gap-2 items-start justify-center">
                        <div className="self-stretch flex flex-col items-start justify-start">
                          <div className="self-stretch flex flex-col items-start justify-start">
                            <h3 className="m-0 relative text-inherit tracking-[-0.33px] leading-[27.5px] font-bold font-inherit mq450:text-lg mq450:leading-[22px]">
                              {user.name}
                            </h3>
                          </div>
                        </div>
                        <div className="flex flex-col items-start justify-start text-base text-tan">
                          <div className="flex flex-col items-start justify-start">
                            <div className="relative leading-[24px] whitespace-nowrap">
                              {user.email}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" w-full flex flex-col gap-6">
                  <div className=" flex justify-between text-lg ">
                    <p>Location</p>
                    <p>{user.location}</p>
                  </div>
                  <hr className=" w-full h-px bg-gray-500 border-0" />
                  <div className=" flex justify-between text-lg ">
                    <p>Preferred Language</p>
                    <p>{user.language}</p>
                  </div>
                  <hr className=" w-full h-px bg-gray-500 border-0" />
                  <div className=" flex justify-between text-lg ">
                    <p>Age</p>
                    <p>{user.age}</p>
                  </div>
                  <hr className=" w-full h-px bg-gray-500 border-0" />
                  <div className=" flex justify-between text-lg ">
                    <p>Gender</p>
                    <p>{user.gender}</p>
                  </div>
                  <hr className=" w-full h-px bg-gray-500 border-0" />
                  <div className=" flex justify-between text-lg ">
                    <p>Phone Number</p>
                    <p>{user.phoneNumber}</p>
                  </div>
                  <hr className=" w-full h-px bg-gray-500 border-0" />
                  <div className=" flex justify-between text-lg ">
                    <p>Height</p>
                    <p>{user.height} cms</p>
                  </div>
                  <hr className=" w-full h-px bg-gray-500 border-0" />
                  <div className=" flex justify-between text-lg ">
                    <p>Weight</p>
                    <p>{user.weight} kg</p>
                  </div>
                  <hr className=" w-full h-px bg-gray-500 border-0" />
                  <div className=" flex justify-between text-lg ">
                    <p>BMI</p>
                    <p>{calculateBMI()}</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      )}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box>
          {open && <EditCustomerProfile user={user} setOpen={setOpen} />}
        </Box>
      </Modal>
    </div>
  );
};

export default CustomerProfile;
