import { genreType } from "@/types/all.type";
import React from "react";

const Genres = ({ genres }: { genres: genreType[] }) => {
   return (
      <div className="my-3">
         {genres.map((genre, index) => (
            <button
               key={index}
               className="text-green-500 text-base border border-green-500 border-solid rounded-lg px-2 mr-2 hover:bg-green-500 hover:text-white transition-all duration-200 ease-linear"
            >
               {genre.name}
            </button>
         ))}
      </div>
   );
};

export default Genres;
