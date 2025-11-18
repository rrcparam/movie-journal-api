import { Router } from "express";
import { searchController } from "../../controllers/searchController";

const router = Router();

router.get("/search", searchController);

export default router;
