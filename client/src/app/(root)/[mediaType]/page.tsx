"use client";
import GenresChoice from "@/components/MediaList/GenresChoice";
import ListMedia from "@/components/MediaList/ListMedia";
import Trending from "@/components/MediaList/Trending";
import Breadcrumbs from "@/components/utils/Breadcrumbs";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

interface GenreType {
   name: string;
   id: number;
}

const MediaList = () => {
   const { mediaType } = useParams();

   const [genre, setGenre] = useState<GenreType>();
   return (
      <div className="container pt-[70px]">
         <div className="flex flex-col gap-1">
            <GenresChoice
               mediaType={mediaType}
               setGenre={(value) => setGenre(value)}
            />
            <ListMedia mediaType={mediaType} with_genres={genre?.id} />
            <Trending mediaType={mediaType} />
         </div>
      </div>
   );
};

export default MediaList;
