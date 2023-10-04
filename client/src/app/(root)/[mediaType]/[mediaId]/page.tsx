"use client";
import mediaApi from "@/api/media.api";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { MediaTypeDetail } from "@/types/media.type";
import Header from "@/components/Detail/Header";
import Body from "@/components/Detail/Body";
import TopCast from "@/components/Detail/TopCast";
import Trailers from "@/components/Detail/Trailers";
const MediaDetail = () => {
   const { mediaType, mediaId } = useParams();
   const [data, setData] = useState<MediaTypeDetail>();

   useEffect(() => {
      (async () => {
         const { res, error } = await mediaApi.detail({ mediaType, mediaId });
         console.log(res);

         if (res) setData(res);
         if (error) console.log(error);
      })();
   }, []);

   return (
      <div className="w-screen h-auto">
         {data && (
            <div className="w-auto h-auto">
               <Header data={data} />
               <TopCast data={data.credits.cast} />
               <Trailers data={data.videos.results} />
            </div>
         )}
      </div>
   );
};

export default MediaDetail;
