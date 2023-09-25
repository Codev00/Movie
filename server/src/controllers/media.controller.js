import responseHandler from "../handlers/response.handler.js";
import tmdbApi from "../tmdb/tmdb.api.js";
import userModel from "../models/user.model.js";
import favoriteModel from "../models/favorite.model.js";
import reviewModel from "../models/review.model.js";
import tokenMiddleware from "../middlewares/token.middleware.js";

const getList = async (req, res) => {
   try {
      console.log("List");
      const { page } = req.query;
      const { mediaType, mediaCategory } = req.params;

      const response = await tmdbApi.mediaList({
         mediaType,
         mediaCategory,
         page,
      });

      return responseHandler.ok(res, response);
   } catch (error) {
      responseHandler.error(res);
   }
};

const getGenres = async (req, res) => {
   try {
      console.log("Genres");
      const { mediaType } = req.params;
      const response = await tmdbApi.mediaGenres({ mediaType });
      return responseHandler.ok(res, response);
   } catch (error) {
      responseHandler.error(res);
   }
};

const search = async (req, res) => {
   try {
      console.log("Search");
      const { mediaType } = req.params;
      const { query, page } = req.query;
      const response = await tmdbApi.mediaSearch({
         query,
         page,
         mediaType: mediaType === "people" ? "person" : mediaType,
      });
      responseHandler.ok(res, response);
   } catch (error) {
      responseHandler.error(res);
   }
};

const getDetail = async (req, res) => {
   try {
      console.log("Detail");
      const { mediaType, mediaId } = req.params;
      const params = { mediaType, mediaId };
      const media = await tmdbApi.mediaDetail(params);
      media.credits = await tmdbApi.mediaCredits(params);

      const videos = await tmdbApi.mediaVideos(params);
      media.videos = videos;

      const recommend = await tmdbApi.mediaRecommend(params);
      media.recommend = recommend;

      const images = await tmdbApi.mediaImages(params);
      media.images = images;

      const tokenDecoded = await tokenMiddleware.tokenDecode(req);
      if (tokenDecoded) {
         const user = await userModel.findById(tokenDecoded.data);
         if (user) {
            const isFavorite = await favoriteModel.findOne({
               user: user.id,
               mediaId,
            });
            media.favorite = isFavorite !== null;
         }
      }

      media.review = await reviewModel
         .find({
            mediaId,
         })
         .populate("user")
         .sort("-createdAt");

      responseHandler.ok(res, media);
   } catch (error) {
      responseHandler.error(res);
   }
};
const getTrending = async (req, res) => {
   try {
      console.log("Trending");
      const { mediaType, time } = req.params;
      const response = await tmdbApi.mediaTrending({ mediaType, time });
      responseHandler.ok(res, response);
   } catch (error) {
      responseHandler.error(res);
   }
};

export default { getList, getGenres, search, getDetail, getTrending };
