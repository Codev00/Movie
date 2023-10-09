import { genreType } from "@/types/all.type";
import publicClient from "./config/public.client";
import { genreRes } from "@/types/axiosRes.type";

const genresEndpoint = {
   list: ({ mediaType }: { mediaType: string }) => `media/${mediaType}/genres`,
};

const genresApi = {
   getList: async ({ mediaType }: { mediaType: any }) => {
      try {
         const res = await publicClient.get<genreRes, genreRes>(
            genresEndpoint.list({ mediaType })
         );
         return { res };
      } catch (error) {
         return { error };
      }
   },
};

export default genresApi;
