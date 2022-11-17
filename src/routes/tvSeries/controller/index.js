// import { movieModel } from "../../../model/movie";
import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

export const getSeries = async (req, res) => {
  try {
    const page = req.query.page;
    const options = {
      method: "GET",
      url: `https://api.themoviedb.org/3/discover/tv`,
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
