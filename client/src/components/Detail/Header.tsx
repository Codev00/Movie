"use client";
import tmdbConfig from "@/api/config/tmdb.config";
import { MediaTypeDetail } from "@/types/media.type";
import Image from "next/image";
import React from "react";
import { ScrollShadow } from "@nextui-org/react";
import "./Detail.css";
import Genres from "../utils/Genres";
import dayjs from "dayjs";

const Header = ({ data }: { data: MediaTypeDetail }) => {
   return (
      <div className="w-auto h-auto min-h-screen relative back z-0">
         <Image
            src={tmdbConfig.backdropPath(data.backdrop_path)}
            fill={true}
            sizes="(max-width: 768px) 100vw, 100vw"
            alt={data.title || data.name}
            quality={80}
            style={{
               objectFit: "cover",
               zIndex: -1,
               opacity: 0.1,
            }}
            className="back"
         />

         <div className="z-1  w-full h-full md:h-screen container flex  justify-center items-center gap-6 flex-col md:flex-row">
            <Image
               src={tmdbConfig.posterPath(data.poster_path)}
               alt={data.title || data.name}
               width={300}
               height={400}
               className="rounded-md mt-20 md:mt-0 object-cover"
            />
            <div className="px-2 text-white">
               <div className="md:mb-3">
                  <h1 className="text-4xl  font-medium mb-2">
                     {data.title || data.name} (
                     {data.title && dayjs(data.release_date).format("YYYY")})
                  </h1>
                  <span className="text-slate-400 text-lg italic">
                     {data.tagline || "No subtitle"}
                  </span>
               </div>
               <Genres genres={data.genres} />
               <span className="text-xl font-light">Overview</span>
               <ScrollShadow
                  hideScrollBar
                  className="w-full min-h-[100px] max-h-[150px] mb-3 md:mb-0 text-base text-justify font-normal"
               >
                  {data.overview}
               </ScrollShadow>
               <div className="text-lg border-b border-solid border-slate-400 pb-2 mb-3">
                  <span className="font-semibold">Status: </span>
                  <span className="text-slate-400">{data.status}</span>
               </div>
               <div className="text-lg border-b border-solid border-slate-400 pb-2 mb-3">
                  <span className="font-semibold">Creator: </span>

                  {data.credits.crew
                     .filter((f) => f.job === "Director")
                     .map((item, index) => (
                        <span key={index} className="text-slate-400">
                           {item.name}
                           {","}
                        </span>
                     ))}
               </div>
            </div>
         </div>
      </div>
   );
};

export default Header;
