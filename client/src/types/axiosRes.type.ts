import { MediaTypeList } from "./media.type";

export type axiosResList = {
   page: number;
   results: MediaTypeList[];
   total_pages: number;
   total_results: number;
};
