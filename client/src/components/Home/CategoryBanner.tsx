"use client";
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { MediaTypeList } from "@/types/media.type";
import tmdbConfig from "@/api/config/tmdb.config";
import mediaApi from "@/api/modules/media.api";
import Image from "next/image";
import dayjs from "dayjs";
import CircleRating from "./CircleRating";
import Link from "next/link";

const CategoryBanner = ({ name, data }: { name: string; data: string[] }) => {
   const [trending, setTrending] = useState<MediaTypeList[]>([]);
   const [time, setTime] = useState(data[0]);
   const [mediaType, setMediaType] = useState("movie");

   useEffect(() => {
      const getTrendingList = async () => {
         const { res, error } = await mediaApi.trending({
            mediaType,
            time,
         });
         if (res) setTrending(res.results);
         if (error) console.log(error);
      };
      const getTopRate = async () => {
         const { res, error } = await mediaApi.getList({
            mediaType: mediaType,
            mediaCategory: "top_rated",
            page: 1,
         });
         if (res) setTrending(res.results);
         if (error) console.log(error);
      };
      if (name === "Trending") getTrendingList();
      if (name === "Top Rate") getTopRate();
   }, [time]);
   const changeQuery = (type: string) => {
      if (name === "Trending") setTime(type);
      if (name === "Top Rate") {
         setTime(type);
         setMediaType(type);
      }
   };
   return (
      <div
         className="my-5 xl:my-10 w-full md:container"
         data-aos="fade-up"
         data-aos-duration="1000"
         data-aos-delay="150"
         data-aos-offset="150"
         key={mediaType}
      >
         <div className="flex flex-row w-full justify-between mb-5 px-2 md:px-10">
            <div className="text-2xl text-white font-bold">{name}</div>
            <div className=" bg-white rounded-3xl p-[2px] flex gap-1 transition-all">
               <button
                  className={`p-1 w-20 rounded-3xl ${
                     time === data[0] ? "bg-danger text-white" : "text-black"
                  }  font-bold transition-all duration-300 ease-linear`}
                  onClick={() => changeQuery(data[0])}
               >
                  {data[0]}
               </button>
               <button
                  className={`p-1 w-20 rounded-3xl ${
                     time === data[1] ? "bg-danger text-white" : "text-black"
                  }  font-bold transition-all duration-300 ease-linear`}
                  onClick={() => changeQuery(data[1])}
               >
                  {data[1]}
               </button>
            </div>
         </div>
         <div className="mx-2 md:mx-10 rounded-2xl">
            <Swiper
               spaceBetween={10}
               slidesPerView={"auto"}
               loop={true}
               grid={{ rows: 1 }}
               breakpoints={{
                  320: {
                     slidesPerView: 3,
                     spaceBetween: 10,
                  },
                  640: {
                     slidesPerView: 4,
                     spaceBetween: 10,
                  },
                  1024: {
                     slidesPerView: 6,
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
                        <Link
                           href={`/${mediaType}/${
                              item.title
                                 ? item?.title.split(" ").join("-")
                                 : item?.name.split(" ").join("-")
                           }/${item.id}`}
                        >
                           <div className="relative cursor-pointer items-stretch">
                              <Image
                                 src={tmdbConfig.posterPath(item.poster_path)}
                                 width={200}
                                 height={300}
                                 alt=""
                                 className="rounded-xl hover:opacity-50"
                              />
                              <CircleRating
                                 rating={Number(item.vote_average.toFixed(1))}
                              />
                           </div>
                           <div className="mt-8">
                              <span className="block whitespace-nowrap overflow-hidden text-ellipsis mb-1 w-[120px] md:w-[120px] lg:w-[130px] xl:w-[150px] font-semibold cursor-pointer">
                                 {item.title || item?.name}
                              </span>
                              <span className="text-gray-600 font-semibold">
                                 {dayjs(item.release_date).format(
                                    "MMM D, YYYY"
                                 )}
                              </span>
                           </div>
                        </Link>
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
