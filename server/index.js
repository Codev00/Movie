import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import http from "http";
import mongoose from "mongoose";
import "dotenv/config";
import router from "./src/routes/index.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(
   express.urlencoded({
      extended: false,
   })
);
app.use(cookieParser());
app.use("/api/tmdb/v1/", router);

const port = process.env.PORT || 8080;
const server = http.createServer(app);
mongoose
   .connect(process.env.MONGODB_URL, {
      dbName: "SunRio",
   })
   .then(() => {
      console.log("Connected to MongoDB");
      server.listen(port, () => {
         console.log("Server is running on port ", port);
      });
   })
   .catch((err) => {
      console.log(err);
      process.exit(1);
   });
