import mongoose, { Schema } from "mongoose";
import modelOption from "./model.options.js";

const reviewSchema = new mongoose.Schema({
   user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
   },
   content: {
      type: String,
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
   modelOption,
});

const reviewModel = mongoose.model("Reviews", reviewSchema);

export default reviewModel;
