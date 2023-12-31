import tmdbConfig from "./tmdb.config.js";

const tmdbEndpoint = {
   mediaList: ({ mediaType, mediaCategory, page }) =>
      tmdbConfig.getUrl(`${mediaType}/${mediaCategory}`, page),
   mediaDetail: ({ mediaType, mediaId }) =>
      tmdbConfig.getUrl(`${mediaType}/${mediaId}`),
   mediaGenres: ({ mediaType }) => tmdbConfig.getUrl(`genre/${mediaType}/list`),
   mediaCredits: ({ mediaType, mediaId }) =>
      tmdbConfig.getUrl(`${mediaType}/${mediaId}/credits`),
   mediaVideos: ({ mediaType, mediaId }) =>
      tmdbConfig.getUrl(`${mediaType}/${mediaId}/videos`),
   mediaRecommend: ({ mediaType, mediaId }) =>
      tmdbConfig.getUrl(`${mediaType}/${mediaId}/recommendations`),
   mediaSimilar: ({ mediaType, mediaId }) =>
      tmdbConfig.getUrl(`${mediaType}/${mediaId}/similar`),
   mediaImages: ({ mediaType, mediaId }) =>
      tmdbConfig.getUrl(`${mediaType}/${mediaId}/images`),
   mediaTrending: ({ mediaType, time }) =>
      tmdbConfig.getUrl(`trending/${mediaType}/${time}`),
   mediaSearch: ({ mediaType, query, page }) =>
      tmdbConfig.getUrl(`search/${mediaType}`, { query, page }),
   personDetail: ({ personId }) => tmdbConfig.getUrl(`person/${personId}`),
   personMedias: ({ personId }) =>
      tmdbConfig.getUrl(`person/${personId}/combined_credits`),
   mediaGenresList: ({ mediaType, with_genres, page }) =>
      tmdbConfig.getUrl(`discover/${mediaType}`, { with_genres, page }),
};

export default tmdbEndpoint;
