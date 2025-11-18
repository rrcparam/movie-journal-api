import { getAllMovies } from "../repositories/movieRepository";

export const searchMovies = async (query: string) => {
  const movies = await getAllMovies();

  const lowerQuery = query.toLowerCase();

  return movies.filter(movie =>
    movie.title.toLowerCase().includes(lowerQuery) ||
    movie.genre.toLowerCase().includes(lowerQuery)
  );
};
