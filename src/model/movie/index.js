import { schema, model } from "mongoose";

export const movieSchema = new Schema({
  title: { type: String },
  year: { type: Number },
  rated: { type: Number },
  released: { type: String },
  runtime: { type: String },
  genre: { type: String },
  director: { type: String },
  writer: { type: String },
  actors: { type: String },
  plot: { type: String },
  language: { type: String },
  country: { type: String },
  awards: { type: String },
  rating: { type: Array },
  imdb: { type: String },
  imdbvotes: { type: String },
});

export const movieModel = model(movie, movieSchema);
