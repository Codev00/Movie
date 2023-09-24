"use client";
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { MediaType } from "@/types/media.type";
import tmdbConfig, { mediaType } from "@/api/config/tmdb.config";
import mediaApi from "@/api/media.api";
import Image from "next/image";
import dayjs from "dayjs";
import CircleRating from "./CircleRating";

const CategoryBanner = ({ name, data }: { name: string; data: string[] }) => {
   const [trending, setTrending] = useState<MediaType[]>([]);
   const [query, setQuery] = useState(data[0]);
   const [mediaType, setMediaType] = useState("movie");
   useEffect(() => {
      const getTrendingList = async () => {
         const { res, error } = await mediaApi.trending({
            mediaType,
            query,
         });
         if (res) setTrending(res.results);
         if (error) console.log(error);
      };
      const getTopRate = async () => {
         const { res, error } = await mediaApi.toprate({
            mediaType,
            page: 1,
         });
         if (res) setTrending(res.results);
         if (error) console.log(error);
      };
      if (name === "Trending") getTrendingList();
      if (name === "Top Rate") getTopRate();
   }, [query]);
   const changeQuery = (type: string) => {
      if (name === "Trending") setQuery(type);
      if (name === "Top Rate") {
         setQuery(type);
         setMediaType(type);
      }
   };
   return (
      <div className="my-10 w-full">
         <div className="flex flex-row w-full justify-between mb-5 px-10">
            <div className="text-2xl text-white font-bold">{name}</div>
            <div className=" bg-white rounded-3xl p-[2px] flex gap-1 transition-all">
               <button
                  className={`p-1 w-20 rounded-3xl ${
                     query === data[0]
                        ? "bg-orange-600 text-white"
                        : "text-black"
                  }  font-bold transition-all duration-300 ease-linear`}
                  onClick={() => changeQuery(data[0])}
               >
                  {data[0]}
               </button>
               <button
                  className={`p-1 w-20 rounded-3xl ${
                     query === data[1]
                        ? "bg-orange-600 text-white"
                        : "text-black"
                  }  font-bold transition-all duration-300 ease-linear`}
                  onClick={() => changeQuery(data[1])}
               >
                  {data[1]}
               </button>
            </div>
         </div>
         <div className="mx-10 rounded-2xl">
            <Swiper
               navigation={true}
               modules={[Navigation]}
               spaceBetween={10}
               slidesPerView={"auto"}
               grid={{ rows: 1 }}
               breakpoints={{
                  320: {
                     slidesPerView: 2,
                     spaceBetween: 20,
                     navigation: false,
                  },
                  480: {
                     slidesPerView: 3,
                     spaceBetween: 10,
                     navigation: false,
                  },
                  640: {
                     slidesPerView: 4,
                     spaceBetween: 10,
                     navigation: false,
                  },
                  1024: {
                     slidesPerView: 5,
                     spaceBetween: 10,
                  },
                  1286: {
                     slidesPerView: 6,
                     spaceBetween: 10,
                  },
               }}
            >
               {trending ? (
                  trending.map((item, i) => (
                     <SwiperSlide className="" key={i}>
                        <div className="relative cursor-pointer">
                           <Image
                              src={tmdbConfig.posterPath(item.poster_path)}
                              width={200}
                              height={300}
                              alt=""
                              className="rounded-2xl"
                           />
                           <CircleRating
                              rating={Number(item.vote_average.toFixed(1))}
                           />
                        </div>
                        <div className="mt-10">
                           <span className="block whitespace-nowrap overflow-hidden text-ellipsis mb-1 w-[150px] md:w-[200px] font-semibold cursor-pointer">
                              {item.title || item?.name}
                           </span>
                           <span className="text-gray-600 font-semibold">
                              {dayjs(item.release_date).format("MMM D, YYYY")}
                           </span>
                        </div>
                     </SwiperSlide>
                  ))
               ) : (
                  <div>Loading ....</div>
               )}
            </Swiper>
         </div>
      </div>
   );
};

export default CategoryBanner;
