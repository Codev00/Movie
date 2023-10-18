import express from "express";
import mediaController from "../controllers/media.controller.js";

const router = express.Router();

router.get("/:mediaType/search", mediaController.search);

router.get("/:mediaType/genres", mediaController.getGenres);

router.get("/:mediaType/detail/:mediaId", mediaController.getDetail);

router.get("/:mediaType/list/:mediaCategory", mediaController.getList);

router.get("/:mediaType/trending/:time", mediaController.getTrending);

router.get("/:mediaType/search/list", mediaController.getMediaGenresList);

router.get("/movie/upcoming", mediaController.getUpcoming);

export default router;
