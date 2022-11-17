import { Router } from "express";
import { getSeries } from "./controller/index.js";

const router = Router();

router.get("/", getSeries);

export default router;
