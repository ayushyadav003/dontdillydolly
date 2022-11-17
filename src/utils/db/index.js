import mongoose from "mongoose";
import { config } from "../config/index.js";
import axios from "axios";

// eb707d05b8msheeef29a3847dea8p190a84jsn0fabc29dba28

export const connectDb = async () => {
  const { dburl } = config;
  try {
    mongoose.connect(dburl);
    console.log("connected to database");
  } catch (error) {
    console.log(error, "Can't connect to database");
  }
};
