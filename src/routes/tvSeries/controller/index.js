// import { movieModel } from "../../../model/movie";
import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

export const getSeries = async (req, res) => {
  try {
    var query = req.query;
    query.api_key = process.env.API_KEY;
    const options = {
      method: "GET",
      url: query.main
        ? `https://api.themoviedb.org/3/tv/${query.main}`
        : `https://api.themoviedb.org/3/discover/tv`,
      params: query,
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
