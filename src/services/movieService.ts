import * as movieRepository from "../repositories/movieRepository";
import { Movie } from "../../src/models/movieModel";

export const getAllMovies = () => movieRepository.getAllMovies();
export const getMovieById = (id: string) => movieRepository.getMovieById(id);
export const createMovie = (movie: Movie) => movieRepository.createMovie(movie);
export const updateMovie = (id: string, movie: Partial<Movie>) =>
  movieRepository.updateMovie(id, movie);
export const deleteMovie = (id: string) => movieRepository.deleteMovie(id);
