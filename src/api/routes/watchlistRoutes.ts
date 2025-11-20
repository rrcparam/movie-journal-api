import { Router } from "express";
import {
  getWatchlist,
  addToWatchlist,
  removeFromWatchlist,
} from "../../controllers/watchlistController";

const router = Router();

router.get("/", getWatchlist);
router.post("/", addToWatchlist);
router.delete("/:id", removeFromWatchlist);

export default router;
