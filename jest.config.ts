/* eslint-disable import/no-extraneous-dependencies */
import { resolve } from "path";
import { pathsToModuleNameMapper } from "ts-jest";

import { compilerOptions } from "./tsconfig.json";

export default {
  bail: true,
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  coverageReporters: ["text-summary", "lcov"],
  collectCoverageFrom: ["<rootDir>/src/**/*.ts"],
  coveragePathIgnorePatterns: [
    "/node_modules/",
    "<rootDir>/src/**/dtos/*",
    "<rootDir>/src/**/repositories/**",
    "<rootDir>/src/**/test/**",
    "<rootDir>/src/**/containers/**",
    "<rootDir>/src/shared/index.ts",
    "<rootDir>/src/shared/Server.ts",
    "<rootDir>/**/routes/**",
    "<rootDir>/src/**/constants/**",
  ],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: "<rootDir>/src/",
  }),
  preset: "ts-jest",
  rootDir: resolve(__dirname),
};
