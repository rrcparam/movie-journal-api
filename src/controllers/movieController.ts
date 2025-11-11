import { Request, Response } from "express";
import * as movieService from "../services/movieService";

export const getAllMovies = async (req: Request, res: Response) => {
  const movies = await movieService.getAllMovies();
  res.json(movies);
};

export const getMovieById = async (req: Request, res: Response) => {
  const movie = await movieService.getMovieById(req.params.id);
  if (!movie) return res.status(404).json({ message: "Movie not found" });
  res.json(movie);
};

export const createMovie = async (req: Request, res: Response) => {
  const newMovie = await movieService.createMovie(req.body);
  res.status(201).json(newMovie);
};

export const updateMovie = async (req: Request, res: Response) => {
  const updatedMovie = await movieService.updateMovie(req.params.id, req.body);
  res.json(updatedMovie);
};

export const deleteMovie = async (req: Request, res: Response) => {
  await movieService.deleteMovie(req.params.id);
  res.status(204).send();
};
