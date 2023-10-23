import { MediaTypeDetail } from "@/types/media.type";
import React from "react";

const Body = ({ data }: { data: MediaTypeDetail }) => {
   return (
      <div className="w-full md:w-[50%] h-auto ">
         <div className="bg-black/30 py-5 px-3 text-white flex flex-col gap-2 text-lg rounded-2xl">
            <div className="flex flex-col mb-2">
               <span className="text-2xl font-bold text-danger-500">
                  {data.title || data.name}
               </span>
               <span className="text-base text-slate-500">
                  {data.tagline || ""}
               </span>
            </div>
            <div>
               <span className="text-lg font-bold text-danger-500">Rate: </span>
               <span className="text-slate-500 font-medium">
                  {Number(data.vote_average).toFixed(1)}/10
               </span>
            </div>
            <div>
               <span className="text-lg font-bold text-danger-500">
                  Run time:{" "}
               </span>
               <span className="text-slate-500 font-medium">
                  {data.runtime}m
               </span>
            </div>
            <div>
               <span className="text-lg font-bold text-danger-500">
                  Release date:{" "}
               </span>
               <span className="text-slate-500 font-medium">
                  {data.release_date}
               </span>
            </div>
            <div>
               <span className="text-lg font-bold text-danger-500">
                  Budget:{" "}
               </span>
               <span className="text-slate-500 font-medium">
                  {data.budget}$
               </span>
            </div>
         </div>
      </div>
   );
};

export default Body;
