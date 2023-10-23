import tmdbConfig from "@/api/config/tmdb.config";
import { MediaTypeDetail } from "@/types/media.type";
import React, { useState } from "react";
import { Chip } from "@nextui-org/react";

const Video = ({ data }: { data: MediaTypeDetail }) => {
   const [play, setPlay] = useState(data.videos.results[0].key);
   const videos = data.videos.results.slice(0, 5);
   return (
      <div className="my-10 mx-2 md:mx-0">
         <div className="p-2 bg-black/90 rounded w-full">
            <iframe
               className="w-full h-full aspect-video "
               src={tmdbConfig.youtubePath(play)}
            ></iframe>
         </div>
         <div className="mt-5">
            <div className="flex gap-5 items-center">
               <h1 className="underline underline-offset-4 font-bold text-danger">
                  Film:
               </h1>
               <div className="flex gap-5">
                  {videos.map((video, index) => (
                     <Chip
                        key={index}
                        variant="shadow"
                        className="cursor-pointer"
                        onClick={() => setPlay(video.key)}
                        color={play == video.key ? "danger" : "default"}
                        size="lg"
                     >
                        Trailer {index + 1}
                     </Chip>
                  ))}
               </div>
            </div>
         </div>
      </div>
   );
};

export default Video;
