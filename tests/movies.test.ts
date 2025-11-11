import request from "supertest";
import app from "../src/app";

describe("Movie API", () => {
  it("should return list of movies", async () => {

    // Act
    const res = await request(app).get("/api/v1/movies");

    //Assert
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it("should create a new movie", async () => {
    
    // Arrange
    const newMovie = {
      title: "Inception",
      genre: "Sci-Fi",
      releaseYear: 2010,
      rating: 9,
    };

    // Act
    const res = await request(app).post("/api/v1/movies").send(newMovie);

    //Assert
    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty("title", "Inception");
  });
});


