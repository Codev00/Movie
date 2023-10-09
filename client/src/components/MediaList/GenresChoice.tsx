import genresApi from "@/api/genres.api";
import { genreType } from "@/types/all.type";
import { Chip, Select, SelectItem } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import { PetIcon } from "../utils/icon/PetIcon";

const GenresChoice = ({ mediaType }: { mediaType: string | string[] }) => {
   const [genres, setGenres] = useState<genreType[]>([]);
   useEffect(() => {
      (async () => {
         const { res, error } = await genresApi.getList({ mediaType });
         if (res) setGenres(res.genres);
         if (error) console.log(error);
      })();
   }, [mediaType]);
   return (
      <div className="genres w-full  min-h-[80px] bg-slate-800 rounded-xl flex flex-wrap items-center p-5 ">
         <Select
            items={genres}
            label="Genres:"
            size="lg"
            disableAnimation={false}
            labelPlacement="outside-left"
            placeholder="Select Genres"
            className="max-w-[250px] flex items-center"
            color="secondary"
            radius="full"
            variant="bordered"
            selectorIcon={<PetIcon />}
            renderValue={(items) => {
               return (
                  <div className="flex flex-wrap gap-2 justify-center my-1">
                     {items.map((item) => (
                        <Chip key={item.key} color="danger" variant="shadow">
                           {item.data?.name}
                        </Chip>
                     ))}
                  </div>
               );
            }}
         >
            {(genre) => (
               <SelectItem key={genre.id} color="secondary" value={genre.id}>
                  {genre.name}
               </SelectItem>
            )}
         </Select>
      </div>
   );
};

export default GenresChoice;
