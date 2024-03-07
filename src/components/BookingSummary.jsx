import calender from "../assets/calendar.png";
import rupee from "../assets/rupee.png";
import clock from "../assets/clock.png";
import total from "../assets/total.png";

const BookingSummary = () => {
  return (
    <div className=" w-[40%] border-2 border-gray-600 py-8 rounded-xl text-white">
      <div className=" w-[85%] flex flex-col gap-5 m-auto">
        <h1 className="m-0 text-[1.6rem] text-center font-semibold font-inherit mq450:text-[1.5rem] mq750:text-[2rem]">
          Booking Summary
        </h1>

        <div className=" w-full text-lg">
          <div className=" w-full flex justify-between items-center ">
            <div className=" flex items-center gap-4">
              <img src={calender} className=" w-8 h-8" alt="" />
              <p>Date</p>
            </div>
            <p>01-03-2024</p>
          </div>
        </div>
        <div className=" w-full text-lg">
          <div className=" w-full flex justify-between items-center ">
            <div className=" flex items-center gap-4">
              <img src={rupee} className=" w-8 h-8" alt="" />
              <p>Amount</p>
            </div>
            <p>Rs. 500</p>
          </div>
        </div>
        <div className=" w-full text-lg">
          <div className=" w-full flex justify-between items-center ">
            <div className=" flex items-center gap-4">
              <img src={clock} className=" w-8 h-8" alt="" />
              <p>Duration</p>
            </div>
            <p>2 hrs</p>
          </div>
        </div>
        <hr className=" w-full h-px bg-gray-500 border-0" />
        <div className=" w-full text-lg">
          <div className=" w-full flex justify-between items-center ">
            <div className=" flex items-center gap-4">
              <img src={total} className=" w-8 h-8" alt="" />
              <p>Total</p>
            </div>
            <p>Rs. 600</p>
          </div>
        </div>
        <button className=" w-full bg-green-500 py-3 text-2xl font-semibold rounded-xl text-black">
          Proceed to pay Rs. 600
        </button>
      </div>
    </div>
  );
};

export default BookingSummary;
