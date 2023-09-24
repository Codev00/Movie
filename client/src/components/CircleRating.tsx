import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
const CircleRating = ({ rating }: { rating: number }) => {
   return (
      <div className="absolute -bottom-6 left-6 w-12 h-12 bg-white rounded-full p-[2px] font-bold">
         <CircularProgressbar
            value={rating}
            maxValue={10}
            text={String(rating)}
            styles={buildStyles({
               pathColor: rating < 5 ? "red" : rating < 7 ? "orange" : "green",
               backgroundColor: "white",
               textSize: 26,
               trailColor: "none",
               textColor: rating < 5 ? "red" : rating < 7 ? "orange" : "green",
            })}
         />
      </div>
   );
};

export default CircleRating;
