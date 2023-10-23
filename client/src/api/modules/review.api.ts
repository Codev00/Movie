import privateClient from "../config/private.client";

const reviewEndpoints = {
   list: "reviews",
   add: "reviews",
   remove: ({ reviewId }: { reviewId: string }) => `reviews/${reviewId}`,
};

const reviewApi = {
   add: async ({
      mediaId,
      mediaType,
      mediaTitle,
      mediaPoster,
      content,
   }: any) => {
      try {
         const res = await privateClient.post(reviewEndpoints.add, {
            mediaId,
            mediaType,
            mediaTitle,
            mediaPoster,
            content,
         });
         return { res };
      } catch (error) {
         return { error };
      }
   },
   remove: async ({ reviewId }: { reviewId: string }) => {
      try {
         const res = await privateClient.delete(
            reviewEndpoints.remove({ reviewId })
         );
         return { res };
      } catch (error) {
         return { error };
      }
   },
   getList: async () => {
      try {
         const res = await privateClient.get(reviewEndpoints.list);
         return { res };
      } catch (error) {
         return { error };
      }
   },
};

export default reviewApi;
