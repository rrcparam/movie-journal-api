import { Router } from "express";
import { searchController } from "../controllers/searchController";
import { apiLimiter } from "../middleware/rateLimiter";

const router = Router();

// Apply rate limiter to this endpoint

/**
 * @openapi
 * /search:
 *   get:
 *     summary: Search movies by title or genre
 *     tags: [Search]
 *     parameters:
 *       - name: query
 *         in: query
 *         required: true
 *         schema:
 *           type: string
 *         description: Search keyword for title or genre
 *     responses:
 *       "200":
 *         description: Search results
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Search results
 *                 count:
 *                   type: integer
 *                   example: 2
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: "#/components/schemas/Movie"
 *       "400":
 *         description: Missing query parameter
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/Error"
 */
router.get("/search", apiLimiter, searchController);

export default router;
