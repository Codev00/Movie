import privateClient from "./config/private.client";

const favoriteEndpoint = {
   list: "user/favorites",
   add: "user/favorites",
   remove: ({ favoriteId }: { favoriteId: string }) =>
      `user/favorites/${favoriteId}`,
};

const favoritesApi = {
   getList: async () => {
      try {
         const res = await privateClient.get(favoriteEndpoint.list);
         return { res };
      } catch (error) {
         return { error };
      }
   },
   add: async ({
      mediaId,
      mediaType,
      mediaTitle,
      mediaPoster,
      mediaRate,
   }: {
      mediaId: string;
      mediaType: string;
      mediaTitle: string;
      mediaPoster: string;
      mediaRate: string;
   }) => {
      try {
         const res = await privateClient.post(favoriteEndpoint.add, {
            mediaId,
            mediaType,
            mediaTitle,
            mediaPoster,
            mediaRate,
         });
         return { res };
      } catch (error) {
         return { error };
      }
   },
   remove: async ({ favoriteId }: { favoriteId: string }) => {
      try {
         const res = await privateClient.delete(
            favoriteEndpoint.remove({ favoriteId })
         );
         return { res };
      } catch (error) {
         return { error };
      }
   },
};

export default favoritesApi;
