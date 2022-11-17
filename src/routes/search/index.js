import { Router } from "express";
import { searchItem } from "./controller/index.js";

const router = Router();

router.get("/all", searchItem);

export default router;
