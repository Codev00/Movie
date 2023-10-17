import genresApi from "@/api/genres.api";
import { Chip, Select, SelectItem } from "@nextui-org/react";
import { PetIcon } from "../utils/icon/PetIcon";
import { useEffect, useState } from "react";
import { genreType } from "@/types/all.type";
import { useRouter, useSearchParams } from "next/navigation";

interface GenreType {
   name: string;
   id: number;
}

const GenresChoice = ({
   mediaType,
   setGenre,
}: {
   mediaType: string | string[];
   setGenre?: (genre: GenreType) => void;
}) => {
   const [genres, setGenres] = useState<genreType[]>([]);
   const searchParams = useSearchParams();
   const [selectKey, setSelectKey] = useState("");
   const router = useRouter();
   useEffect(() => {
      (async () => {
         const { res, error } = await genresApi.getList({ mediaType });
         if (res) setGenres(res.genres);
         if (error) console.log(error);
      })();
   }, [mediaType]);

   const SelectGenre = (e: any) => {
      const data = genres.filter((item) => item.id == e.target.value);
      setGenre?.(data[0]);
      router.push(`/${mediaType}?genre=${e.target.value}`);
   };
   return (
      <div className="genres w-full  min-h-[80px]  rounded-xl flex flex-wrap items-center p-5 ">
         <Select
            items={genres}
            label="Genres:"
            size="lg"
            selectedKeys={selectKey}
            disableAnimation={false}
            labelPlacement="outside-left"
            placeholder="Select Genres"
            className="md:min-w-[250px] max-w-xs flex items-center"
            color="danger"
            radius="md"
            onChange={SelectGenre}
            scrollShadowProps={{
               isEnabled: false,
            }}
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
               <SelectItem key={genre.id} color="danger" value={genre.id}>
                  {genre.name}
               </SelectItem>
            )}
         </Select>
      </div>
   );
};

export default GenresChoice;
