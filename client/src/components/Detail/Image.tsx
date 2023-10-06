import { imageType } from "@/types/all.type";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import tmdbConfig from "@/api/config/tmdb.config";

const Images = ({ data }: { data: imageType[] }) => {
   return (
      <div className="container">
         <div className="mx-2 md:mx-0">
            <div>
               <h1 className="text-2xl md:text-3xl my-4 font-bold text-white italic">
                  Images
               </h1>
            </div>
            <div className="w-full ">
               <div className=" flex justify-center ">
                  <div className="max-w-[300px] md:max-w-[600px] md:p-10 p-3 border-t-2 border-b-2  mx-2 md:mx-0">
                     <Swiper
                        spaceBetween={10}
                        grid={{ rows: 1 }}
                        slidesPerView={1}
                     >
                        {data.map((images, index) => (
                           <SwiperSlide key={index} className="w-full">
                              <Image
                                 src={tmdbConfig.backdropPath(images.file_path)}
                                 width={images.width}
                                 height={images.height}
                                 alt={images.file_path}
                                 className="rounded-lg border border-slate-500 cursor-grab"
                              />
                           </SwiperSlide>
                        ))}
                     </Swiper>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Images;
