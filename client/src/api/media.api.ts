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
   }) => `${mediaType}/${mediaCategory}/query?page=${page}`,
   detail: ({ mediaType, mediaId }: { mediaType: string; mediaId: number }) =>
      `${mediaType}/detail/${mediaId}`,
   search: ({
      mediaType,
      query,
      page,
   }: {
      mediaType: string;
      query: string;
      page: number;
   }) => `${mediaType}/search?query=${query}&page=${page}`,
   trending: ({ mediaType, query }: { mediaType: string; query: string }) =>
      `trending/${mediaType}/${query}`,
   toprate: ({ mediaType, page }: { mediaType: string; page: number }) =>
      `${mediaType}/top-rate/list?page=${page}`,
};

const mediaApi = {
   getList: async ({ mediaType, mediaCategory, page }: any) => {
      try {
         const res = await publicClient.get(
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
      query,
   }: {
      mediaType: string;
      query: string;
   }) => {
      try {
         const res = await publicClient.get(
            mediaEndpoints.trending({
               mediaType,
               query,
            })
         );
         return { res };
      } catch (error) {
         return { error };
      }
   },
   toprate: async ({
      mediaType,
      page,
   }: {
      mediaType: string;
      page: number;
   }) => {
      try {
         const res = await publicClient.get(
            mediaEndpoints.toprate({
               mediaType,
               page,
            })
         );
         return { res };
      } catch (error) {
         return { error };
      }
   },
};

export default mediaApi;
