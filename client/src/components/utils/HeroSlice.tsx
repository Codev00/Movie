import tmdbConfig from "@/api/config/tmdb.config";
import mediaApi from "@/api/media.api";
import { axiosResList } from "@/types/axiosRes.type";
import { Image } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const HeroSlice = () => {
   const [data, setData] = useState<axiosResList>();

   useEffect(() => {
      const getData = async ({
         mediaType,
         time,
      }: {
         mediaType: string | string[];
         time: string;
      }) => {
         const { res, error } = await mediaApi.trending({ mediaType, time });
         if (res) setData(res);
         if (error) console.log(error);
      };
      getData({ mediaType: "movie", time: "day" });
   });

   return (
      <div className="w-full">
         <div className="w-full flex items-center justify-center">
            <Swiper
               modules={[Autoplay]}
               autoplay={{
                  pauseOnMouseEnter: false,
                  delay: 5000,
                  stopOnLastSlide: false,
                  disableOnInteraction: false,
               }}
               loop={true}
               grabCursor={true}
               className="rounded-xl"
               spaceBetween={5}
               slidesPerView={1}
            >
               {data?.results.map((movie, index) => (
                  <SwiperSlide key={index}>
                     <Image
                        src={tmdbConfig.backdropPath(movie.backdrop_path)}
                        height={300}
                        width={1200}
                        alt={movie.title}
                        className=" w-full h-[300px] object-cover"
                        shadow="md"
                        isBlurred
                     />
                  </SwiperSlide>
               ))}
            </Swiper>
         </div>
      </div>
   );
};

export default HeroSlice;
