/** @type {import('jest').Config} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  testMatch: ["**/tests/**/*.test.ts"],

  setupFiles: [],

  
  modulePathIgnorePatterns: ["<rootDir>/dist/"],

  transform: {
    "^.+\\.ts?$": "ts-jest",
  },

  clearMocks: true,
};
