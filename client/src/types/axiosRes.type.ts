import { genreType } from "./all.type";
import { MediaTypeList } from "./media.type";

export type axiosResList = {
   page: number;
   results: MediaTypeList[];
   total_pages: number;
   total_results: number;
};

export type genreRes = {
   genres: genreType[];
};
