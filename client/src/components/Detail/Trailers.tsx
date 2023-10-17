import tmdbConfig from "@/api/config/tmdb.config";
import { videoResultType } from "@/types/all.type";
import { Tooltip } from "@nextui-org/react";
import { Image } from "@nextui-org/react";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { PlayIcon } from "../utils/PlayIcon";
import "./Detail.css";
import "swiper/css";
import "swiper/css/navigation";

const Trailers = ({ data }: { data: videoResultType[] }) => {
   return (
      <div className="container ">
         <div className="md:mx-0 mx-2">
            <div>
               <h1 className="text-2xl md:text-3xl my-4 font-bold text-white italic">
                  Official Trailers
               </h1>
            </div>
            <div>
               <Swiper
                  spaceBetween={2}
                  grid={{ rows: 1 }}
                  breakpoints={{
                     320: {
                        slidesPerView: 2,
                        spaceBetween: 3,
                     },
                     1024: {
                        slidesPerView: 4,
                        spaceBetween: 3,
                     },
                  }}
               >
                  {data.map((video, index) => (
                     <SwiperSlide key={index} className="w-full ">
                        <div className="relative videoThumbnail ">
                           <Image
                              src={tmdbConfig.youtubeImg(video.key)}
                              width={400}
                              height={300}
                              alt={video.name}
                              isZoomed
                              radius="lg"
                              className="object-cover border-2 border-slate-700 border-solid cursor-pointer"
                           />
                           <PlayIcon />
                        </div>
                     </SwiperSlide>
                  ))}
               </Swiper>
            </div>
         </div>
      </div>
   );
};

export default Trailers;
