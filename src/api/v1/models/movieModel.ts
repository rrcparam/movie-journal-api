export interface Movie {
  id?: string;
  title: string;
  genre: string;
  releaseYear: number;
  rating: number;
  review?: string;
  userId?: string;
}
