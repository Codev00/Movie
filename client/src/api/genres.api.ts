import publicClient from "./config/public.client";

const genresEndpoint = {
   list: ({ mediaType }: { mediaType: string }) => `${mediaType}/genres`,
};

const genresApi = {
   getList: async ({ mediaType }: { mediaType: string }) => {
      try {
         const res = await publicClient.get(genresEndpoint.list({ mediaType }));
         return { res };
      } catch (error) {
         return { error };
      }
   },
};

export default genresApi;
