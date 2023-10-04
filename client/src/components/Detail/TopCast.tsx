import tmdbConfig from "@/api/config/tmdb.config";
import { castType } from "@/types/all.type";
import Image from "next/image";
import React from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const TopCast = ({ data }: { data: castType[] }) => {
   return (
      <div className="container md:mx-0 mx-2 relative w-full">
         <div>
            <h1 className="text-3xl my-4 font-bold text-white italic">
               Top Cast
            </h1>
         </div>
         <div>
            <Swiper
               modules={[Autoplay]}
               spaceBetween={10}
               autoplay={{
                  delay: 2000,
               }}
               slidesPerView={"auto"}
               grid={{ rows: 1 }}
               breakpoints={{
                  320: {
                     slidesPerView: 5,
                     spaceBetween: 3,
                  },
                  640: {
                     slidesPerView: 5,
                     spaceBetween: 3,
                  },
                  1024: {
                     slidesPerView: 8,
                     spaceBetween: 2,
                  },
               }}
            >
               {data.map((cast, index) => (
                  <SwiperSlide key={index} className="w-full ">
                     <div className="relative ">
                        <Image
                           src={
                              cast.profile_path == null
                                 ? "/images/no-image.png"
                                 : tmdbConfig.backdropPath(cast.profile_path)
                           }
                           width={100}
                           height={100}
                           alt={cast.name}
                           className="text-center object-cover rounded-full md:w-[100px] md:h-[100px] w-[75px] h-[75px] p-[2px] bg-gradient-to-tr from-[#E9215E] via-[#6C8BF8] to-[#3045EB]"
                        />
                     </div>
                  </SwiperSlide>
               ))}
            </Swiper>
         </div>
      </div>
   );
};

export default TopCast;
