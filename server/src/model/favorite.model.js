import mongoose from "mongoose";
import modelOption from "./model.option.js";

const favoriteSchema = new mongoose.Schema(
   {
      user: {
         type: Schema.Types.ObjectId,
         ref: "User",
         required: true,
      },

      mediaType: {
         type: String,
         enum: ["tv", "movie"],
         required: true,
      },
      mediaId: {
         type: String,
         required: true,
      },
      mediaTitle: {
         type: String,
         required: true,
      },
      mediaPoster: {
         type: String,
         required: true,
      },
      mediaRate: {
         type: Number,
         required: true,
      },
   },
   modelOption
);

const favoriteModel = mongoose.model("Favorites", favoriteSchema);

export default favoriteModel;
