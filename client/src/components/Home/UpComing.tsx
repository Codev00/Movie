import mediaApi from "@/api/modules/media.api";
import ImagePlay from "../utils/ImagePlay";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";

const getData = async () => {
   const { res, error } = await mediaApi.upcoming();
   if (res) return res;
   if (error) console.log(error);
};

const UpComing = async () => {
   const data = await getData();
   return (
      <div className="flex flex-col my-5 xl:my-10 w-full md:container ">
         <div className="flex flex-col gap-5  px-2 ">
            <div>
               <h1 className="text-2xl text-white font-bold">Coming Soon</h1>
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
                  {data &&
                     data.results.map((film, index) => (
                        <SwiperSlide className="w-full" key={index}>
                           <Link
                              href={`/movie/${
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
            </div>
         </div>
      </div>
   );
};

export default UpComing;
