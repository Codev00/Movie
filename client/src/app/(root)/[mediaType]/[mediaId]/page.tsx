"use client";
import mediaApi from "@/api/media.api";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { MediaTypeDetail } from "@/types/media.type";
import Header from "@/components/Detail/Header";
import Body from "@/components/Detail/Body";
import TopCast from "@/components/Detail/TopCast";
import Trailers from "@/components/Detail/Trailers";
import Images from "@/components/Detail/Image";
import Similar from "@/components/Detail/Similar";
import Recommend from "@/components/Detail/Recommend";
const MediaDetail = () => {
   const { mediaType, mediaId } = useParams();
   const [data, setData] = useState<MediaTypeDetail>();

   useEffect(() => {
      (async () => {
         const { res, error } = await mediaApi.detail({ mediaType, mediaId });
         if (res) setData(res);
         if (error) console.log(error);
      })();
   }, []);

   return (
      <div className="w-screen h-auto">
         {data && (
            <div className="w-full h-auto">
               <Header data={data} />
               <TopCast data={data.credits.cast} />
               {data.videos.results.length > 0 && (
                  <Trailers data={data.videos.results} />
               )}
               <Images data={data.images.backdrops} />
               <Similar data={data.similar.results} />
               {data.recommend.total_results > 7 && (
                  <Recommend data={data.recommend.results} />
               )}
            </div>
         )}
      </div>
   );
};

export default MediaDetail;
