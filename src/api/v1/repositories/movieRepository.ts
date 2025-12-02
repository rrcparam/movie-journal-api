import { db } from "../../../config/firebaseConfig";
import { Movie } from "../models/movieModel";

const collection = db.collection("Movies");

// Get all movies
export const getAllMovies = async (): Promise<Movie[]> => {
  const snapshot = await collection.get();
  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as Movie[];
};

//Get movie by ID
export const getMovieById = async (id: string): Promise<Movie | null> => {
  const doc = await collection.doc(id).get();
  if (!doc.exists) return null;
  return { id: doc.id, ...doc.data() } as Movie;
};

// Create new movie
export const createMovie = async (movie: Movie): Promise<Movie> => {
  const docRef = await collection.add(movie);
  return { id: docRef.id, ...movie };
};

// Update movie
export const updateMovie = async (
  id: string,
  movie: Partial<Movie>
): Promise<Movie | null> => {
  const docRef = collection.doc(id);
  const doc = await docRef.get();

  if (!doc.exists) return null;

  await docRef.update(movie);
  const updated = await docRef.get();

  return { id: updated.id, ...updated.data() } as Movie;
};

//Delete movie
export const deleteMovie = async (id: string): Promise<boolean> => {
  await collection.doc(id).delete();
  return true;
};
