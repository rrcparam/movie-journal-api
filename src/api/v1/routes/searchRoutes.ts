import { Router } from "express";
import { searchController } from "../controllers/searchController";
import { apiLimiter } from "../middleware/rateLimiter";

const router = Router();

// Apply rate limiter to this endpoint
router.get("/search", apiLimiter, searchController);

export default router;
