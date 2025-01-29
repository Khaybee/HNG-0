import { Router } from "express";
import { getInfo } from "./info/info";

const router = Router();

router.get("/info", getInfo);

export default router;