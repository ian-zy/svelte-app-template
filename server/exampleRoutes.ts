import { App } from "./index";

export const registerExampleRoutes = (app: App, prefix: string) => {
  app.register(
    async (f, options) => {
      f.get("/example", async (request, reply) => {
        return "Hello!";
      });
    },
    { prefix }
  );
};
