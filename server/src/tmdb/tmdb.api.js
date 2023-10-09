import axiosClient from "../axios/http.js";
import tmdbEndpoint from "./tmdb.endpoint.js";

const tmdbApi = {
   mediaList: async ({ mediaType, mediaCategory, page }) =>
      await axiosClient.get(
         tmdbEndpoint.mediaList({ mediaType, mediaCategory, page })
      ),
   mediaDetail: async ({ mediaType, mediaId }) =>
      await axiosClient.get(tmdbEndpoint.mediaDetail({ mediaType, mediaId })),
   mediaGenres: async ({ mediaType }) =>
      await axiosClient.get(tmdbEndpoint.mediaGenres({ mediaType })),
   mediaCredits: async ({ mediaType, mediaId }) =>
      await axiosClient.get(tmdbEndpoint.mediaCredits({ mediaType, mediaId })),
   mediaVideos: async ({ mediaType, mediaId }) =>
      await axiosClient.get(tmdbEndpoint.mediaVideos({ mediaType, mediaId })),
   mediaImages: async ({ mediaType, mediaId }) =>
      await axiosClient.get(tmdbEndpoint.mediaImages({ mediaType, mediaId })),
   mediaRecommend: async ({ mediaType, mediaId }) =>
      await axiosClient.get(
         tmdbEndpoint.mediaRecommend({ mediaType, mediaId })
      ),
   mediaSimilar: async ({ mediaType, mediaId }) =>
      await axiosClient.get(tmdbEndpoint.mediaSimilar({ mediaType, mediaId })),
   mediaSearch: async ({ mediaType, query, page }) =>
      await axiosClient.get(
         tmdbEndpoint.mediaSearch({ mediaType, query, page })
      ),
   mediaTrending: async ({ mediaType, time }) =>
      await axiosClient.get(tmdbEndpoint.mediaTrending({ mediaType, time })),

   personDetail: async ({ personId }) =>
      await axiosClient.get(tmdbEndpoint.personDetail({ personId })),

   personMedias: async ({ personId }) =>
      await axiosClient.get(tmdbEndpoint.personMedias({ personId })),
   mediaGenresList: async ({ mediaType, with_genres }) =>
      await axiosClient.get(
         tmdbEndpoint.mediaGenresList({ mediaType, with_genres })
      ),
};

export default tmdbApi;
