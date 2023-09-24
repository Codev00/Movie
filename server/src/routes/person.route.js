import express from "express";
import personController from "../controllers/person.controller.js";

const router = express.Router();

router.get("/:personId/medias", personController.personMedia);

router.get("/:personId", personController.personDetail);

export default router;
