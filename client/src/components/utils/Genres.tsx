import { genreType } from "@/types/all.type";
import React from "react";

const Genres = ({
   genres,
   className = "",
}: {
   genres: genreType[];
   className?: string;
}) => {
   return (
      <div className={` ${className} flex gap-3 mb-2 `}>
         {genres.map((genre, index) => (
            <button
               key={index}
               className="text-danger-500 text-base border-2 border-danger-500 border-solid rounded-2xl px-2 py-[1px]  hover:bg-danger-500 hover:border-danger-500 hover:text-slate-50 transition-all duration-500 ease-linear italic font-medium hover:shadow-md hover:shadow-danger-500 "
            >
               {genre.name}
            </button>
         ))}
      </div>
   );
};

export default Genres;
