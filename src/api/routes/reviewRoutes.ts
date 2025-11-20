import { Router } from "express";
import {
  getReviewsByMovieId,
  createReview,
  deleteReview,
} from "../../controllers/reviewController";

const router = Router();

router.get("/:movieId", getReviewsByMovieId);
router.post("/", createReview);
router.delete("/:id", deleteReview);

export default router;
