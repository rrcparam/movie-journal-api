import request from "supertest";
import app from "../src/app";

describe("Search API", () => {

  it("should return 400 if search query is missing", async () => {
    const res = await request(app).get("/api/v1/search");
    expect(res.statusCode).toBe(400);
  });

  it("should return search results", async () => {
    
    const res = await request(app).get("/api/v1/search?query=Sci");
    expect(res.statusCode).toBe(200);
    expect(res.body.data).toBeDefined();
    expect(Array.isArray(res.body.data)).toBe(true);
  });
});
