"use client";
import genresApi from "@/api/genres.api";
import GenresChoice from "@/components/MediaList/GenresChoice";
import { genreType } from "@/types/all.type";
import { Chip, Select, SelectItem } from "@nextui-org/react";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const MediaList = () => {
   const { mediaType } = useParams();

   return (
      <div className="container pt-[60px]">
         <div className="flex flex-col gap-1">
            <GenresChoice mediaType={mediaType} />
            <div>List movie</div>
            <div>Suggest</div>
         </div>
      </div>
   );
};

export default MediaList;
