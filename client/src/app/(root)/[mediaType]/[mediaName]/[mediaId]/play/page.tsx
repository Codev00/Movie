"use client";
import mediaApi from "@/api/modules/media.api";
import Body from "@/components/PlayVIdeo/Body";
import Video from "@/components/PlayVIdeo/Video";
import HeroSlice from "@/components/utils/HeroSlice";
import { MediaTypeDetail } from "@/types/media.type";
import { useParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";

const Play = () => {
   const [data, setData] = useState<MediaTypeDetail>();
   const { mediaType, mediaId } = useParams();
   useEffect(() => {
      (async () => {
         const { res, error } = await mediaApi.detail({ mediaType, mediaId });
         if (res) setData(res);
         if (error) console.log(error);
      })();
   }, [mediaId, mediaType]);
   return (
      <Suspense>
         {data && (
            <div className="container mt-[60px] w-full h-auto">
               <div className="flex flex-col">
                  <HeroSlice />
                  <Video data={data} />
                  <Body data={data} />
               </div>
            </div>
         )}
      </Suspense>
   );
};

export default Play;
