import swaggerJsdoc from "swagger-jsdoc";

const swaggerOptions: swaggerJsdoc.Options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Movie Journal API Documentation",
      version: "1.0.0",
      description:
        "API documentation for the Movie Journal backend. Includes Movies, Reviews, Watchlists, Search, and Authentication.",
    },

    servers: [
      {
        url: "http://localhost:3000/api/v1",
        description: "Local Development Server",
      },
    ],

    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },

      schemas: {
        /* MOVIES */
        Movie: {
          type: "object",
          properties: {
            id: { type: "string", example: "1" },
            title: { type: "string", example: "Inception" },
            genre: { type: "string", example: "Sci-Fi" },
            releaseYear: { type: "number", example: 2010 },
            rating: { type: "number", example: 9 },
          },
        },

        MovieCreateInput: {
          type: "object",
          required: ["title", "genre", "releaseYear"],
          properties: {
            title: { type: "string", example: "Interstellar" },
            genre: { type: "string", example: "Sci-Fi" },
            releaseYear: { type: "number", example: 2014 },
            rating: { type: "number", example: 9 },
          },
        },

        /* REVIEWS*/
        Review: {
          type: "object",
          properties: {
            id: { type: "string", example: "101" },
            movieId: { type: "string", example: "1" },
            userId: { type: "string", example: "firebaseUser123" },
            rating: { type: "number", example: 4 },
            comment: { type: "string", example: "Amazing movie!" },
            createdAt: {
              type: "string",
              format: "date-time",
              example: "2024-01-01T10:00:00Z",
            },
          },
        },

        ReviewCreateInput: {
          type: "object",
          required: ["movieId", "rating"],
          properties: {
            movieId: { type: "string", example: "1" },
            rating: { type: "number", example: 4 },
            comment: { type: "string", example: "Great movie!" },
          },
        },

        /*  WATCHLIST */
        WatchlistItem: {
          type: "object",
          properties: {
            id: { type: "string", example: "wl123" },
            movieId: { type: "string", example: "1" },
            userId: { type: "string", example: "firebaseUser123" },
            createdAt: {
              type: "string",
              format: "date-time",
              example: "2024-01-01T10:00:00Z",
            },
          },
        },

        WatchlistCreateInput: {
          type: "object",
          required: ["movieId"],
          properties: {
            movieId: { type: "string", example: "1" },
          },
        },

      
        Error: {
          type: "object",
          properties: {
            message: { type: "string" },
          },
          example: {
            message: "Something went wrong",
          },
        },
      },
    },

    // Global security applied to all endpoints 
    security: [
      {
        bearerAuth: [],
      },
    ],
  },

  apis: ["./src/api/v1/routes/*.ts", "./src/api/v1/validations/*.ts"],
};

export const generateSwaggerSpec = (): object => {
  return swaggerJsdoc(swaggerOptions);
};
