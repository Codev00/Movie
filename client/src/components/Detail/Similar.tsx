import tmdbConfig from "@/api/config/tmdb.config";
import { similarType } from "@/types/all.type";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

const Similar = ({ data }: { data: similarType[] }) => {
   const { mediaType } = useParams();
   const router = useRouter();
   return (
      <div className="container">
         <div className="md:mx-0 mx-2">
            <div>
               <h1 className="text-2xl md:text-3xl my-4 font-bold italic text-white">
                  Similar
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
                        <Image
                           src={tmdbConfig.posterPath(film.poster_path)}
                           width={300}
                           height={400}
                           alt={film.title}
                           className="rounded-xl border h-[176px] md:h-[250px] border-slate-500 border-solid cursor-pointer hover:opacity-50 transition-all ease-in-out duration-300"
                           onClick={() =>
                              router.push(`/${mediaType}/${film.id}`)
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

export default Similar;
