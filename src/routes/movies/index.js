import { Router } from "express";
import { getMovies } from "./controller/index.js";

const router = Router();

router.get("/", getMovies);

export default router;
