import privateClient from "./config/private.client";

const personEndpoint = {
   details: ({ personId }: { personId: string }) => `person/${personId}`,
   medias: ({ personId }: { personId: string }) => `person/${personId}/medias`,
};

const personApi = {
   details: async ({ personId }: { personId: string }) => {
      try {
         const res = await privateClient.get(
            personEndpoint.details({ personId })
         );
         return { res };
      } catch (error) {
         return { error };
      }
   },
   medias: async ({ personId }: { personId: string }) => {
      try {
         const res = await privateClient.get(
            personEndpoint.medias({ personId })
         );
         return { res };
      } catch (error) {
         return { error };
      }
   },
};

export default personApi;
