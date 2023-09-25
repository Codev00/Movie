import { MediaTypeList } from "./mediaList.type";

export type axiosResList = {
   page: number;
   results: MediaTypeList[];
   total_pages: number;
   total_results: number;
};
