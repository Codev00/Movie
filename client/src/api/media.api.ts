import { axiosResList } from "@/types/axiosRes";
import privateClient from "./config/private.client";
import publicClient from "./config/public.client";

const mediaEndpoints = {
   list: ({
      mediaType,
      mediaCategory,
      page,
   }: {
      mediaType: string;
      mediaCategory: string;
      page: number;
   }) => `media/${mediaType}/list/${mediaCategory}?page=${page}`,
   detail: ({ mediaType, mediaId }: { mediaType: string; mediaId: number }) =>
      `media/${mediaType}/detail/${mediaId}`,
   search: ({
      mediaType,
      query,
      page,
   }: {
      mediaType: string;
      query: string;
      page: number;
   }) => `media/${mediaType}/search?query=${query}&page=${page}`,
   trending: ({ mediaType, time }: { mediaType: string; time: string }) =>
      `media/${mediaType}/trending/${time}`,
   toprate: ({ mediaType, page }: { mediaType: string; page: number }) =>
      `media/${mediaType}/top-rate/list?page=${page}`,
};

const mediaApi = {
   getList: async ({ mediaType, mediaCategory, page }: any) => {
      try {
         const res = await publicClient.get<axiosResList, axiosResList>(
            mediaEndpoints.list({ mediaType, mediaCategory, page })
         );
         return { res };
      } catch (error) {
         return { error };
      }
   },
   detail: async ({ mediaType, mediaId }: any) => {
      try {
         const res = await publicClient.get(
            mediaEndpoints.detail({ mediaType, mediaId })
         );
         return { res };
      } catch (error) {
         return { error };
      }
   },
   search: async ({ mediaType, query, page }: any) => {
      try {
         const res = await privateClient.get(
            mediaEndpoints.search({ mediaType, query, page })
         );
         return { res };
      } catch (error) {
         return { error };
      }
   },
   trending: async ({
      mediaType,
      time,
   }: {
      mediaType: string;
      time: string;
   }) => {
      try {
         const res = await publicClient.get(
            mediaEndpoints.trending({
               mediaType,
               time,
            })
         );
         return { res };
      } catch (error) {
         return { error };
      }
   },
};

export default mediaApi;
