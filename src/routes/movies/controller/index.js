// import { movieModel } from "../../../model/movie";
import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

export const getMovies = async (req, res) => {
  try {
    const page = req.query.page;
    const options = {
      method: "GET",
      url: `https://api.themoviedb.org/3/discover/movie?&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&&with_watch_monetization_types=flatrate`,
      params: {
        page: page,
        api_key: process.env.API_KEY,
      },
    };
    const { data } = await axios(options);
    res.status(200).json({
      message: "flag1",
      status: 200,
      data: data,
    });
  } catch (error) {
    console.log("error...", error);
  }
};
