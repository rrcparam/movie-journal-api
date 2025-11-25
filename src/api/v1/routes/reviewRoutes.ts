import { Router } from "express";
import {
  getReviewsByMovieId,
  createReview,
  deleteReview,
} from "../controllers/reviewController";
import { authenticate } from "../middleware/authenticate";
const router = Router();

/**
 * @openapi
 * /reviews:
 *   get:
 *     summary: Get all reviews
 *     tags: [Reviews]
 *     responses:
 *       200:
 *         description: List of reviews
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: "#/components/schemas/Review"
 *
 *   post:
 *     summary: Create a review
 *     tags: [Reviews]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/ReviewCreateInput"
 *     responses:
 *       201:
 *         description: Review created
 *       401:
 *         description: Unauthorized
 */


router.get("/:movieId", getReviewsByMovieId);
router.post("/", authenticate, createReview);
router.delete("/:id", authenticate,  deleteReview);

export default router;
