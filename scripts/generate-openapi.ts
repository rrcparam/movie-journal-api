import fs from "fs";
import path from "path";
import { generateSwaggerSpec } from "../src/config/swaggerOptions";


console.log("Generating OpenAPI spec...");

const specs = generateSwaggerSpec();
const outputPath = path.join(process.cwd(), "openapi.json");

fs.writeFileSync(outputPath, JSON.stringify(specs, null, 2));

console.log("OpenAPI spec generated at: openapi.json");
