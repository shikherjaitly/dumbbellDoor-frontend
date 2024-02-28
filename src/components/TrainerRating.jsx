import React from "react";

const TrainerRating = () => {
  return (
    <div className="text-white mt-20 w-[50%] ml-[36.5rem] flex flex-col justify-center items-center gap-8 ">
      <h1 className=" text-4xl">Rate Your Trainer</h1>
      <p className=" text-4xl">⭐⭐⭐⭐⭐</p>
      <textarea
        cols="60"
        rows="5"
        className="resize-none bg-transparent border-[0.05rem] border-gray-600 p-4 rounded-md"
        placeholder="Add your comments here..."
      ></textarea>
      <button className=" bg-purple-500 text-lg text-black rounded-md font-semibold pt-1 pb-1 pr-8 pl-8">
        Submit
      </button>
    </div>
  );
};

export default TrainerRating;
