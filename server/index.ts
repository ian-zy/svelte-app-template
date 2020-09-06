import fastify from "fastify";
import { registerExampleRoutes } from "./exampleRoutes";

export const app = fastify({
  logger: true
});

export type App = typeof app;

registerExampleRoutes(app, "/api");
