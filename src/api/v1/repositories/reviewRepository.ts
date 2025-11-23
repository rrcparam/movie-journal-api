import { Review } from "../models/reviewModel";

let reviews: Review[] = [];

export const getReviewsByMovieId = (movieId: string): Review[] => {
  return reviews.filter((r) => r.movieId === movieId);
};

export const createReview = (review: Review): Review => {
  const newReview: Review = {
    ...review,
    id: (reviews.length + 1).toString(),
    createdAt: new Date().toISOString(),
  };
  reviews.push(newReview);
  return newReview;
};

export const deleteReview = (id: string): void => {
  reviews = reviews.filter((r) => r.id !== id);
};
