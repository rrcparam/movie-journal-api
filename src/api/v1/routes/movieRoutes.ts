import { Router } from "express";
import {
  getAllMovies,
  getMovieById,
  createMovie,
  updateMovie,
  deleteMovie,
} from "../controllers/movieController";
import { authenticate } from "../middleware/authenticate";
const router = Router();

/**
 * @openapi
 * /movies:
 *   get:
 *     summary: Get all movies
 *     tags: [Movies]
 *     responses:
 *       "200":
 *         description: List of movies
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: "#/components/schemas/Movie"
 */
router.get("/",authenticate, getAllMovies);


/**
 * @openapi
 * /movies/{id}:
 *   get:
 *     summary: Get a movie by ID
 *     tags: [Movies]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Movie details
 *       404:
 *         description: Movie not found
 */
router.get("/:id",authenticate, getMovieById);

/**
 * @openapi
 * /movies:
 *   post:
 *     summary: Create a new movie
 *     tags: [Movies]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/MovieCreateInput"
 *     responses:
 *       "201":
 *         description: Movie created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/Movie"
 *       "400":
 *         description: Validation error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/Error"
 *       "401":
 *         description: Unauthorized
 */
router.post("/",authenticate,createMovie);

/**
 * @openapi
 * /movies/{id}:
 *   put:
 *     summary: Update a movie
 *     tags: [Movies]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/MovieCreateInput"
 *     responses:
 *       200:
 *         description: Movie updated
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Movie not found
 */
router.put("/:id",authenticate, updateMovie);


/**
 * @openapi
 * /movies/{id}:
 *   delete:
 *     summary: Delete a movie
 *     tags: [Movies]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Movie deleted
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Movie not found
 */
router.delete("/:id",authenticate, deleteMovie);


export default router;
