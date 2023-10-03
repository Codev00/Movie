"use client";
import mediaApi from "@/api/media.api";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { MediaTypeDetail } from "@/types/media.type";
import Header from "@/components/Detail/Header";
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
            </div>
         )}
      </div>
   );
};

export default MediaDetail;
