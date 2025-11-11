import swaggerUi from "swagger-ui-express";
import express from "express";

const router = express.Router();

const swaggerDocument = {
  openapi: "3.0.0",
  info: {
    title: "Movie Journal API",
    version: "1.0.0",
    description: "Backend API for managing movies, reviews, and watchlists.",
  },
  paths: {
    "/api/v1/movies": {
      get: {
        summary: "Get all movies",
        responses: { 200: { description: "List of movies" } },
      },
      post: {
        summary: "Add a new movie",
        responses: { 201: { description: "Movie created successfully" } },
      },
    },
  },
};

router.use("/", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

export default router;
