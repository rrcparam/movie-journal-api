
import express, { Express, Request, Response } from "express";
import cors from "cors";
import helmet from "helmet";
import movieRoutes from "./api/v1/routes/movieRoutes";
import swaggerRoutes from "../config/swagger";
import reviewRoutes from "./api/v1/routes/reviewRoutes";
import watchlistRoutes from "./api/v1/routes/watchlistRoutes";
import searchRoutes from "./api/v1/routes/searchRoutes";
import { apiLimiter } from "./api/v1/middleware/rateLimiter";


const app: Express = express();
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use("/api/", apiLimiter);

app.use("/api/v1/docs", swaggerRoutes);
app.use("/api/v1/reviews", reviewRoutes);
app.use("/api/v1/watchlist", watchlistRoutes);
app.use("/api/v1", searchRoutes);




// Health Check
app.get("/api/v1/health", (req: Request, res: Response) => {
  res.json({
    status: "OK",
    service: " Movie Journal API",
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
    version: "1.0.0",
  });
});

// This is for Register all main routes
app.use("/api/v1/movies", movieRoutes);

// Welcome route

app.get("/api/v1", (req: Request, res: Response) => {
  res.json({
    message: " Welcome to the Movie Journal API",
    routes: {
      movies: "/api/v1/movies",
      reviews: "/api/v1/reviews",
      watchlists: "/api/v1/watchlists",
      health: "/api/v1/health",
    },
  });
});

export default app;
