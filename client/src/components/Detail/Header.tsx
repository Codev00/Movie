"use client";
import tmdbConfig from "@/api/config/tmdb.config";
import { MediaTypeDetail } from "@/types/media.type";
import Image from "next/image";
import React from "react";
import { ScrollShadow } from "@nextui-org/react";
import "./Detail.css";
import Genres from "../utils/Genres";
import dayjs from "dayjs";
import { CircularProgress } from "@nextui-org/react";
import { toTime } from "@/more/function";
import { useParams, useRouter } from "next/navigation";
import { PlayIcon } from "../utils/PlayIcon";
const Header = ({ data }: { data: MediaTypeDetail }) => {
   const { mediaType, mediaName } = useParams();
   const router = useRouter();
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
            <div className="w-full min-h-[450px]  flex justify-center items-center gap-6 flex-col md:flex-row">
               <Image
                  src={tmdbConfig.posterPath(data.poster_path)}
                  alt={data.title || data.name}
                  width={300}
                  height={400}
                  className="rounded-md mt-20 md:mt-0 object-cover"
               />
               <div className="px-2 h-full w-full text-white flex flex-col gap-2 justify-between">
                  <div className="md:mb-3">
                     <h1 className="text-4xl  font-medium">
                        {data.title || data.name}{" "}
                        {data.title && dayjs(data.release_date).format("YYYY")}
                     </h1>
                     <span className="text-slate-400 text-lg italic">
                        {data.tagline || "No subtitle"}
                     </span>
                  </div>
                  <Genres mediaType={mediaType} genres={data.genres} />
                  <div className="flex items-center h-16 gap-5">
                     <div>
                        <CircularProgress
                           classNames={{
                              svg: "w-16 h-16 drop-shadow-md",
                              track: "stroke-white/10",
                              value: "text-lg font-semibold text-white",
                           }}
                           maxValue={10}
                           value={Number(data.vote_average.toFixed(1))}
                           valueLabel={Number(data.vote_average.toFixed(1))}
                           color={"danger"}
                           showValueLabel={true}
                           strokeWidth={4}
                        />
                     </div>
                     <div
                        className="playbtn relative min-w-16 gap-2 flex flex-row items-center hover:text-[#da2f68] cursor-pointer"
                        onClick={() =>
                           router.push(
                              `/${mediaType}/${mediaName}/${data.id}/play`
                           )
                        }
                     >
                        <PlayIcon />
                        <span className="text-lg font-light transition-all duration-300 ease-in-out">
                           Watch Trailer
                        </span>
                     </div>
                  </div>
                  <span className="text-2xl font-medium">Overview</span>
                  <ScrollShadow
                     hideScrollBar
                     className="w-full min-h-[100px] max-h-[150px] md:h-[100px] mb-3 md:mb-0 text-base text-justify font-normal"
                  >
                     {data.overview}
                  </ScrollShadow>
                  <div className="flex justify-between text-lg pb-2 ">
                     <div className="flex flex-col  lg:flex-row lg:gap-2">
                        <span className="font-medium">Status: </span>
                        <span className="text-slate-500 gap-2 text-lg text-center font-medium">
                           {" "}
                           {data.status}
                        </span>
                     </div>
                     <div className="flex flex-col lg:flex-row lg:gap-2">
                        <span className="font-medium">Release Date: </span>
                        <span className="text-slate-500 gap-2 text-lg text-center font-medium">
                           {dayjs(data.release_date).format("MMM DD, YYYY")}
                        </span>
                     </div>
                     <div className="flex flex-col lg:flex-row lg:gap-2">
                        <span className="font-medium">Runtime: </span>
                        <span className="text-slate-500 gap-2 text-lg text-center font-medium">
                           {toTime(data.runtime)}
                        </span>
                     </div>
                  </div>
                  {/* <div className="text-lg border-b border-solid border-slate-500 flex gap-2 pb-2 ">
                     <span className="font-medium ">Director: </span>
                     {data.credits.crew
                        .filter((f) => f.job === "Director")
                        .map((item, index) => (
                           <span
                              key={index}
                              className="text-slate-500 font-medium"
                           >
                              {item.name}
                              {","}
                           </span>
                        ))}
                  </div> */}
               </div>
            </div>
         </div>
      </div>
   );
};

export default Header;
