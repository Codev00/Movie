import mediaApi from "@/api/modules/media.api";
import { axiosResList } from "@/types/axiosRes.type";
import React, { useLayoutEffect, useState } from "react";
import Breadcrumbs from "../utils/Breadcrumbs";
import ImagePlay from "../utils/ImagePlay";
import { Pagination } from "@nextui-org/react";
import { useRouter, useSearchParams } from "next/navigation";

const ListMedia = ({
   mediaType,
   with_genres,
}: {
   mediaType: string | string[];
   with_genres?: number;
}) => {
   const [data, setData] = useState<axiosResList>();
   const [page, setPage] = useState(1);
   const router = useRouter();
   const searchParams = useSearchParams();
   const [search, setSearch] = useState(false);
   const kq = searchParams.get("genre");
   const isBrowser = () => typeof window !== "undefined";
   const scrollTop = () => {
      if (!isBrowser()) return;
      window.scrollTo({ top: 0, behavior: "smooth" });
   };
   useLayoutEffect(() => {
      (async () => {
         if (kq) {
            const { res, error } = await mediaApi.mediaList({
               mediaType,
               page,
               with_genres: Number(kq),
            });
            if (res) setData(res);
            if (error) console.log(error);
         } else {
            const { res, error } = await mediaApi.mediaList({
               mediaType,
               page,
               with_genres,
            });
            if (res) setData(res);
            if (error) console.log(error);
         }
      })();
      scrollTop();
   }, [mediaType, page, with_genres, kq]);

   return (
      <div className="w-full min-h-[80px] flex flex-col px-2 md:px-0">
         {/* <Breadcrumbs mediaType={mediaType} /> */}
         <div className="w-[75%] md:w-[30%]">
            <h1 className="mb-5 text-xl font-bold border-b-3 pb-2 border-b-danger">
               Page {page}
            </h1>
         </div>
         <div className="w-full flex flex-wrap gap-y-4 justify-start md:justify-evenly gap-x-3">
            {data?.results.map((movie, index) => (
               <div
                  onClick={() =>
                     router.push(
                        `/${mediaType}/${
                           movie.title
                              ? movie?.title.split(" ").join("-")
                              : movie?.name.split(" ").join("-")
                        }/${movie.id}`
                     )
                  }
               >
                  <ImagePlay
                     key={index}
                     imgSrc={movie.poster_path}
                     width={180}
                     height={250}
                     alt={movie.title || movie.name}
                     className="rounded-xl hover:-translate-y-1 hover:shadow-xl cursor-pointer  hover:shadow-slate-700"
                  />
               </div>
            ))}
         </div>
         {data?.total_pages && (
            <div className="w-full flex justify-center items-center my-7 px-6 md:px-0">
               <Pagination
                  variant="light"
                  radius="full"
                  size="lg"
                  showShadow
                  showControls
                  initialPage={page}
                  color="danger"
                  total={100}
                  onChange={(page: number) => {
                     setPage(page);
                     scrollTop();
                  }}
               />
            </div>
         )}
      </div>
   );
};

export default ListMedia;
