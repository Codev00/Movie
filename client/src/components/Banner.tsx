"use client";
import mediaApi from "@/api/media.api";
import React, { useEffect, useState } from "react";
import { MediaTypeList } from "@/types/media.type";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import Image from "next/image";
import tmdbConfig from "@/api/config/tmdb.config";
import Link from "next/link";
const Banner = ({
   mediaType,
   mediaCategory,
}: {
   mediaType: string;
   mediaCategory: string;
}) => {
   const [medias, setMedia] = useState<MediaTypeList[]>([]);
   useEffect(() => {
      const getMovieList = async () => {
         const { res, error } = await mediaApi.getList({
            mediaType,
            mediaCategory,
            page: 1,
         });
         if (res) setMedia(res.results);
         if (error) console.log(error);
      };
      getMovieList();
   }, []);
   return (
      <div className="h-screen w-screen relative hidden lg:block">
         <Swiper
            modules={[Autoplay]}
            grabCursor={true}
            spaceBetween={0}
            slidesPerView={1}
            autoplay={{ delay: 3000 }}
            loop={true}
            className="relative w-full h-full mySwiper"
         >
            {medias.map((item, index) => (
               <SwiperSlide key={index}>
                  <div
                     className={`ralative bg-[url(${tmdbConfig.backdropPath(
                        item.backdrop_path
                     )})] transition-all duration-300 ease-out`}
                  >
                     <Image
                        src={tmdbConfig.backdropPath(item.backdrop_path)}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                        alt=""
                        quality={75}
                        className="object-cover z-0 opacity-40 shadow-xl shadow-black"
                     />
                     <div
                        className="w-full h-40 absolute bottom-0 left-0"
                        style={{
                           background:
                              "linear-gradient(180deg,rgba(4,21,45,0) 0%, #0F1729 79.17%)",
                        }}
                     ></div>
                     <div className="w-full h-screen flex items-center justify-center">
                        <div className="relative flex flex-row w-[75%] gap-2">
                           <div className="w-full h-[500px] flex flex-col justify-center p-7">
                              <h2 className="text-6xl font-bold mb-5 text-white">
                                 {item.title}
                              </h2>
                              <div className="text-white text-justify">
                                 {item.overview}
                              </div>
                              <div className="mt-10">
                                 <Link
                                    href={`/${mediaType}/${item.id}`}
                                    className="relative inline-block text-lg group"
                                 >
                                    <span className="relative z-10 block px-5 py-3 font-bold overflow-hidden  leading-tight text-red-500 transition-colors duration-300 ease-out border-2 border-red-500 rounded-3xl group-hover:text-white">
                                       <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-3xl bg-gray-50"></span>
                                       <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-red-600 group-hover:-rotate-180 ease"></span>
                                       <span className="relative">
                                          Watch Now
                                       </span>
                                    </span>
                                    <span
                                       className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-red-600 rounded-3xl group-hover:mb-0 group-hover:mr-0"
                                       data-rounded="rounded-lg"
                                    ></span>
                                 </Link>
                              </div>
                           </div>

                           <Image
                              src={tmdbConfig.posterPath(item.poster_path)}
                              width={330}
                              height={230}
                              alt=""
                              className="z-10 relative top-5 left-5 rounded-3xl shadow-xl shadow-black"
                           />
                        </div>
                     </div>
                  </div>
               </SwiperSlide>
            ))}
         </Swiper>
      </div>
   );
};

export default Banner;
