import swaggerUi from "swagger-ui-express";
import { Express } from "express";
import { generateSwaggerSpec } from "./swaggerOptions";

const setupSwagger = (app: Express): void => {
  const specs = generateSwaggerSpec();
  // My  URL will be: http://localhost:3000/api/v1/docs
  app.use("/api/v1/docs", swaggerUi.serve, swaggerUi.setup(specs));
};

export default setupSwagger;
