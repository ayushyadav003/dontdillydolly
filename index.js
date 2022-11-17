import express from "express";
import cors from "cors";
import { connectDb } from "./src/utils/db/index.js";
import movieRouter from "./src/routes/movies/index.js";
import seriesRouter from "./src/routes/tvSeries/index.js";
import searchRouter from "./src/routes/search/index.js";

connectDb();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use("/movies", movieRouter);
app.use("/tvSeries", seriesRouter);
app.use("/search", searchRouter);

try {
  const port = process.env.PORT || 8080;
  app.listen(port, () => {
    console.log(`Connected successfully on port ${port}`);
  });
} catch (error) {
  console.log(error);
}
