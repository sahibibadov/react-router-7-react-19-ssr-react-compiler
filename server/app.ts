import { createRequestHandler } from "@react-router/express";
import express from "express";
import "react-router";

declare module "react-router" {
  export interface AppLoadContext {
    VALUE_FROM_VERCEL: string;
    getPostsServer: typeof getPostsServer;
  }
}

const app = express();

const getPostsServer = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }
  return await response.json();
};

app.use(
  createRequestHandler({
    // @ts-expect-error - virtual module provided by React Router at build time
    build: () => import("virtual:react-router/server-build"),
    getLoadContext() {
      return {
        VALUE_FROM_VERCEL: "Hello from Vercel",
        getPostsServer,
      };
    },
  }),
);

export default app;
