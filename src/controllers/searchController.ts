import { Request, Response } from "express";
import { searchMovies } from "../services/searchService";

export const searchController = async (req: Request, res: Response) => {
  const query = req.query.query as string;

  if (!query) {
    return res.status(400).json({ message: "Search query is required" });
  }

  const results = await searchMovies(query);
  return res.status(200).json({
    message: "Search results",
    count: results.length,
    data: results,
  });
};
