import "react-toastify/dist/ReactToastify.css";
import Navbar from "../Navbar.jsx";
import { Link } from "react-router-dom";
import { FiEdit } from "react-icons/fi";

const TrainerBookings = () => {
  return (
    <div className="w-full min-h-screen relative [background:linear-gradient(108.87deg,_#00101c,_#00101c,_#29000f)] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-col items-center justify-center pt-[3.813rem] pb-[3.875rem] pr-[3.438rem] pl-[1.25rem] box-border gap-[2.688rem_0rem] tracking-[normal] mq750:gap-[2.688rem_0rem] mq1275:pr-[1.688rem] mq1275:box-border">
      <div style={{ marginTop: "-3.5rem" }}>
        <Navbar />
      </div>
      <main className="w-full m-auto mt-[-3rem] flex flex-row items-center justify-center py-5 px-6 box-border gap-[0px_4px] max-w-full text-left text-base text-gray-200 font-plus-jakarta-sans">
        <section className=" flex-1 flex flex-col items-start justify-start gap-8 pt-4 px-0 pb-0 box-border max-w-[calc(100%_-_311px)] text-left text-[36px] text-gray-200 font-plus-jakarta-sans mq825:max-w-full pl-8 ">
          <div className="self-stretch flex flex-col items-start justify-start gap-12 max-w-full">
            <div className=" w-full flex justify-between ">
              <h1 className=" font-semibold">My Bookings</h1>
              <section className=" flex gap-4">
                <Link
                  to="/trainer/:trainerName/:trainerID"
                  className=" text-lg border rounded-lg px-6 py-2"
                >
                  Back to Profile
                </Link>
              </section>
            </div>
          </div>
          <section className=" flex gap-4">
            <button className=" text-sm border px-6 py-2 rounded-lg font-semibold">
              All
            </button>
            <button className=" text-sm px-6 py-2 rounded-lg bg-green-500 text-black font-semibold">
              Upcoming
            </button>
            <button className=" text-sm px-6 py-2 rounded-lg bg-sky-500 text-black font-semibold">
              Past
            </button>
            <button className=" text-sm px-6 py-2 rounded-lg bg-yellow-500 text-black font-semibold">
              Requested
            </button>
          </section>
          <section className=" w-full text-lg ">
            <table className=" w-full">
              <tr>
                <th className=" py-3">Date</th>
                <th className=" py-3">Client</th>
                <th className=" py-3">Workout Type</th>
                <th className=" py-3">Start Time</th>
                <th className=" py-3">End Time</th>
                <th className=" py-3">Amount Paid</th>
                <th className=" py-3">Status</th>
              </tr>
              <tr className=" text-gray-400">
                <td className=" py-3">24/03/2024</td>
                <td className=" py-3">John Doe</td>
                <td className=" py-3">Cardio</td>
                <td className=" py-3">05:00 hrs</td>
                <td className=" py-3">06:00 hrs</td>
                <td className=" py-3">Rs. 600</td>
                <td className=" py-3">Requested</td>
                <td className=" cursor-pointer text-white ">
                  <Link to="/edit-booking">
                    <FiEdit />
                  </Link>
                </td>
              </tr>
            </table>
          </section>
        </section>
      </main>
    </div>
  );
};

export default TrainerBookings;
