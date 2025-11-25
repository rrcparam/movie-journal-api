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
        description: "Local development server",
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
    // Global security
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
