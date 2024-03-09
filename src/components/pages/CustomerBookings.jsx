import "react-toastify/dist/ReactToastify.css";
import Navbar from "../Navbar.jsx";
import avatar from "../../assets/t1.jpg";
import { Link } from "react-router-dom";

const CustomerBookings = () => {
  return (
    <div className="w-full min-h-screen relative [background:linear-gradient(108.87deg,_#00101c,_#00101c,_#29000f)] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-col items-center justify-center pt-[3.813rem] pb-[3.875rem] pr-[3.438rem] pl-[1.25rem] box-border gap-[2.688rem_0rem] tracking-[normal] mq750:gap-[2.688rem_0rem] mq1275:pr-[1.688rem] mq1275:box-border">
      <div style={{ marginTop: "-3.5rem" }}>
        <Navbar />
      </div>
      <main className="w-full m-auto mt-[-3rem] flex flex-row items-center justify-center py-5 px-6 box-border gap-[0px_4px] max-w-full text-left text-base text-gray-200 font-plus-jakarta-sans">
        <section className=" flex-1 flex flex-col items-center justify-center gap-8 pt-4 px-0 pb-0 box-border max-w-[calc(100%_-_311px)] text-left text-[36px] text-gray-200 font-plus-jakarta-sans mq825:max-w-full pl-8 ">
          <div className="self-stretch flex flex-col items-start justify-start gap-12 max-w-full">
            <div className=" w-full flex justify-between ">
              <h1 className=" font-semibold">My Bookings</h1>
              <section className=" flex gap-4">
                <Link
                  to="/customer"
                  className=" text-lg border rounded-lg px-6 py-2"
                >
                  Back to Profile
                </Link>
              </section>
            </div>
          </div>
          <section className=" w-full text-lg ">
            <table className=" w-full">
              <tr>
                <th className=" py-3">Date</th>
                <th className=" py-3">Trainer</th>
                <th className=" py-3">Workout Type</th>
                <th className=" py-3">Start Time</th>
                <th className=" py-3">End Time</th>
                <th className=" py-3">Amount Paid</th>
                <th className=" py-3">Status</th>
              </tr>
              <tr>
                <td className=" py-3">24/03/2024</td>
                <td className=" py-3">James Suar</td>
                <td className=" py-3">Cardio</td>
                <td className=" py-3">05:00 hrs</td>
                <td className=" py-3">06:00 hrs</td>
                <td className=" py-3">Rs. 600</td>
                <td className=" py-3">Requested</td>
              </tr>
              <tr>
                <td className=" py-3">24/03/2024</td>
                <td className=" py-3">James Suar</td>
                <td className=" py-3">Cardio</td>
                <td className=" py-3">05:00 hrs</td>
                <td className=" py-3">06:00 hrs</td>
                <td className=" py-3">Rs. 600</td>
                <td className=" py-3">Requested</td>
              </tr>
            </table>
          </section>
        </section>
      </main>
    </div>
  );
};

export default CustomerBookings;
