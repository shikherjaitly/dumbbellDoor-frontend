import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import { useUserContext } from "../utils/UserContext.js";

const TrainerRating = () => {
  const { trainerID } = useParams(); // Access trainerID from URL params

  const { user } = useUserContext();
  // Access user data from context

  const [cookies] = useCookies(['id']);
  const userID = cookies.id;
  console.log(userID);
  const [rating, setRating] = useState(0); // State to store the rating value
  const [comment, setComment] = useState(""); // State to store the comment value
  const maxChars = 1000; // Maximum character limit for the comment

  // Function to handle rating change
  const handleRatingChange = (event, newValue) => {
    setRating(newValue); // Update the rating state
  };

  // Function to handle comment change
  const handleCommentChange = (event) => {
    const value = event.target.value;
    if (value.length <= maxChars) {
      setComment(value); // Update the comment state if within character limit
    }
  };

  // Function to submit feedback to backend
  const submitFeedback = async () => {
    try {
      const { _id: user_id } = user; // Extract user ID from the user object

      // Send rating data to backend along with user ID and trainer ID
      const response = await axios.post(
        `http://localhost:5005/api/testimonials/${trainerID}`,
        { rating, comment, userID }, // Include user ID in the request body
        { withCredentials: true } // Send cookies with the request
      );
      console.log("Feedback submitted successfully");
      console.log("Response:", response.data);
      // Reset the rating after submission if needed
      setRating(0);
    } catch (error) {
      console.error("Failed to submit feedback:", error);
    }
  };

  // Calculate the number of cols dynamically based on the desired width
  const cols = Math.floor(60 * 0.9); // Adjust the multiplier as needed

  return (
    <div className="text-white mt-20 w-[50%] ml-[32.5rem] flex flex-col justify-center items-center gap-8 ">
      <h1 className=" text-4xl">Rate Your Trainer</h1>
      <div className="flex flex-col items-center gap-4">
        {/* Rating component */}
        <Rating 
          name="size-large" 
          size="large"  
          value={rating}
          onChange={handleRatingChange}  
          emptyIcon={<StarBorderIcon fontSize="large" style={{ color: 'white' }} />}
          icon={<StarIcon fontSize="large" />} 
        />
        <textarea
          cols={cols}
          rows="5"
          className="resize-none bg-transparent border-[0.05rem] border-gray-600 p-4 rounded-md"
          placeholder="Add your comments here..."
          value={comment}
          onChange={handleCommentChange}
        ></textarea>
        <button 
          className=" bg-purple-500 hover:bg-purple-700 text-lg text-black rounded-md font-semibold pt-1 pb-1 pr-8 pl-8"
          onClick={submitFeedback}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default TrainerRating;
