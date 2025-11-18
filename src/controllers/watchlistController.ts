import { Request, Response } from "express";
import * as watchlistService from "../services/watchlistService";

export const getWatchlist = (req: Request, res: Response): void => {
  const items = watchlistService.getWatchlist();
  res.json(items);
};

export const addToWatchlist = (req: Request, res: Response): void => {
  const item = watchlistService.addToWatchlist(req.body);
  res.status(201).json(item);
};

export const removeFromWatchlist = (req: Request, res: Response): void => {
  const { id } = req.params;
  watchlistService.removeFromWatchlist(id);
  res.status(204).send();
};
