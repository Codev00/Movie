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
               className="text-green-700 text-base border-2 border-green-700 border-solid rounded-2xl px-2 py-[1px]  hover:bg-green-700 hover:text-slate-100 transition-all duration-500 ease-linear italic "
            >
               {genre.name}
            </button>
         ))}
      </div>
   );
};

export default Genres;
