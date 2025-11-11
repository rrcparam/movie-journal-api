import { Movie } from "../../src/models/movieModel";

let movies: Movie[] = [
  { id: "1", title: "Inception", genre: "Sci-Fi", releaseYear: 2010, rating: 9 },
];

export const getAllMovies = () => movies;
export const getMovieById = (id: string) =>
  movies.find((movie) => movie.id === id);

export const createMovie = (movie: Movie) => {
  const newMovie = { ...movie, id: (movies.length + 1).toString() };
  movies.push(newMovie);
  return newMovie;
};

export const updateMovie = (id: string, movie: Partial<Movie>) => {
  const index = movies.findIndex((m) => m.id === id);
  if (index === -1) return null;
  movies[index] = { ...movies[index], ...movie };
  return movies[index];
};

export const deleteMovie = (id: string) => {
  movies = movies.filter((m) => m.id !== id);
};
