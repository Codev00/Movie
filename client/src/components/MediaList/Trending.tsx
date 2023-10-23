import { Swiper, SwiperSlide } from "swiper/react";
import ImagePlay from "../utils/ImagePlay";
import mediaApi from "@/api/modules/media.api";
import Link from "next/link";
import { useEffect, useState } from "react";
import { axiosResList } from "@/types/axiosRes.type";

const Trending = ({ mediaType }: { mediaType: string | string[] }) => {
   const [data, setData] = useState<axiosResList>();
   useEffect(() => {
      const getData = async ({
         mediaType,
      }: {
         mediaType: string | string[];
      }) => {
         const { res, error } = await mediaApi.trending({
            mediaType: mediaType,
            time: "day",
         });
         if (res) setData(res);
         if (error) console.log(error);
      };
      getData({ mediaType });
   }, [mediaType]);
   return (
      <div className="w-full ">
         <div className="md:mx-0 mx-2">
            <div>
               <h1 className="text-2xl md:text-3xl my-4 font-bold text-white italic">
                  Trending
               </h1>
            </div>
            {data && (
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
                  {data.results.map((film, index) => (
                     <SwiperSlide className="w-full" key={index}>
                        <Link
                           href={`/${mediaType}/${
                              film.title
                                 ? film?.title.split(" ").join("-")
                                 : film?.name.split(" ").join("-")
                           }/${film.id}`}
                        >
                           <ImagePlay
                              imgSrc={film.poster_path}
                              width={300}
                              height={400}
                              alt={film.title}
                              className="rounded-xl border h-[176px] md:h-[250px] border-slate-500 border-solid cursor-pointer hover:opacity-50 transition-all ease-in-out duration-300"
                           />
                        </Link>
                     </SwiperSlide>
                  ))}
               </Swiper>
            )}
         </div>
      </div>
   );
};

export default Trending;
