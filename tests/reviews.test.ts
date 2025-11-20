import request from "supertest";
import app from "../src/app";

describe("Review API", () => {
  it("should create a review", async () => {
    // Arrange
    const reviewData = {
      movieId: "1",
      reviewText: "Amazing movie!",
      rating: 9
    };

    // Act
    const res = await request(app)
      .post("/api/v1/reviews")
      .send(reviewData);

    //Assert
    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty("movieId", "1");
    expect(res.body).toHaveProperty("reviewText", "Amazing movie!");
  });

  it("should get reviews for a movie", async () => {
    // Arrange

    // Act
    const res = await request(app).get("/api/v1/reviews/1");

    //  Assert
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});
