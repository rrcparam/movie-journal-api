import { Router } from "express";
import {
  getWatchlist,
  addToWatchlist,
  removeFromWatchlist,
} from "../controllers/watchlistController";
import { authenticate } from "../middleware/authenticate";
const router = Router();


/**
 * @openapi
 * /watchlist:
 *   get:
 *     summary: Get user's watchlist
 *     tags: [Watchlist]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of watchlist items
 *
 *   post:
 *     summary: Add movie to watchlist
 *     tags: [Watchlist]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/WatchlistCreateInput"
 *     responses:
 *       201:
 *         description: Added to watchlist
 */

router.get("/", getWatchlist);
router.post("/", authenticate,  addToWatchlist);
router.delete("/:id", authenticate,  removeFromWatchlist);

export default router;
