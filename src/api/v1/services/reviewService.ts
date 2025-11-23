import { Review } from "../models/reviewModel";
import * as reviewRepository from "../repositories/reviewRepository";

export const getReviewsByMovieId = (movieId: string): Review[] => {
  return reviewRepository.getReviewsByMovieId(movieId);
};

export const createReview = (review: Review): Review => {
  return reviewRepository.createReview(review);
};

export const deleteReview = (id: string): void => {
  reviewRepository.deleteReview(id);
};
