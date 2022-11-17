import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

export const searchItem = async (req, res) => {
  try {
    const keyword = req.query.keyword;
    const page = req.query.page;
    const options = {
      method: "GET",
      url: "https://api.themoviedb.org/3/search/multi",
      params: {
        api_key: process.env.API_KEY,
        query: keyword,
        page: page,
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
