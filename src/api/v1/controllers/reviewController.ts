import { Request, Response } from "express";
import * as reviewService from "../services/reviewService";


export const getReviewsByMovieId = (req: Request, res: Response): void => {
  const { movieId } = req.params;
  const reviews = reviewService.getReviewsByMovieId(movieId);
  res.json(reviews);
};

export const createReview = (req: Request, res: Response): void => {
  const review = reviewService.createReview(req.body);
  res.status(201).json(review);
};

export const deleteReview = (req: Request, res: Response): void => {
  const { id } = req.params;
  reviewService.deleteReview(id);
  res.status(204).send();
};
