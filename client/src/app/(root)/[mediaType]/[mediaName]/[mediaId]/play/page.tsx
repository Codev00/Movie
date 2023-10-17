"use client";
import Body from "@/components/PlayVIdeo/Body";
import RunFilm from "@/components/PlayVIdeo/RunFilm";
import Video from "@/components/PlayVIdeo/Video";
import HeroSlice from "@/components/utils/HeroSlice";

const Play = () => {
   return (
      <div className="container mt-[60px] w-full h-auto">
         <div className="flex flex-col">
            <HeroSlice />
            <Video />
            <RunFilm />
            <Body />
         </div>
      </div>
   );
};

export default Play;
