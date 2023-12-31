import tmdbConfig from "@/api/config/tmdb.config";
import { recommendResultType } from "@/types/all.type";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import ImagePlay from "../utils/ImagePlay";

const Recommend = ({ data }: { data: recommendResultType[] }) => {
   const { mediaType } = useParams();
   const router = useRouter();
   return (
      <div className="container">
         <div className="md:mx-0 mx-2">
            <div>
               <h1 className="text-2xl md:text-3xl my-4 font-bold italic text-white">
                  Recommends
               </h1>
            </div>
            <div>
               <Swiper
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
                  {data.map((film, index) => (
                     <SwiperSlide className="w-full" key={index}>
                        <ImagePlay
                           imgSrc={film.poster_path}
                           width={300}
                           height={400}
                           alt={film.title}
                           className="rounded-xl border h-[176px] md:min-h-[250px] border-slate-500 boder-solid cursor-pointer hover:opacity-50 transition-all ease-in-out duration-300"
                           onClick={() =>
                              router.push(
                                 `/${mediaType}/${
                                    film.title
                                       ? film?.title.split(" ").join("-")
                                       : film?.name.split(" ").join("-")
                                 }/${film.id}`
                              )
                           }
                        />
                     </SwiperSlide>
                  ))}
               </Swiper>
            </div>
         </div>
      </div>
   );
};

export default Recommend;
