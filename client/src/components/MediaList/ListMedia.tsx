import mediaApi from "@/api/media.api";
import { axiosResList } from "@/types/axiosRes.type";
import React, { useEffect, useLayoutEffect, useState } from "react";
import Breadcrumbs from "../utils/Breadcrumbs";
import ImagePlay from "../utils/ImagePlay";
import { Pagination } from "@nextui-org/react";
import { useRouter } from "next/navigation";

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
   useLayoutEffect(() => {
      (async () => {
         const { res, error } = await mediaApi.mediaList({
            mediaType,
            page,
            with_genres,
         });
         if (res) setData(res);
         if (error) console.log(error);
      })();
   }, [mediaType, page, with_genres]);
   return (
      <div className="w-full min-h-[80px] flex flex-col">
         <Breadcrumbs mediaType={mediaType} />
         <div className="w-full flex flex-wrap gap-y-5 justify-evenly">
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
                     className="rounded-xl hover:-translate-y-1 hover:shadow-xl cursor-pointer  hover:shadow-slate-800"
                  />
               </div>
            ))}
         </div>
         <div className="w-full flex justify-center items-center my-7 px-6 md:px-0">
            <Pagination
               variant="light"
               radius="full"
               size="lg"
               showShadow
               initialPage={page}
               color="danger"
               total={data?.total_pages || 0}
               onChange={(page: number) => setPage(page)}
            />
         </div>
      </div>
   );
};

export default ListMedia;
