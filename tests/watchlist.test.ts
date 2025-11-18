import request from "supertest";
import app from "../src/app";

describe("Watchlist API", () => {
  it("should add a movie to the watchlist", async () => {
    //  Arrange
    const item = {
      movieId: "1",
      title: "Inception"
    };

    //  Act
    const res = await request(app)
      .post("/api/v1/watchlist")
      .send(item);

    //  Assert
    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty("movieId", "1");
    expect(res.body).toHaveProperty("title", "Inception");
  });

  it("should return the watchlist items", async () => {


    //  Act
    const res = await request(app).get("/api/v1/watchlist");

    //  Assert
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body.length).toBeGreaterThan(0);
  });
});
